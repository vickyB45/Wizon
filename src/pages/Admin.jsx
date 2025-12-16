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
  Tag,
  Server,
  Filter,
  ChevronDown
} from "lucide-react";
import { useAllContactsQuery, useMarkContactSeenMutation } from "../hook/query/contactQuery";
import { useSystemHelth } from "../hook/query/systemStatus";


export default function Admin() {
  const { data, isLoading } = useBlogsQuery();
  const { data: contactData, isLoading: contactsLoading } = useAllContactsQuery();
  const { data: systemStatusData, isLoading: systemLoading, isError: systemError } = useSystemHelth();

  const [dateFilter, setDateFilter] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const systemStatus = systemStatusData;
  const navigate = useNavigate();

  if (isLoading || contactsLoading) return <LoaderOverlay />;

  /* ================= DATE FILTER LOGIC ================= */
  const filterByDate = (items) => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    return items.filter((item) => {
      const itemDate = new Date(item.createdAt);

      switch (dateFilter) {
        case "today":
          return itemDate >= today;
        case "yesterday":
          return itemDate >= yesterday && itemDate < today;
        case "last7days":
          const last7 = new Date(today);
          last7.setDate(last7.getDate() - 7);
          return itemDate >= last7;
        case "lastMonth":
          const lastMonth = new Date(today);
          lastMonth.setMonth(lastMonth.getMonth() - 1);
          return itemDate >= lastMonth;
        case "last3Months":
          const last3Months = new Date(today);
          last3Months.setMonth(last3Months.getMonth() - 3);
          return itemDate >= last3Months;
        case "last6Months":
          const last6Months = new Date(today);
          last6Months.setMonth(last6Months.getMonth() - 6);
          return itemDate >= last6Months;
        case "all":
        default:
          return true;
      }
    });
  };

  const filterOptions = [
    { value: "today", label: "Today" },
    { value: "yesterday", label: "Yesterday" },
    { value: "last7days", label: "Last 7 Days" },
    { value: "lastMonth", label: "Last Month" },
    { value: "last3Months", label: "Last 3 Months" },
    { value: "last6Months", label: "Last 6 Months" },
    { value: "all", label: "All Time" }
  ];

  /* ================= BLOG DATA ================= */
  const posts = data?.blogs || [];
  const filteredPosts = filterByDate(posts);

  const totalBlogs = filteredPosts.length;
  const publishedBlogs = filteredPosts.filter((b) => b.status === "Published").length;
  const draftBlogs = filteredPosts.filter((b) => b.status === "Draft").length;

  const recentBlogs = [...filteredPosts]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5);

  /* ================= CONTACT DATA ================= */
  const contacts = contactData?.data || [];
  const filteredContacts = filterByDate(contacts);
  const totalContacts = filteredContacts.length;

  const recentContacts = [...filteredContacts]
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

  const statusUI = {
    healthy: {
      border: "border-green-100",
      bg: "bg-green-50",
      iconBg: "bg-green-100",
      text: "text-green-600",
      pill: "text-green-600 bg-green-50",
    },
    degraded: {
      border: "border-yellow-100",
      bg: "bg-yellow-50",
      iconBg: "bg-yellow-100",
      text: "text-yellow-600",
      pill: "text-yellow-700 bg-yellow-50",
    },
    critical: {
      border: "border-red-100",
      bg: "bg-red-50",
      iconBg: "bg-red-100",
      text: "text-red-600",
      pill: "text-red-600 bg-red-50",
    },
  };

  const ui = statusUI[systemStatus?.status] || statusUI.healthy;

  return (
    <AdminLayout>
      <div className="min-h-screen p-2 sm:p-6">
        {/* PAGE HEADER */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                Dashboard Overview
              </h1>
              <p className="text-gray-600 text-sm flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Welcome back! Here's what's happening today
              </p>
            </div>

            {/* DATE FILTER DROPDOWN */}
            <div className="relative w-full sm:w-auto">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="w-full sm:w-auto bg-white border-2 border-gray-200 text-gray-700 px-4 sm:px-6 py-3 
                           rounded-xl font-semibold hover:border-blue-400 hover:bg-blue-50
                           transition-all shadow-sm
                           flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-2">
                  <Filter size={18} />
                  <span className="text-sm sm:text-base">
                    {filterOptions.find(opt => opt.value === dateFilter)?.label}
                  </span>
                </div>
                <ChevronDown 
                  size={18} 
                  className={`transition-transform ${isFilterOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* DROPDOWN MENU */}
              {isFilterOpen && (
                <>
                  {/* Backdrop for mobile */}
                  <div 
                    className="fixed inset-0 z-10 sm:hidden" 
                    onClick={() => setIsFilterOpen(false)}
                  />
                  
                  <div className="absolute right-0 mt-2 w-full sm:w-56 bg-white rounded-xl shadow-xl 
                                  border border-gray-100 py-2 z-20 max-h-80 overflow-y-auto">
                    {filterOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setDateFilter(option.value);
                          setIsFilterOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 text-sm transition-colors
                                    ${dateFilter === option.value
                                      ? 'bg-blue-50 text-blue-700 font-semibold'
                                      : 'text-gray-700 hover:bg-gray-50'
                                    }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          
        </div>

        {/* STATS CARDS - 3 Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
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

          {/* Server Health */}
          <div
            className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl
              transition-all transform hover:-translate-y-1 border
              relative overflow-hidden group ${ui.border}`}
          >
            <div
              className={`absolute top-0 right-0 w-32 h-32 rounded-full
                -mr-16 -mt-16 opacity-50 ${ui.bg}`}
            />

            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${ui.iconBg}`}>
                  <Server size={24} className={ui.text} />
                </div>

                <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${ui.pill}`}>
                  {systemStatus?.status?.toUpperCase()}
                </span>
              </div>

              <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wide mb-1">
                Server Health
              </h3>

              {systemLoading ? (
                <p className="text-sm text-gray-400">Checking system status...</p>
              ) : systemError ? (
                <p className="text-sm text-red-500">Unable to fetch system status</p>
              ) : (
                <>
                  <p className="text-2xl font-bold text-gray-900 mb-1">
                    {systemStatus?.healthPercent}%
                  </p>

                 <div className="flex justify-between items-center">
                   <p className="text-sm text-gray-600">
                    Uptime: {systemStatus?.uptime?.readable}
                  </p>

                  <p className="text-xs text-gray-500 mt-2">
                    Node {systemStatus?.system?.nodeVersion} ·{" "}
                    {systemStatus?.system?.cpuCores} Cores
                  </p>
                 </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* RECENT BLOGS SECTION */}
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
              View All
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            {recentBlogs.length > 0 ? (
              <div className="divide-y divide-gray-100">
                {recentBlogs.map((post) => (
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
                                   rounded-lg hover:bg-blue-100 justify-center sm:justify-start"
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
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No blogs found</h3>
                <p className="text-gray-500 mb-4">No blogs match the selected time period</p>
              </div>
            )}
          </div>
        </div>

        {/* RECENT CONTACTS SECTION */}
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
              View All
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            {recentContacts.length > 0 ? (
              <div className="divide-y divide-gray-100">
                {recentContacts.map((c) => (
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
                            <p className="text-sm text-gray-600 flex items-center gap-2 break-all">
                              <Mail size={14} className="text-gray-400 flex-shrink-0" />
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
                      <button
                        onClick={() => {
                          navigate(`/admin/contacts/${c._id}`);
                        }}
                        className="flex items-center cursor-pointer gap-2 text-sm text-purple-600 hover:text-purple-700 
                                   font-semibold hover:gap-3 transition-all bg-purple-50 px-4 py-2 
                                   rounded-lg hover:bg-purple-100 justify-center sm:justify-start w-full sm:w-auto"
                      >
                        <Eye size={16} />
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-16 text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail size={32} className="text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No contacts found</h3>
                <p className="text-gray-500">No contacts match the selected time period</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}