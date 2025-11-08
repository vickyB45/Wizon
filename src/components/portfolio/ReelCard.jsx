import React from "react";

const ReelCard = ({ title, thumbnail }) => {
  return (
    <div className="flex flex-col items-center">
      {/* Reel Container */}
      <div className="relative w-full max-w-[340px] aspect-[9/16] bg-white border-2  rounded-[32px] overflow-hidden">
        {/* Thumbnail or Placeholder */}
        <img
          src={
            thumbnail ||
            "https://www.shutterstock.com/image-vector/black-background-vertical-video-format-260nw-2382588133.jpg"
          }
          alt={title || "Reel Preview"}
          className="w-full h-full object-cover"
        />

        {/* Overlay gradient for aesthetics */}
      </div>

      {/* Title Section */}
      <div className="bg-black px-4 py-2 rounded-xl mt-4 text-white text-center text-sm md:text-lg font-medium truncate max-w-[340px]">
        {title || "Reel Title"}
      </div>
    </div>
  );
};

export default ReelCard;
