import React from "react";
import AdminLayout from "../layout/AdminLayout";
import { FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useBlogsQuery } from "../hooks/blogQueries";
import LoaderOverlay from "../components/LoaderOverlay";

export default function Admin() {
  const { data, isLoading } = useBlogsQuery();

  if (isLoading) return <LoaderOverlay/>

  const posts = data?.blogs || [];

  // STATS
  const totalBlogs = posts.length;
  const publishedBlogs = posts.filter((b) => b.status === "Published").length;
  const draftBlogs = posts.filter((b) => b.status === "Draft").length;

  // Sort → latest first (createdAt)
  const recentBlogs = [...posts]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5);

  const formatDate = (iso) => {
    try {
      return new Date(iso).toLocaleDateString();
    } catch {
      return iso;
    }
  };

  const trunc = (txt = "") =>
    txt.length <= 20 ? txt : txt.slice(0, 30) + "...";

  return (
    <AdminLayout>
      {/* PAGE HEADER */}
      <div className="flex text flex-col sm:flex-row sm:justify-between sm:items-center mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Dashboard Overview</h1>
          <p className="text-gray-500 text-sm mt-1">Overview of your blog system</p>
        </div>

        <Link
          to="/admin/add-blog"
          className="bg-black text-white px-5 py-3 rounded-lg font-semibold hover:bg-gray-900 transition text-center"
        >
          + Add New Blog
        </Link>
      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        <Link to="/admin/all-blog">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-gray-500 text-sm">Total Blogs</h3>
            <p className="text-4xl font-bold mt-2">{totalBlogs}</p>
          </div>
        </Link>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-gray-500 text-sm">Published</h3>
          <p className="text-4xl font-bold mt-2">{publishedBlogs}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-gray-500 text-sm">Drafts</h3>
          <p className="text-4xl font-bold mt-2">{draftBlogs}</p>
        </div>
      </div>

      {/* RECENT BLOGS */}
      <h3 className="text-xl font-semibold mb-4">Recent Blogs</h3>

      <div className="bg-white rounded-xl shadow">
        
        {/* 📱 MOBILE VIEW */}
        <div className="block md:hidden space-y-4 p-4">
          {recentBlogs.length > 0 ? (
            recentBlogs.map((post) => (
              <div
                key={post._id}
                className="p-4 rounded-xl bg-gray-50 shadow-sm hover:shadow-md transition"
              >
                <h4 className="font-semibold text-gray-900 text-base truncate">
                  {trunc(post.title)}
                </h4>

                <p className="text-gray-500 text-sm mt-1 truncate">
                  {trunc(post.excerpt)}
                </p>

                <div className="flex justify-between items-center mt-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
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

                <div className="flex justify-end mt-3">
                  <Link
                    to={`/blog/${post._id}`}
                    className="flex items-center gap-1 text-blue-600 text-sm font-medium hover:underline"
                  >
                    <FiEye size={16} /> View
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 py-6">No blogs found.</p>
          )}
        </div>

        {/* 💻 DESKTOP TABLE */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full min-w-[750px] text-left">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="p-5 text-sm font-semibold text-gray-700">Blog Title</th>
                <th className="p-5 text-sm font-semibold text-gray-700">Date</th>
                <th className="p-5 text-sm font-semibold text-gray-700">Status</th>
                <th className="p-5 text-sm font-semibold text-right text-gray-700">View</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {recentBlogs.map((post) => (
                <tr key={post._id} className="hover:bg-gray-50 transition">
                  <td className="p-5">
                    <h4 className="font-semibold text-gray-900 truncate max-w-[240px]">
                      {trunc(post.title)}
                    </h4>
                    <p className="text-gray-500 text-sm truncate max-w-[240px]">
                      {trunc(post.excerpt)}
                    </p>
                  </td>

                  <td className="p-5 text-gray-600 whitespace-nowrap">
                    {formatDate(post.createdAt)}
                  </td>

                  <td className="p-5 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${
                        post.status === "Published"
                          ? "bg-green-100 text-green-700 border-green-200"
                          : "bg-yellow-100 text-yellow-700 border-yellow-300"
                      }`}
                    >
                      {post.status}
                    </span>
                  </td>

                  <td className="p-5 text-right whitespace-nowrap">
                    <Link
                      to={`/blog/${post._id}`}
                      className="text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg flex items-center gap-1 transition text-sm"
                    >
                      <FiEye size={18} /> View
                    </Link>
                  </td>
                </tr>
              ))}

              {recentBlogs.length === 0 && (
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
    </AdminLayout>
  );
}
