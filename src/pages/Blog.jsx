"use client";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useBlogsQuery } from "../hooks/blogQueries";

const PAGE_SIZE = 6;

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString();
  } catch {
    return iso;
  }
}

/* --------------------------------------------------------
   🔥 Skeleton Components (Fast Loading UI)
---------------------------------------------------------*/
function BlogCardSkeleton() {
  return (
    <div className="bg-white rounded shadow-sm overflow-hidden animate-pulse">
      <div className="w-full h-48 md:h-40 bg-gray-200"></div>
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-3 bg-gray-200 rounded w-full"></div>
        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
      </div>
    </div>
  );
}

function SidebarSkeleton() {
  return (
    <div className="p-4 bg-white rounded shadow-sm animate-pulse">
      <div className="h-4 bg-gray-300 w-1/3 mb-4"></div>
      <div className="flex flex-wrap gap-2">
        {[1, 2, 3, 4].map((n) => (
          <div key={n} className="h-6 bg-gray-200 rounded w-16"></div>
        ))}
      </div>
    </div>
  );
}

function RecentPostsSkeleton() {
  return (
    <div className="p-4 bg-white rounded shadow-sm animate-pulse">
      <div className="h-4 bg-gray-300 w-1/3 mb-4"></div>
      <div className="space-y-3">
        {[1, 2, 3].map((n) => (
          <div key={n} className="space-y-1">
            <div className="h-3 bg-gray-200 w-3/4"></div>
            <div className="h-2 bg-gray-200 w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* --------------------------------------------------------
   MAIN BLOG PAGE
---------------------------------------------------------*/

export default function Blog() {
  // Fetch blogs
  const { data, isLoading } = useBlogsQuery();
  const posts = data?.blogs || [];

  // Only Published + newest first
  const publishedPosts = [...posts]
    .filter((p) => p.status === "Published")
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const [filtered, setFiltered] = useState([]);
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("");
  const [page, setPage] = useState(1);

  // Unique tags
  const tags = Array.from(new Set(publishedPosts.flatMap((p) => p.tags || [])));

  // Filter blogs
  useEffect(() => {
    const q = query.trim().toLowerCase();

    const out = publishedPosts.filter((p) => {
      const matchesSearch =
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q);

      const matchesTag = activeTag ? p.tags?.includes(activeTag) : true;

      return matchesSearch && matchesTag;
    });

    setFiltered(out);
    setPage(1);
  }, [query, activeTag, posts]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <main className="min-h-screen text py-12 px-4 md:px-8 lg:px-16">
      <section className="max-w-7xl mx-auto">

        {/* HEADER */}
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold heading">Blog</h1>
          <p className="mt-2 text-gray-600 text">
            Ideas, updates and tutorials from the Wizon team.
          </p>
        </header>

        <div className="mb-8 flex flex-col md:flex-row gap-6">

          {/* LEFT SIDE */}
          <div className="flex-1">

            {/* SEARCH */}
            <input
              type="text"
              placeholder="Search blogs..."
              className="w-full p-3 border rounded-xl shadow-sm mb-4 focus:ring-2 focus:ring-black outline-none"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            {/* BLOGS */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* 🟣 Show Skeletons when loading */}
              {isLoading &&
                [...Array(4)].map((_, i) => <BlogCardSkeleton key={i} />)}

              {/* 🟢 Loaded blogs */}
              {!isLoading &&
                visible.map((post) => (
                  <article
                    key={post._id}
                    className="bg-white rounded shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <Link to={`/blog/${post._id}`} className="block">
                      {/* IMAGE */}
                      <div className="relative w-full h-48 md:h-40 bg-gray-100 overflow-hidden">
                        <img
                          src={post.featuredImage}
                          alt={post.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>

                      <div className="p-4">
                        <h3 className="text-lg font-semibold mb-1 heading">
                          {post.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3 text">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <time>{formatDate(post.createdAt)}</time>
                        </div>
                      </div>
                    </Link>

                    {/* TAGS */}
                    <div className="p-3 border-t flex items-center gap-2 flex-wrap">
                      {post.tags?.map((t) => (
                        <button
                          key={t}
                          onClick={() => setActiveTag(t)}
                          className="text-xs px-2 py-1 rounded bg-gray-100 hover:bg-gray-200"
                        >
                          #{t}
                        </button>
                      ))}
                    </div>
                  </article>
                ))}
            </div>

            {/* PAGINATION */}
            {!isLoading && (
              <div className="mt-6 flex items-center justify-center gap-2">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="px-3 py-2 rounded border disabled:opacity-50"
                >
                  Prev
                </button>

                <div className="px-3 py-2">
                  Page {page} of {totalPages}
                </div>

                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="px-3 py-2 rounded border disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="w-full md:w-80 lg:w-96 space-y-4">

            {/* TAG FILTER */}
            {isLoading ? (
              <SidebarSkeleton />
            ) : (
              <div className="p-4 bg-white rounded shadow-sm">
                <h4 className="font-semibold mb-2 heading">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setActiveTag("")}
                    className={`px-2 py-1 rounded text-sm border ${
                      activeTag === "" ? "bg-black text-white" : ""
                    }`}
                  >
                    All
                  </button>

                  {tags.map((t) => (
                    <button
                      key={t}
                      onClick={() => setActiveTag(t)}
                      className={`px-2 py-1 rounded text-sm border ${
                        activeTag === t ? "bg-black text-white" : ""
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* RECENT POSTS */}
            {isLoading ? (
              <RecentPostsSkeleton />
            ) : (
              <div className="p-4 bg-white rounded shadow-sm">
                <h4 className="font-semibold mb-2 heading">Recent Posts</h4>
                <ul className="space-y-2">
                  {publishedPosts.slice(0, 5).map((p) => (
                    <li key={p._id}>
                      <Link
                        to={`/blog/${p._id}`}
                        className="text-sm hover:underline text"
                      >
                        {p.title}
                      </Link>
                      <div className="text-xs text-gray-500">
                        {formatDate(p.createdAt)}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* ABOUT BOX */}
            {!isLoading && (
              <div className="p-4 bg-white rounded shadow-sm">
                <h4 className="font-semibold mb-2 heading">About</h4>
                <p className="text-sm text-gray-600 text">
                  This blog is where we share ideas, updates, and practical lessons...
                </p>
              </div>
            )}

          </aside>
        </div>
      </section>
    </main>
  );
}
