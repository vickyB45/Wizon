import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import { FiEdit2, FiTrash2, FiFilter, FiX } from "react-icons/fi";
import { toast } from "react-toastify";
import DeleteConfirmModal from "../components/DeleteConfirmModal";
import LoaderOverlay from "../components/LoaderOverlay";
import { useBlogsQuery, useDeleteBlogMutation } from "../hooks/blogQueries";
import { Calendar, CheckCircle, FileText, FileTextIcon, Inbox, Search, X } from "lucide-react";

const PAGE_SIZE = 6;

const formatDate = (iso) => {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return iso;
  }
};

const truncate = (text, max = 60) =>
  text?.length > max ? text.slice(0, max) + "..." : text || "";

export default function AdminBlogs() {
  const { data, isLoading } = useBlogsQuery();
  const deleteBlog = useDeleteBlogMutation();

  const posts = data?.blogs || [];

  // UI state
  const [filtered, setFiltered] = useState([]);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [dateRange, setDateRange] = useState("all");
  const [page, setPage] = useState(1);
  const [deleteId, setDeleteId] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  // Apply filters
  useEffect(() => {
    let result = [...posts];

    // Search
    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter(
        (p) =>
          p.title?.toLowerCase().includes(q) ||
          p.excerpt?.toLowerCase().includes(q) ||
          p.tags?.some((t) => t.toLowerCase().includes(q))
      );
    }

    // Status
    if (statusFilter !== "all") {
      result = result.filter((p) => p.status === statusFilter);
    }

    // Date filter
    if (dateRange !== "all") {
      const now = new Date();

      result = result.filter((p) => {
        const d = new Date(p.createdAt);

        if (dateRange === "today") {
          return (
            d.getDate() === now.getDate() &&
            d.getMonth() === now.getMonth() &&
            d.getFullYear() === now.getFullYear()
          );
        }

        if (dateRange === "week") {
          const weekAgo = new Date();
          weekAgo.setDate(weekAgo.getDate() - 7);
          return d >= weekAgo;
        }

        if (dateRange === "month") {
          const monthAgo = new Date();
          monthAgo.setMonth(monthAgo.getMonth() - 1);
          return d >= monthAgo;
        }

        if (dateRange === "year") {
          const yearAgo = new Date();
          yearAgo.setFullYear(yearAgo.getFullYear() - 1);
          return d >= yearAgo;
        }

        return true;
      });
    }

    // Sorting
    result.sort((a, b) => {
      if (sortBy === "newest")
        return new Date(b.createdAt) - new Date(a.createdAt);
      if (sortBy === "oldest")
        return new Date(a.createdAt) - new Date(b.createdAt);
      if (sortBy === "title-asc") return a.title.localeCompare(b.title);
      if (sortBy === "title-desc") return b.title.localeCompare(a.title);
      return 0;
    });

    setFiltered(result);
    setPage(1);
  }, [posts, query, statusFilter, sortBy, dateRange]);

  if (isLoading) return <LoaderOverlay text="Loading blogs..." />;

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  // Stats
  const stats = {
    total: posts.length,
    published: posts.filter((p) => p.status === "Published").length,
    draft: posts.filter((p) => p.status === "Draft").length,
  };

  // Delete
  const confirmDelete = () => {
    deleteBlog.mutate(deleteId, {
      onSuccess: () => {
        toast.success("Blog deleted permanently");
        setDeleteId(null);
      },
      onError: () => toast.error("Failed to delete blog"),
    });
  };

  const clearFilters = () => {
    setQuery("");
    setStatusFilter("all");
    setSortBy("newest");
    setDateRange("all");
  };

  const hasFilters =
    query ||
    statusFilter !== "all" ||
    sortBy !== "newest" ||
    dateRange !== "all";

  return (
    <AdminLayout>
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            All Blogs
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Showing {filtered.length} of {posts.length} blogs
          </p>
        </div>

        <Link
          to="/admin/add-blog"
          className="w-full sm:w-auto text-center bg-black
                     text-white px-6 py-2.5 rounded-xl font-semibold transition-all shadow-lg shadow-black/30"
        >
          + Create New Blog
        </Link>
      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-gradient-to-br from-white to-gray-50 p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-600 uppercase tracking-wide">
                Total Blogs
              </p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {stats.total}
              </p>
            </div>
           <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
  <FileText size={24} />
</div>

          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-2xl border border-green-200 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-green-700 uppercase tracking-wide">
                Published
              </p>
              <p className="text-3xl font-bold text-green-900 mt-2">
                {stats.published}
              </p>
            </div>
            <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl 
                flex items-center justify-center shadow-sm">
  <CheckCircle size={22} strokeWidth={2} />
</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-5 rounded-2xl border border-yellow-200 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-yellow-700 uppercase tracking-wide">
                Drafts
              </p>
              <p className="text-3xl font-bold text-yellow-900 mt-2">
                {stats.draft}
              </p>
            </div>
            <div className="w-12 h-12 bg-yellow-200 rounded-xl flex items-center justify-center">
<FileTextIcon size={22} strokeWidth={2} />
            </div>
          </div>
        </div>
      </div>

      {/* SEARCH + FILTERS */}
      <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-4 sm:p-6 mb-6">
        {/* Search Bar */}
        <div className="relative mb-4">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder=" Search by title, excerpt, or tags..."
            className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl 
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                       outline-none transition text-sm"
          />
          <span className="absolute left-4 top-3.5 text-gray-400 text-lg">
           <Search size={22} strokeWidth={2} />

          </span>
        </div>

        {/* Filter Toggle Button (Mobile) */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="w-full sm:hidden flex items-center justify-center gap-2 px-4 py-3 
                     border-2 border-gray-300 rounded-xl hover:bg-gray-50 transition font-medium"
        >
          {showFilters ? <FiX size={18} /> : <FiFilter size={18} />}
          {showFilters ? "Hide Filters" : "Show Filters"}
          {hasFilters && (
            <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
              Active
            </span>
          )}
        </button>

        {/* Filter Options */}
        <div
          className={`${
            showFilters ? "block" : "hidden"
          } sm:block mt-4 space-y-3`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Status Filter */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Status
              </label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl 
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                           outline-none transition text-sm bg-white"
              >
                <option value="all">All Status</option>
                <option value="Published"> Published</option>
                <option value="Draft"> Draft</option>
              </select>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl 
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                           outline-none transition text-sm bg-white"
              >
                <option value="newest"> Newest First</option>
                <option value="oldest"> Oldest First</option>
                <option value="title-asc"> Title (A-Z)</option>
                <option value="title-desc"> Title (Z-A)</option>
              </select>
            </div>

            {/* Date Range */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Date Range
              </label>
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl 
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                           outline-none transition text-sm bg-white"
              >
                <option value="all"> All Time</option>
                <option value="today"> Today</option>
                <option value="week"> Last 7 Days</option>
                <option value="month"> Last Month</option>
                <option value="year"> Last Year</option>
              </select>
            </div>
          </div>

          {/* Clear Filters */}
          {hasFilters && (
            <button
              onClick={clearFilters}
              className="text-sm font-medium text-blue-600 hover:text-blue-800 
                         hover:underline transition"
            >
 Clear all filters
            </button>
          )}
        </div>
      </div>

      {/* MOBILE CARDS VIEW */}
      <div className="block lg:hidden space-y-4 mb-6">
        {visible.length > 0 ? (
          visible.map((post) => (
            <div
              key={post._id}
              className="bg-white rounded-2xl shadow-md border border-gray-200 
                         overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h2 className="font-bold text-gray-900 text-base leading-tight flex-1">
                    {truncate(post.title, 50)}
                  </h2>
                  <span
                    className={`shrink-0 px-3 py-1 rounded-full text-xs font-bold ${
                      post.status === "Published"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {post.status}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {truncate(post.excerpt, 80)}
                </p>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs 
                                   rounded-lg font-medium border border-blue-200"
                      >
                        #{tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="text-xs text-gray-500 self-center">
                        +{post.tags.length - 3} more
                      </span>
                    )}
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-500 font-medium flex items-center gap-1">
  <Calendar size={14} strokeWidth={2} />
  {formatDate(post.createdAt)}
</span>


                  <div className="flex gap-2">
                    <Link
                      to={`/admin/blog/edit/${post._id}`}
                      className="flex items-center gap-1.5 text-blue-600 bg-blue-50 
                                 px-3 py-2 rounded-lg hover:bg-blue-100 transition text-sm font-medium"
                    >
                      <FiEdit2 size={14} />
                      Edit
                    </Link>

                    <button
                      onClick={() => setDeleteId(post._id)}
                      className="flex items-center gap-1.5 text-red-600 bg-red-50 
                                 px-3 py-2 rounded-lg hover:bg-red-100 transition text-sm font-medium"
                    >
                      <FiTrash2 size={14} />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
            <div className="text-6xl mb-4">📭</div>
            <p className="text-gray-500 font-medium mb-2">No blogs found</p>
            {hasFilters && (
              <button
                onClick={clearFilters}
                className="text-sm text-blue-600 hover:underline"
              >
                Clear filters to see all blogs
              </button>
            )}
          </div>
        )}
      </div>

      {/* DESKTOP TABLE VIEW */}
      <div className="hidden lg:block bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Blog Post
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Tags
                </th>
                <th className="px-6 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {visible.map((post) => (
                <tr
                  key={post._id}
                  className="hover:bg-blue-50/30 transition-colors"
                >
                  <td className="px-6 py-5">
                    <Link to={`/blog/${post._id}`}>
                    <h3 className="font-bold hover:underline text-gray-900 text-sm mb-1">
                      {truncate(post.title, 50)}
                    </h3></Link>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {truncate(post.excerpt, 80)}
                    </p>
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex flex-wrap gap-1.5 max-w-[200px]">
                      {post.tags?.slice(0, 2).map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-blue-50 text-blue-700 text-xs 
                                     rounded-md font-medium border border-blue-200"
                        >
                          #{tag}
                        </span>
                      ))}
                      {post.tags?.length > 2 && (
                        <span className="text-xs text-gray-500 self-center">
                          +{post.tags.length - 2}
                        </span>
                      )}
                    </div>
                  </td>

                  <td className="px-6 py-5 text-center">
                    <span className="text-sm text-gray-600 font-medium">
                      {formatDate(post.createdAt)}
                    </span>
                  </td>

                  <td className="px-6 py-5 text-center">
                    <span
                      className={`inline-block px-3 py-1.5 rounded-full text-xs font-bold ${
                        post.status === "Published"
                          ? "bg-green-100 text-green-700 border border-green-300"
                          : "bg-yellow-100 text-yellow-700 border border-yellow-300"
                      }`}
                    >
                      {post.status}
                    </span>
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex justify-end gap-2">
                      <Link
                        to={`/admin/blog/edit/${post._id}`}
                        className="flex items-center gap-1.5 text-blue-600 bg-blue-50 
                                   px-4 py-2 rounded-lg hover:bg-blue-100 transition text-sm font-medium"
                      >
                        <FiEdit2 size={14} />
                        Edit
                      </Link>

                      <button
                        onClick={() => setDeleteId(post._id)}
                        className="flex items-center gap-1.5 text-red-600 bg-red-50 
                                   px-4 py-2 rounded-lg hover:bg-red-100 transition text-sm font-medium"
                      >
                        <FiTrash2 size={14} />
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {visible.length === 0 && (
                <tr>
                  <td colSpan="5" className="px-6 py-12 text-center">
                    <div className="text-gray-300 mb-4 flex justify-center">
  <Inbox size={64} strokeWidth={1.8} />
</div>

<p className="text-gray-500 font-medium mb-2">
  No blogs found
</p>

                    {hasFilters && (
                      <button
                        onClick={clearFilters}
                        className="text-sm text-blue-600 hover:underline"
                      >
                        Clear filters to see all blogs
                      </button>
                    )}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-3">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="w-full sm:w-auto px-5 py-2.5 border-2 border-gray-300 rounded-xl 
                       disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 
                       transition font-semibold text-sm"
          >
            ← Previous
          </button>

          <div className="flex gap-2">
            {[...Array(Math.min(5, totalPages))].map((_, i) => {
              const pageNum = i + 1;
              return (
                <button
                  key={i}
                  onClick={() => setPage(pageNum)}
                  className={`w-10 h-10 rounded-xl font-bold text-sm transition ${
                    page === pageNum
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                      : "border-2 border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
            {totalPages > 5 && (
              <span className="self-center text-gray-400">...</span>
            )}
          </div>

          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
            className="w-full sm:w-auto px-5 py-2.5 border-2 border-gray-300 rounded-xl 
                       disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 
                       transition font-semibold text-sm"
          >
            Next →
          </button>
        </div>
      )}

      {/* DELETE MODAL */}
      
      <DeleteConfirmModal
  open={!!deleteId}
  onClose={() => setDeleteId(null)}
  onConfirm={confirmDelete}
  title="Confirm Deletion"
  description="Are you sure you want to delete this blog? This action cannot be undone."
  confirmText="Yes, Delete"
  confirmVariant="danger"
/>

    </AdminLayout>
  );
}