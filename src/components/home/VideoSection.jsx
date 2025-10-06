import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      <section className="flex justify-center items-center py-6 px-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-4xl  rounded-2xl overflow-hidden shadow-xl border relative bg-black"
        >
          {/* Video with subtle animation when playing */}
          <motion.video
            ref={videoRef}
            src="/video/home.mp4"
            loop
            muted
            playsInline
            className="w-full h-auto object-cover"
            animate={{ scale: isPlaying ? 1.05 : 1 }}
            transition={{ duration: 3, ease: "easeInOut", repeat: isPlaying ? Infinity : 0, repeatType: "reverse" }}
          />

          {/* Play Button Overlay with pulse animation */}
          <AnimatePresence>
            {!isPlaying && (
              <motion.div
                key="overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                onClick={handlePlay}
                className="absolute inset-0 flex justify-center items-center cursor-pointer z-10 bg-black/20 backdrop-blur-sm"
              >
                <motion.div
                  className="md:w-24 md:h-24 h-14 w-14 bg-white/40 rounded-full flex justify-center items-center"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [1, 0.8, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-black/80 ml-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 22v-20l18 10-18 10z" />
                  </svg>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* CTA Button Section */}
      <motion.div
        className="text-center text-xs md:text[16px]  mx-3"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
      >
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="inline-block"
        >
          <Button text="BOOK YOUR FREE STRATEGY CALL" />
        </motion.div>
      </motion.div>
    </>
  );
};

export default VideoSection;
