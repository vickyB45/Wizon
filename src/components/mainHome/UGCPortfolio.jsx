"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // ✅ Autoplay Added
import "swiper/css";
import "swiper/css/navigation";

const videos = [
  { id: 1, src: "/video/home1.mp4" },
  { id: 2, src: "/video/home1.mp4" },
  { id: 3, src: "/video/home1.mp4" },
  { id: 4, src: "/video/home1.mp4" },
  { id: 5, src: "/video/home1.mp4" },
  { id: 6, src: "/video/home1.mp4" },
  { id: 7, src: "/video/home1.mp4" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function UGCPortfolio() {
  const [lightboxVideo, setLightboxVideo] = useState(null);

  return (
    <section className="py-12 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 relative">

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

        <Swiper
          modules={[Navigation, Autoplay]} // ✅ Modules Updated
          autoplay={{
            delay: 3000, // ✅ 3 seconds auto slide
            disableOnInteraction: false, 
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = ".prev-btn";
            swiper.params.navigation.nextEl = ".next-btn";
          }}
          onSwiper={(swiper) => setTimeout(() => swiper.navigation.update())}
          navigation
          spaceBetween={30}
          loop
          speed={600}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-10"
        >
          {videos.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative group cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <video
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover object-center"
                />
                <div
                  className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition"
                  onClick={() => setLightboxVideo(item.src)}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ✅ Custom Navigation Buttons */}
        <div className="absolute md:flex hidden inset-0 pointer-events-none items-center justify-between px-6">
          <button className="prev-btn pointer-events-auto bg-white text-black w-10 h-10 rounded-full shadow flex items-center justify-center hover:bg-black hover:text-white transition">
            ❮
          </button>
          <button className="next-btn pointer-events-auto bg-white text-black w-10 h-10 rounded-full shadow flex items-center justify-center hover:bg-black hover:text-white transition">
            ❯
          </button>
        </div>
      </div>

      {/* ✅ Lightbox */}
      {lightboxVideo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[99999] p-4">
          <div className="relative w-full max-w-5xl max-h-[90vh] rounded-lg overflow-hidden flex items-center justify-center">
            <video
              src={lightboxVideo}
              controls
              autoPlay
              className="w-auto max-w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
            <button
              onClick={() => setLightboxVideo(null)}
              className="absolute top-2 right-2 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold hover:bg-red-500 hover:text-white transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
