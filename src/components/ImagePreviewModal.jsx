import React from "react";
import { X } from "lucide-react";

export default function ImagePreviewModal({ open, image, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center">
      
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white bg-black/40 hover:bg-black/70 p-2 rounded-full transition"
      >
        <X size={24} />
      </button>

      {/* IMAGE BOX */}
      <div className="max-w-4xl w-full mx-4">
        <img
          src={image}
          alt="Preview"
          className="w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
        />
      </div>

    </div>
  );
}
