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
import DeleteConfirmModal from "../components/DeleteConfirmModal";
import { useAdminLogout } from "../hook/mutations/adminLogout";
import { Contact2 } from "lucide-react";

export default function AdminLayout({ children }) {
  const navigate = useNavigate();
  const { mutate: logout, isLoading } = useAdminLogout();

  const [open, setOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  // 🔐 ACTUAL LOGOUT (SERVER)
  const confirmLogout = () => {
    logout(null, {
      onSuccess: () => {
        navigate("/admin/login");
      },
    });
  };

  return (
    <div className="min-h-screen flex bg-gray-100 heading">
      {/* MOBILE TOP NAVBAR */}
      <div className="md:hidden fixed top-0 left-0 w-full z-30 bg-white shadow-md p-4 flex items-center justify-between">
        <button onClick={() => setOpen(true)} className="text-gray-700">
          <FiMenu size={26} />
        </button>
        <Link to="/" className="text-lg font-bold">
          Wizon
        </Link>
      </div>

      {/* MOBILE OVERLAY */}
      {open && (
        <div
          className="md:hidden fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
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
        {/* CLOSE BUTTON (mobile) */}
        <button
          className="md:hidden absolute top-4 right-4 text-gray-700"
          onClick={() => setOpen(false)}
        >
          <FiX size={24} />
        </button>

        {/* FLEX WRAPPER */}
        <div className="flex flex-col h-full">
          {/* TOP SECTION */}
          <div>
            <Link to="/" className="text-2xl font-bold mt-6 block">
              Wizon
            </Link>

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

              <Link
                to="/admin/contacts"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 hover:text-primary"
              >
                <Contact2  size={18}/> All Contacts
              </Link>

            </nav>
          </div>

          {/* 🔴 LOGOUT AT BOTTOM */}
          <button
            onClick={() => setShowLogoutConfirm(true)}
            disabled={isLoading}
            className="mt-auto flex items-center gap-3 text-red-600 
                       hover:text-red-700 py-3 disabled:opacity-60"
          >
            <FiLogOut /> Logout
          </button>
        </div>
      </aside>

      {/* CONTENT */}
      <main className="flex-1 md:ml-64 p-5 md:p-10 mt-14 md:mt-0">
        {children}
      </main>

      {/* 🔐 LOGOUT CONFIRM MODAL */}
      <DeleteConfirmModal
        open={showLogoutConfirm}
        onClose={() => setShowLogoutConfirm(false)}
        onConfirm={confirmLogout}
        title="Confirm Logout"
        description="Are you sure you want to logout? You will need to login again."
        confirmText="Yes, Logout"
        confirmVariant="primary"
      />

    </div>
  );
}
