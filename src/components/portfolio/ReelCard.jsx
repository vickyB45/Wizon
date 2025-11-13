import { Play } from "lucide-react";
import React, { useState } from "react";

const ReelCard = ({ title, src }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center">
      {/* Reel Container */}
      <div
        className="relative w-full max-w-[340px] aspect-[9/16] bg-black border-2 rounded-[22px] overflow-hidden cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        {/* Video paused initially */}
        <div className="relative w-full max-w-[340px] aspect-[9/16] rounded-[22px] overflow-hidden cursor-pointer">
          {/* Video */}
          <video
            autoPlay
            loop
            muted
            src={src}
            className="w-full h-full object-cover"
            playsInline
          />

          {/* Semi-transparent black overlay */}
          <div className="absolute inset-0 bg-black opacity-30 pointer-events-none"></div>

        </div>

        {/* Optional: Play icon overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Play className="h-16 w-16 text-white opacity-80" />
        </div>

      </div>

      {/* Title Section */}
      <div className="bg-black px-4 py-2 rounded-xl mt-4 text-white text-center text-sm md:text-lg font-medium truncate max-w-[340px]">
        {title || "Reel Title"}
      </div>

      {/* Fullscreen Lightbox */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onClick={() => setIsOpen(false)}
        >
          <video
            src={src}
            controls
            autoPlay
            className="w-full h-full max-w-[90%] max-h-[90%] object-contain"
            onClick={(e) => e.stopPropagation()} // prevent modal close when clicking video
          />
          {/* Close button */}
          <button
            className="absolute top-5 right-5 text-white text-3xl font-bold"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default ReelCard;
