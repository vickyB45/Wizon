"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

const videos = [
  { id: 1, src: "/video/portfolio/1.mp4" },
  { id: 2, src: "/video/portfolio/2.mp4" },
  { id: 3, src: "/video/portfolio/3.mp4" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function UGCPortfolio() {
  const [activeVideo, setActiveVideo] = useState(null);

  const toggleMute = (id) => {
    setActiveVideo((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-12 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 relative">

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-[40px] heading font-semibold text-center mb-4"
        >
          UGC PORTFOLIO
        </motion.h2>

        {/* DESKTOP GRID */}
        <div className="hidden sm:flex flex-wrap justify-center gap-6 mt-6">
          {videos.map((item) => {
            const isActive = activeVideo === item.id;

            return (
              <div
                key={item.id}
                className="relative group cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 w-[300px]"
              >
                <video
                  src={item.src}
                  autoPlay
                  loop
                  playsInline
                  muted={!isActive}
                  className="w-full h-full object-cover"
                />

                {/* Mute/Unmute Button */}
                <button
                  onClick={() => toggleMute(item.id)}
                  className="absolute bottom-3 right-3 bg-black/60 text-white p-2 rounded-full"
                >
                  {isActive ? <Volume2 size={18} /> : <VolumeX size={18} />}
                </button>
              </div>
            );
          })}
        </div>

        {/* MOBILE ROW SLIDER */}
        <div className="sm:hidden flex gap-4 mt-6 overflow-x-auto pb-4 scrollbar-hide">
          {videos.map((item) => {
            const isActive = activeVideo === item.id;

            return (
              <div
                key={item.id}
                className="relative min-w-[260px] rounded-xl overflow-hidden shadow-md"
              >
                <video
                  src={item.src}
                  autoPlay
                  loop
                  playsInline
                  muted={!isActive}
                  className="w-full h-full object-cover"
                />

                {/* Mute/Unmute Button */}
                <button
                  onClick={() => toggleMute(item.id)}
                  className="absolute bottom-3 right-3 bg-black/60 text-white p-2 rounded-full"
                >
                  {isActive ? <Volume2 size={18} /> : <VolumeX size={18} />}
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
