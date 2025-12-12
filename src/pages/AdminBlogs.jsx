import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { toast } from "react-toastify";
import DeleteConfirmModal from "../components/DeleteConfirmModal";

import LoaderOverlay from "../components/LoaderOverlay";
import { useBlogsQuery, useDeleteBlogMutation } from "../hooks/blogQueries";

const PAGE_SIZE = 6;

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString();
  } catch {
    return iso;
  }
}

function truncate(text, max = 60) {
  if (!text) return "";
  return text.length > max ? text.slice(0, max) + "..." : text;
}

export default function AdminBlogs() {
  const { data, isLoading } = useBlogsQuery();
  const deleteBlog = useDeleteBlogMutation();

  const posts = data?.blogs || [];

  const [filtered, setFiltered] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [deleteId, setDeleteId] = useState(null);

  // When blogs load → store in filtered list
  useEffect(() => {
    setFiltered(posts);
  }, [posts]);

  // SEARCH
  useEffect(() => {
    const q = query.trim().toLowerCase();

    const out = posts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q)
    );

    setFiltered(out);
    setPage(1);
  }, [query, posts]);

  if (isLoading) return <LoaderOverlay text="Loading blogs..." />;

  // Sorting
  const sorted = [...filtered].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const visible = sorted.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  // DELETE
  function confirmDelete() {
    deleteBlog.mutate(deleteId, {
      onSuccess: () => {
        toast.success("Blog deleted successfully");
        setDeleteId(null);
      },
      onError: () => {
        toast.error("Failed to delete blog");
      },
    });
  }

  return (
    <AdminLayout>
      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold heading">All Blogs</h1>

        <Link
          to="/admin/add-blog"
          className="bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-900 transition"
        >
          + New Blog
        </Link>
      </div>

      {/* SEARCH */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search blog..."
          className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-xl shadow-sm 
                     focus:ring-2 focus:ring-black outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* ⬇ MOBILE VIEW */}
      <div className="md:hidden space-y-4 mb-6">
        {visible.length > 0 ? (
          visible.map((post) => (
            <div
              key={post._id}
              className="bg-white p-4 rounded-xl border shadow-sm hover:shadow-md transition"
            >
              <h2 className="font-bold text-gray-900 text-base text">
                {truncate(post.title, 35)}
              </h2>

              <p className="text-gray-600 text-sm mt-1">
                {truncate(post.excerpt, 50)}
              </p>

              <div className="flex justify-between items-center mt-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    post.status === "Published"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {post.status}
                </span>

                <span className="text-gray-500 text-xs">
                  {formatDate(post.createdAt)}
                </span>
              </div>

              <div className="flex justify-end mt-4 gap-3">
                <Link
                  to={`/admin/blog/edit/${post._id}`}
                  className="text-blue-600 text-sm flex items-center gap-1 hover:bg-blue-50 px-3 py-2 rounded-lg"
                >
                  <FiEdit2 size={16} /> Edit
                </Link>

                <button
                  onClick={() => setDeleteId(post._id)}
                  className="text-red-600 text-sm flex items-center gap-1 hover:bg-red-50 px-3 py-2 rounded-lg"
                >
                  <FiTrash2 size={16} /> Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 py-6">No blogs found.</p>
        )}
      </div>

      {/* ⬇ DESKTOP TABLE */}
      <div className="hidden md:block bg-white rounded-xl shadow-md border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[750px] text-left">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="p-4 font-semibold">Title</th>
                <th className="p-4 font-semibold">Date</th>
                <th className="p-4 font-semibold">Status</th>
                <th className="p-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {visible.map((post) => (
                <tr key={post._id} className="hover:bg-gray-50 transition">
                  <td className="p-4">
                    <h2 className="font-bold text-gray-900 text">
                      {truncate(post.title, 40)}
                    </h2>
                    <p className="text-gray-600 text-sm mt-1">
                      {truncate(post.excerpt, 60)}
                    </p>
                  </td>

                  <td className="p-4 text-gray-600 whitespace-nowrap">
                    {formatDate(post.createdAt)}
                  </td>

                  <td className="p-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        post.status === "Published"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {post.status}
                    </span>
                  </td>

                  <td className="p-4 text-right whitespace-nowrap flex justify-end gap-4">
                    <Link
                      to={`/admin/blog/edit/${post._id}`}
                      className="text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg flex items-center gap-1 transition text-sm"
                    >
                      <FiEdit2 size={16} /> Edit
                    </Link>

                    <button
                      onClick={() => setDeleteId(post._id)}
                      className="text-red-600 hover:bg-red-50 px-3 py-2 rounded-lg flex items-center gap-1 transition"
                    >
                      <FiTrash2 size={16} /> Delete
                    </button>
                  </td>
                </tr>
              ))}

              {visible.length === 0 && (
                <tr>
                  <td colSpan="4" className="p-6 text-center text-gray-500">
                    No blogs found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* PAGINATION */}
      <div className="mt-6 flex justify-center gap-3">
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
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          className="px-3 py-2 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* DELETE MODAL */}
      <DeleteConfirmModal
        open={deleteId !== null}
        onClose={() => setDeleteId(null)}
        onConfirm={confirmDelete}
      />
    </AdminLayout>
  );
}
