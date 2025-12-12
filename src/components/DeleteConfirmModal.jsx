import React, { useEffect } from "react";

export default function DeleteConfirmModal({ open, onClose, onConfirm }) {
  if (!open) return null;

  // Close modal on ESC key
  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
      
      {/* MODAL BOX */}
      <div className="bg-white rounded-xl shadow-xl p-6 w-[90%] max-w-md relative animate-fadeIn">

        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Confirm Deletion
        </h2>

        <p className="text-gray-600 mb-6">
          Are you sure you want to delete this blog? This action cannot be undone.
        </p>

        <div className="flex justify-end gap-3">

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
          >
            Yes, Delete
          </button>

        </div>
      </div>

    </div>
  );
}
