import React, { useState } from "react";
import {
  FiHome,
  FiFileText,
  FiPlusCircle,
  FiLogOut,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { adminLogout } from "../store/adminAuthSlice";

export default function AdminLayout({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  function handleLogout() {
    dispatch(adminLogout()); // Redux logout
    localStorage.removeItem("adminAuth"); // LocalStorage cleanup
    navigate("/admin-login"); // Redirect to login
  }

  return (
    <div className="min-h-screen flex bg-gray-100 heading">

      {/* MOBILE TOP NAVBAR */}
      <div className="md:hidden fixed top-0 left-0 w-full z-30 bg-white shadow-md p-4 flex items-center justify-between">
        <button onClick={() => setOpen(true)} className="text-gray-700">
          <FiMenu size={26} />
        </button>
        <Link to="/" className="text-lg font-bold">Wizon</Link>
      </div>

      {/* MOBILE SIDEBAR OVERLAY */}
      {open && (
        <div
          className="md:hidden fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed top-0 left-0 h-full bg-white shadow-xl p-6 w-64 z-50
          transform transition-transform duration-300
          md:translate-x-0
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* CLOSE BUTTON (mobile only) */}
        <button
          className="md:hidden absolute top-4 right-4 text-gray-700"
          onClick={() => setOpen(false)}
        >
          <FiX size={24} />
        </button>

        <Link to="/" className="text-2xl font-bold mt-6">Wizon</Link>

        <nav className="space-y-4 mt-10 text-gray-700">

          <Link
            to="/admin"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 hover:text-primary"
          >
            <FiHome /> Dashboard
          </Link>

          <Link
            to="/admin/add-blog"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 hover:text-primary"
          >
            <FiPlusCircle /> Add Blog
          </Link>

          <Link
            to="/admin/all-blog"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 hover:text-primary"
          >
            <FiFileText /> All Blogs
          </Link>

          <button
            onClick={handleLogout}
            className="flex items-center gap-3 hover:text-red-600 mt-6"
          >
            <FiLogOut /> Logout
          </button>
        </nav>
      </aside>

      {/* CONTENT AREA */}
      <main className="flex-1 md:ml-64 p-5 text md:p-10 mt-14 md:mt-0">
        {children}
      </main>
    </div>
  );
}
