import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";

const VideoSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
    <section className="flex justify-center items-center h-screen px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full max-w-4xl rounded-xl overflow-hidden shadow-lg border relative"
      >
        {/* Video */}
        <video
          ref={videoRef}
          src="https://cdn.pixabay.com/video/2022/01/16/104679-667563167_large.mp4"
          loop
          muted
          playsInline
          className="w-full h-auto object-cover"
        />

        {/* Play Button Overlay */}
        {!isPlaying && (
          <div
            onClick={handlePlay}
            className="absolute inset-0 flex justify-center items-center cursor-pointer z-10"
          >
            <div className="w-20 h-20 bg-white/40 bg-opacity-70 rounded-full flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-black/80 ml-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3 22v-20l18 10-18 10z" />
              </svg>
            </div>
          </div>
        )}
      </motion.div>
    </section>
    <div className="text-center">
      <Button text="BOOK YOUR FREE STRATEGY CALL"/>
    </div>
    </>
  );
};

export default VideoSection;
