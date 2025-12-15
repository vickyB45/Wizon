import React, { useEffect, useState } from "react";
import AdminLayout from "../layout/AdminLayout";
import { 
  Mail, 
  Phone, 
  Building2, 
  DollarSign, 
  Calendar,
  Search,
  Filter,
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import LoaderOverlay from "../components/LoaderOverlay";

const PAGE_SIZE = 10;

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

export default function ContactsPage() {
  // Replace with your actual data fetching hook
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Filters
  const [filtered, setFiltered] = useState([]);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [dateRange, setDateRange] = useState("all");
  const [budgetFilter, setBudgetFilter] = useState("all");
  const [adsFilter, setAdsFilter] = useState("all");
  const [page, setPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  // Mock data for demonstration
  useEffect(() => {
    // Replace this with actual API call
    setData([
      {
        _id: "693fde34f8c3852de55e705e",
        firstname: "Developer",
        lastname: "Vicky",
        phone: "9389897294",
        email: "v.bisht.kaalcoders@gmail.com",
        brandname: "KaalCoders PVT LTD",
        metaAds: "yes",
        monthlyBudget: "12,000",
        description: "Just Checking.",
        source: "contacts-form",
        createdAt: "2025-12-15T10:08:52.293Z",
      },
    ]);
  }, []);

  // Apply filters
  useEffect(() => {
    let result = [...data];

    // Search
    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter(
        (c) =>
          c.firstname?.toLowerCase().includes(q) ||
          c.lastname?.toLowerCase().includes(q) ||
          c.email?.toLowerCase().includes(q) ||
          c.brandname?.toLowerCase().includes(q) ||
          c.phone?.includes(q)
      );
    }

    // Budget filter
    if (budgetFilter !== "all") {
      result = result.filter((c) => {
        const budget = parseInt(c.monthlyBudget?.replace(/,/g, "") || "0");
        if (budgetFilter === "low") return budget < 10000;
        if (budgetFilter === "medium") return budget >= 10000 && budget < 50000;
        if (budgetFilter === "high") return budget >= 50000;
        return true;
      });
    }

    // Ads filter
    if (adsFilter !== "all") {
      result = result.filter((c) => c.metaAds?.toLowerCase() === adsFilter);
    }

    // Date filter
    if (dateRange !== "all") {
      const now = new Date();
      result = result.filter((c) => {
        const d = new Date(c.createdAt);
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
        return true;
      });
    }

    // Sorting
    result.sort((a, b) => {
      if (sortBy === "newest")
        return new Date(b.createdAt) - new Date(a.createdAt);
      if (sortBy === "oldest")
        return new Date(a.createdAt) - new Date(b.createdAt);
      if (sortBy === "name")
        return a.firstname.localeCompare(b.firstname);
      if (sortBy === "budget") {
        const budgetA = parseInt(a.monthlyBudget?.replace(/,/g, "") || "0");
        const budgetB = parseInt(b.monthlyBudget?.replace(/,/g, "") || "0");
        return budgetB - budgetA;
      }
      return 0;
    });

    setFiltered(result);
    setPage(1);
  }, [data, query, sortBy, dateRange, budgetFilter, adsFilter]);

  if (isLoading) return <LoaderOverlay text="Loading contacts..." />;

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  // Stats
  const stats = {
    total: data.length,
    withAds: data.filter((c) => c.metaAds?.toLowerCase() === "yes").length,
    highBudget: data.filter((c) => {
      const budget = parseInt(c.monthlyBudget?.replace(/,/g, "") || "0");
      return budget >= 50000;
    }).length,
  };

  const clearFilters = () => {
    setQuery("");
    setSortBy("newest");
    setDateRange("all");
    setBudgetFilter("all");
    setAdsFilter("all");
  };

  const hasFilters =
    query ||
    sortBy !== "newest" ||
    dateRange !== "all" ||
    budgetFilter !== "all" ||
    adsFilter !== "all";

  return (
    <AdminLayout>
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Contact Inquiries
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Showing {filtered.length} of {data.length} contacts
          </p>
        </div>
      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Total Inquiries
              </p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {stats.total}
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Meta Ads Interested
              </p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {stats.withAds}
              </p>
            </div>
            <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                High Budget (50K+)
              </p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {stats.highBudget}
              </p>
            </div>
            <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
              <Building2 className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* SEARCH + FILTERS */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 mb-6">
        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-3 w-5 h-5 text-gray-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, email, phone, or brand..."
            className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg 
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                       outline-none transition text-sm"
          />
        </div>

        {/* Filter Toggle Button (Mobile) */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="w-full sm:hidden flex items-center justify-center gap-2 px-4 py-3 
                     border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium"
        >
          {showFilters ? (
            <X className="w-4 h-4" />
          ) : (
            <Filter className="w-4 h-4" />
          )}
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
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
            {/* Sort By */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg 
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                           outline-none transition text-sm bg-white"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="name">Name (A-Z)</option>
                <option value="budget">Budget (High-Low)</option>
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
                className="w-full px-3 py-2 border border-gray-300 rounded-lg 
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                           outline-none transition text-sm bg-white"
              >
                <option value="all">All Time</option>
                <option value="today">Today</option>
                <option value="week">Last 7 Days</option>
                <option value="month">Last Month</option>
              </select>
            </div>

            {/* Budget Filter */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Budget Range
              </label>
              <select
                value={budgetFilter}
                onChange={(e) => setBudgetFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg 
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                           outline-none transition text-sm bg-white"
              >
                <option value="all">All Budgets</option>
                <option value="low">Below 10K</option>
                <option value="medium">10K - 50K</option>
                <option value="high">Above 50K</option>
              </select>
            </div>

            {/* Ads Interest */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Meta Ads
              </label>
              <select
                value={adsFilter}
                onChange={(e) => setAdsFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg 
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                           outline-none transition text-sm bg-white"
              >
                <option value="all">All</option>
                <option value="yes">Interested</option>
                <option value="no">Not Interested</option>
              </select>
            </div>
          </div>

          {/* Clear Filters */}
          {hasFilters && (
            <button
              onClick={clearFilters}
              className="text-sm font-medium text-blue-600 hover:text-blue-800 transition"
            >
              Clear all filters
            </button>
          )}
        </div>
      </div>

      {/* MOBILE CARDS VIEW */}
      <div className="block lg:hidden space-y-4 mb-6">
        {visible.length > 0 ? (
          visible.map((contact) => (
            <div
              key={contact._id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-gray-900 text-base">
                      {contact.firstname} {contact.lastname}
                    </h3>
                    <p className="text-sm text-gray-600 mt-0.5">
                      {contact.brandname}
                    </p>
                  </div>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {formatDate(contact.createdAt)}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <span>{contact.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <span>{contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <DollarSign className="w-4 h-4 text-gray-400" />
                    <span className="font-semibold">₹{contact.monthlyBudget}/month</span>
                  </div>
                </div>

                {contact.description && (
                  <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg mb-3">
                    {truncate(contact.description, 100)}
                  </p>
                )}

                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded ${
                      contact.metaAds?.toLowerCase() === "yes"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {contact.metaAds?.toLowerCase() === "yes"
                      ? "Meta Ads: Yes"
                      : "Meta Ads: No"}
                  </span>
                  <span className="text-xs text-gray-500">
                    Source: {contact.source}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <Mail className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 font-medium mb-2">No contacts found</p>
            {hasFilters && (
              <button
                onClick={clearFilters}
                className="text-sm text-blue-600 hover:underline"
              >
                Clear filters to see all contacts
              </button>
            )}
          </div>
        )}
      </div>

      {/* DESKTOP TABLE VIEW */}
      <div className="hidden lg:block bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Contact Info
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Brand
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Budget
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Meta Ads
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {visible.map((contact) => (
                <tr key={contact._id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">
                        {contact.firstname} {contact.lastname}
                      </p>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                        <Mail className="w-3 h-3" />
                        <span>{contact.email}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
                        <Phone className="w-3 h-3" />
                        <span>{contact.phone}</span>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-900 font-medium">
                        {contact.brandname}
                      </span>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-semibold text-gray-900">
                        ₹{contact.monthlyBudget}
                      </span>
                      <span className="text-xs text-gray-500">/mo</span>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`inline-block text-xs font-semibold px-2.5 py-1 rounded ${
                        contact.metaAds?.toLowerCase() === "yes"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {contact.metaAds?.toLowerCase() === "yes" ? "Yes" : "No"}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-600 max-w-xs">
                      {truncate(contact.description, 60)}
                    </p>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span>{formatDate(contact.createdAt)}</span>
                    </div>
                  </td>
                </tr>
              ))}

              {visible.length === 0 && (
                <tr>
                  <td colSpan="6" className="px-6 py-12 text-center">
                    <Mail className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 font-medium mb-2">
                      No contacts found
                    </p>
                    {hasFilters && (
                      <button
                        onClick={clearFilters}
                        className="text-sm text-blue-600 hover:underline"
                      >
                        Clear filters to see all contacts
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
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 
                       border border-gray-300 rounded-lg disabled:opacity-40 
                       disabled:cursor-not-allowed hover:bg-gray-50 transition font-medium text-sm"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>

          <div className="flex gap-2">
            {[...Array(Math.min(5, totalPages))].map((_, i) => {
              const pageNum = i + 1;
              return (
                <button
                  key={i}
                  onClick={() => setPage(pageNum)}
                  className={`w-10 h-10 rounded-lg font-semibold text-sm transition ${
                    page === pageNum
                      ? "bg-blue-600 text-white"
                      : "border border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 
                       border border-gray-300 rounded-lg disabled:opacity-40 
                       disabled:cursor-not-allowed hover:bg-gray-50 transition font-medium text-sm"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </AdminLayout>
  );
}