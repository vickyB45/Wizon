"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, FreeMode } from "swiper/modules";

const BlueBoxSlider = () => {
  return (
    <div className="relative w-full pb-14 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[url('/grid-bg.png')] bg-cover bg-center opacity-20 pointer-events-none"></div>

      <Swiper
        modules={[Autoplay, Pagination, FreeMode]}
        loop={true}
        freeMode={true} // smooth continuous scroll
        autoplay={{
          delay: 1, // almost no delay
          disableOnInteraction: false,
        }}
        speed={4000} // higher speed for smoothness
        slidesPerView={1.2}
        spaceBetween={10}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        className="max-w-7xl mx-auto"
      >
        {[1, 2, 3, 4].map((i) => (
          <SwiperSlide key={i}>
            <div className="bg-blue-600 active:cursor-grabbing cursor-grab border-2 border-black h-64 flex items-center justify-center text-white text-2xl font-bold">
              Box {i}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <div className="custom-pagination flex justify-center gap-1.5 mt-6"></div>

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background-color: #fff;
          border: 2px solid #000;
          opacity: 1;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background-color: #000;
          border: 2px solid #000;
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default BlueBoxSlider;
