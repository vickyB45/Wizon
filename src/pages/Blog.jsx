"use client";

import React, { useMemo, useState } from "react";
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
   🔥 Skeleton Components
---------------------------------------------------------*/
function BlogCardSkeleton() {
  return (
    <div className="bg-white rounded shadow-sm overflow-hidden animate-pulse">
      <div className="w-full h-48 md:h-40 bg-gray-200" />
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-3 bg-gray-200 rounded w-full" />
        <div className="h-3 bg-gray-200 rounded w-1/2" />
      </div>
    </div>
  );
}

function SidebarSkeleton() {
  return (
    <div className="p-4 bg-white rounded shadow-sm animate-pulse">
      <div className="h-4 bg-gray-300 w-1/3 mb-4" />
      <div className="flex flex-wrap gap-2">
        {[1, 2, 3, 4].map((n) => (
          <div key={n} className="h-6 bg-gray-200 rounded w-16" />
        ))}
      </div>
    </div>
  );
}

function RecentPostsSkeleton() {
  return (
    <div className="p-4 bg-white rounded shadow-sm animate-pulse">
      <div className="h-4 bg-gray-300 w-1/3 mb-4" />
      <div className="space-y-3">
        {[1, 2, 3].map((n) => (
          <div key={n} className="space-y-1">
            <div className="h-3 bg-gray-200 w-3/4" />
            <div className="h-2 bg-gray-200 w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* --------------------------------------------------------
   MAIN BLOG PAGE (FIXED)
---------------------------------------------------------*/
export default function Blog() {
  const { data, isLoading } = useBlogsQuery();
  const posts = data?.blogs || [];

  // Only published + newest first
  const publishedPosts = useMemo(() => {
    return [...posts]
      .filter((p) => p.status === "Published")
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }, [posts]);

  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("");
  const [page, setPage] = useState(1);

  // Unique tags
  const tags = useMemo(() => {
    return Array.from(
      new Set(publishedPosts.flatMap((p) => p.tags || []))
    );
  }, [publishedPosts]);

  // 🔥 Filtered blogs (NO useEffect)
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return publishedPosts.filter((p) => {
      const matchesSearch =
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q);

      const matchesTag = activeTag ? p.tags?.includes(activeTag) : true;

      return matchesSearch && matchesTag;
    });
  }, [query, activeTag, publishedPosts]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const visible = filtered.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  return (
    <main className="min-h-screen py-12 px-4 md:px-8 lg:px-16">
      <section className="max-w-7xl mx-auto">

        {/* HEADER */}
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold heading">Blog</h1>
          <p className="mt-2 text-gray-600">
            Ideas, updates and tutorials from the Wizon team.
          </p>
        </header>

        <div className="mb-8 flex flex-col md:flex-row gap-6">

          {/* LEFT */}
          <div className="flex-1">

            {/* SEARCH */}
            <input
              type="text"
              placeholder="Search blogs..."
              className="w-full p-3 border rounded-xl shadow-sm mb-4"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
            />

            {/* BLOG LIST */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {isLoading &&
                [...Array(4)].map((_, i) => (
                  <BlogCardSkeleton key={i} />
                ))}

              {!isLoading &&
                visible.map((post) => (
                  <article
                    key={post._id}
                    className="bg-white rounded shadow-sm hover:shadow-md transition"
                  >
                    <Link to={`/blog/${post._id}`}>
                      <div className="h-48 bg-gray-100">
                        <img
                          src={post.featuredImage}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="p-4">
                        <h3 className="text-lg font-semibold heading">
                          {post.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {post.excerpt}
                        </p>
                        <time className="text-xs text-gray-500 mt-2 block">
                          {formatDate(post.createdAt)}
                        </time>
                      </div>
                    </Link>

                    {/* TAGS */}
                    <div className="p-3 border-t flex flex-wrap gap-2">
                      {post.tags?.map((t) => (
                        <button
                          key={t}
                          onClick={() => {
                            setActiveTag(t);
                            setPage(1);
                          }}
                          className="text-xs px-2 py-1 bg-gray-100 rounded"
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
              <div className="mt-6 flex justify-center gap-2">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="px-3 py-2 border rounded disabled:opacity-50"
                >
                  Prev
                </button>

                <span className="px-3 py-2">
                  Page {page} of {totalPages}
                </span>

                <button
                  onClick={() =>
                    setPage((p) => Math.min(totalPages, p + 1))
                  }
                  disabled={page === totalPages}
                  className="px-3 py-2 border rounded disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="w-full md:w-80 space-y-4">
            {isLoading ? (
              <SidebarSkeleton />
            ) : (
              <div className="p-4 bg-white rounded shadow-sm">
                <h4 className="font-semibold mb-2 heading">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => {
                      setActiveTag("");
                      setPage(1);
                    }}
                    className={`px-2 py-1 border rounded ${
                      activeTag === "" && "bg-black text-white"
                    }`}
                  >
                    All
                  </button>

                  {tags.map((t) => (
                    <button
                      key={t}
                      onClick={() => {
                        setActiveTag(t);
                        setPage(1);
                      }}
                      className={`px-2 py-1 border rounded ${
                        activeTag === t && "bg-black text-white"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {!isLoading && (
              <div className="p-4 bg-white rounded shadow-sm">
                <h4 className="font-semibold mb-2 heading">Recent Posts</h4>
                <ul className="space-y-2">
                  {publishedPosts.slice(0, 5).map((p) => (
                    <li key={p._id}>
                      <Link to={`/blog/${p._id}`} className="text-sm hover:underline">
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
          </aside>
        </div>
      </section>
    </main>
  );
}
