import React, { useState, useEffect } from "react";
import AdminLayout from "../layout/AdminLayout";
import { FiEye } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useBlogsQuery } from "../hooks/blogQueries";
import LoaderOverlay from "../components/LoaderOverlay";
import { 
  Eye, 
  FileText, 
  Mail, 
  BookOpen, 
  Edit3,
  TrendingUp,
  Users,
  MessageSquare,
  ArrowUpRight,
  Calendar,
  Tag
} from "lucide-react";
import { useAllContactsQuery, useMarkContactSeenMutation } from "../hook/query/contactQuery";

export default function Admin() {
  const { data, isLoading } = useBlogsQuery();
  const { data: contactData, isLoading: contactsLoading } =
    useAllContactsQuery();

    const navigate = useNavigate()

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
  const totalContacts = contacts.length;

  const recentContacts = [...contacts]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5);

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

  const trunc = (txt = "") =>
    txt.length <= 30 ? txt : txt.slice(0, 30) + "...";

  return (
    <AdminLayout>
      <div className="min-h-screen  p-4 sm:p-6">
        {/* PAGE HEADER */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                Dashboard Overview
              </h1>
              <p className="text-gray-600 text-sm flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Welcome back! Here's what's happening today
              </p>
            </div>

            <Link
              to="/admin/add-blog"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 
                         rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 
                         transition-all shadow-lg shadow-blue-500/30 text-center 
                         flex items-center gap-2 justify-center transform hover:scale-105"
            >
              <Edit3 size={18} />
              Create New Blog
            </Link>
          </div>
        </div>

        {/* STATS CARDS - 4 Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {/* Total Blogs */}
          <Link to="/admin/all-blog" className="group">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl 
                            transition-all transform hover:-translate-y-1 border border-gray-100 
                            relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full 
                              -mr-16 -mt-16 opacity-50"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <FileText className="text-blue-600" size={24} />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-blue-600 opacity-0 
                                           group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wide mb-1">
                  Total Blogs
                </h3>
                <p className="text-4xl font-bold text-gray-900 mb-1">{totalBlogs}</p>
                <p className="text-xs text-blue-600 font-medium">View all blogs →</p>
              </div>
            </div>
          </Link>

          {/* Published Blogs */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl 
                          transition-all transform hover:-translate-y-1 border border-gray-100 
                          relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full 
                            -mr-16 -mt-16 opacity-50"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-green-100 rounded-xl">
                  <BookOpen className="text-green-600" size={24} />
                </div>
                <span className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1.5 rounded-full">
                  LIVE
                </span>
              </div>
              <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wide mb-1">
                Published
              </h3>
              <p className="text-4xl font-bold text-gray-900 mb-1">{publishedBlogs}</p>
              <p className="text-xs text-green-600 font-medium">
                {totalBlogs > 0 ? Math.round((publishedBlogs / totalBlogs) * 100) : 0}% of total blogs
              </p>
            </div>
          </div>

          {/* Draft Blogs */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl 
                          transition-all transform hover:-translate-y-1 border border-gray-100 
                          relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-full 
                            -mr-16 -mt-16 opacity-50"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-amber-100 rounded-xl">
                  <Edit3 className="text-amber-600" size={24} />
                </div>
                <span className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1.5 rounded-full">
                  PENDING
                </span>
              </div>
              <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wide mb-1">
                Drafts
              </h3>
              <p className="text-4xl font-bold text-gray-900 mb-1">{draftBlogs}</p>
              <p className="text-xs text-amber-600 font-medium">Needs review & publish</p>
            </div>
          </div>

          {/* Total Contacts */}
          <Link to="/admin/contacts" className="group">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl 
                            transition-all transform hover:-translate-y-1 border border-gray-100 
                            relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full 
                              -mr-16 -mt-16 opacity-50"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <Mail className="text-purple-600" size={24} />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-purple-600 opacity-0 
                                           group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wide mb-1">
                  Total Contacts
                </h3>
                <p className="text-4xl font-bold text-gray-900 mb-1">{totalContacts}</p>
                <p className="text-xs text-purple-600 font-medium">View all contacts →</p>
              </div>
            </div>
          </Link>
        </div>

        {/* RECENT BLOGS SECTION - Full Width */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <FileText size={24} className="text-blue-600" />
                Recent Blog Posts
              </h2>
              <p className="text-sm text-gray-500 mt-1">Latest published and draft articles</p>
            </div>
            <Link
              to="/admin/all-blog"
              className="text-sm text-blue-600 hover:text-blue-700 font-semibold 
                         flex items-center gap-1 hover:gap-2 transition-all"
            >
              View All Blogs
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            {recentBlogs.length > 0 ? (
              <div className="divide-y divide-gray-100">
                {recentBlogs.map((post, index) => (
                  <div
                    key={post._id}
                    className="p-5 sm:p-6 hover:bg-gradient-to-r hover:from-blue-50 
                               hover:to-transparent transition-all group"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                            <FileText size={20} className="text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2 flex-wrap">
                              <h4 className="font-bold text-gray-900 text-base group-hover:text-blue-600 transition-colors">
                                {post.title}
                              </h4>
                              <span
                                className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                                  post.status === "Published"
                                    ? "bg-green-100 text-green-700"
                                    : "bg-amber-100 text-amber-700"
                                }`}
                              >
                                {post.status}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                              {post.excerpt}
                            </p>
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                              <span className="flex items-center gap-1">
                                <Calendar size={14} />
                                {formatDate(post.createdAt)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Link
                        to={`/blog/${post._id}`}
                        className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 
                                   font-semibold hover:gap-3 transition-all bg-blue-50 px-4 py-2 
                                   rounded-lg hover:bg-blue-100"
                      >
                        <FiEye size={16} />
                        View Post
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-16 text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText size={32} className="text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No blogs yet</h3>
                <p className="text-gray-500 mb-4">Get started by creating your first blog post</p>
                <Link
                  to="/admin/add-blog"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 
                             font-semibold text-sm"
                >
                  <Edit3 size={16} />
                  Create First Blog →
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* RECENT CONTACTS SECTION - Full Width */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Mail size={24} className="text-purple-600" />
                Recent Contact Inquiries
              </h2>
              <p className="text-sm text-gray-500 mt-1">Latest messages from visitors</p>
            </div>
            <Link
              to="/admin/contacts"
              className="text-sm text-purple-600 hover:text-purple-700 font-semibold 
                         flex items-center gap-1 hover:gap-2 transition-all"
            >
              View All Contacts
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            {recentContacts.length > 0 ? (
              <div className="divide-y divide-gray-100">
                {recentContacts.map((c, index) => (
                  <div
                    key={c._id}
                    className="p-5 sm:p-6 transition-all group"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-400 
                                        to-purple-600 rounded-xl flex items-center justify-center 
                                        text-white font-bold text-lg shadow-lg flex-shrink-0
                                        transition-transform">
                          {c.firstname[0]}{c.lastname[0]}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-gray-900 text-base mb-1 group-hover:text-purple-600 transition-colors">
                            {c.firstname} {c.lastname}
                          </h4>
                          <div className="space-y-1 mb-3">
                            <p className="text-sm text-gray-600 flex items-center gap-2">
                              <Mail size={14} className="text-gray-400" />
                              {c.email}
                            </p>
                          </div>
                          <div className="flex items-center gap-3 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                              <Calendar size={14} />
                              {formatDate(c.createdAt)}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p
                      onClick={()=>{
                        navigate(`/admin/contacts/${c._id}`)
                        useMarkContactSeenMutation()
                      }}
                        className="flex items-center cursor-pointer gap-2 text-sm text-purple-600 hover:text-purple-700 
                                   font-semibold hover:gap-3 transition-all bg-purple-50 px-4 py-2 
                                   rounded-lg hover:bg-purple-100"
                      >
                        <Eye size={16} />
                        View Details
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-16 text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail size={32} className="text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No contacts yet</h3>
                <p className="text-gray-500">Contact inquiries will appear here</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}