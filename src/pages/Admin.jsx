import React from "react";
import AdminLayout from "../layout/AdminLayout";
import { FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useBlogsQuery } from "../hooks/blogQueries";
import LoaderOverlay from "../components/LoaderOverlay";
import { Eye } from "lucide-react";
import { useAllContactsQuery } from "../hook/query/contactQuery";

export default function Admin() {
  const { data, isLoading } = useBlogsQuery();
  const { data: contactData, isLoading: contactsLoading } =
    useAllContactsQuery();

  if (isLoading || contactsLoading) return <LoaderOverlay />;

  /* ================= BLOG DATA ================= */
  const posts = data?.blogs || [];

  const totalBlogs = posts.length;
  const publishedBlogs = posts.filter(
    (b) => b.status === "Published"
  ).length;
  const draftBlogs = posts.filter((b) => b.status === "Draft").length;

  const recentBlogs = [...posts]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5);

  /* ================= CONTACT DATA ================= */
  const contacts = contactData?.data || [];

  const recentContacts = [...contacts]
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
    txt.length <= 30 ? txt : txt.slice(0, 30) + "...";

  return (
    <AdminLayout>
      {/* PAGE HEADER */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Dashboard Overview</h1>
          <p className="text-gray-500 text-sm mt-1">
            Overview of your system
          </p>
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

      {/* RECENT BLOGS + CONTACTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ================= RECENT BLOGS ================= */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Recent Blogs</h3>
          <div className="bg-white rounded-xl shadow divide-y">
            {recentBlogs.length > 0 ? (
              recentBlogs.map((post) => (
                <div
                  key={post._id}
                  className="p-5 hover:bg-gray-50 transition"
                >
                  <h4 className="font-semibold text-gray-900 truncate">
                    {trunc(post.title)}
                  </h4>
                  <p className="text-sm text-gray-500 truncate">
                    {trunc(post.excerpt)}
                  </p>

                  <div className="flex justify-between items-center mt-3">
                    <span className="text-xs text-gray-500">
                      {formatDate(post.createdAt)}
                    </span>

                    <Link
                      to={`/blog/${post._id}`}
                      className="flex items-center gap-1 text-sm text-blue-600 hover:underline"
                    >
                      <FiEye size={16} /> View
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p className="p-6 text-center text-gray-500">
                No blogs found
              </p>
            )}
          </div>
        </div>

        {/* ================= RECENT CONTACTS ================= */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Recent Contacts</h3>
          <div className="bg-white rounded-xl shadow divide-y">
            {recentContacts.length > 0 ? (
              recentContacts.map((c) => (
                <div
                  key={c._id}
                  className="p-5 hover:bg-gray-50 transition"
                >
                  <h4 className="font-semibold text-gray-900">
                    {c.firstname} {c.lastname}
                  </h4>

                  <p className="text-sm text-gray-500 truncate">
                    {c.email}
                  </p>

                  <div className="flex justify-between items-center mt-3">
                    <span className="text-xs text-gray-500">
                      {formatDate(c.createdAt)}
                    </span>

                    <Link
                      to={`/admin/contacts/${c._id}`}
                      className="flex items-center gap-1 text-sm text-blue-600 hover:underline"
                    >
                      <Eye size={16} /> View
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p className="p-6 text-center text-gray-500">
                No contacts found
              </p>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
