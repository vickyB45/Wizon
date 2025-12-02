"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, FreeMode } from "swiper/modules";

const images = [
  "/image/portfolio/Arush_Ads_Manager.jpeg",
  "/image/portfolio/Arush_Shopify.jpeg",
  "/image/portfolio/Crook_Ads_Manager.jpeg",
  "/image/portfolio/Crook_Shopify.jpeg"
];

const BlueBoxSlider = () => {
  return (
    <div className="relative w-full pb-14">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[url('/grid-bg.png')] bg-cover bg-center opacity-20 pointer-events-none"></div>

      {/* Swiper container with visible overflow */}
      <div className="relative max-w-7xl mx-auto overflow-visible">
        <Swiper
          modules={[Autoplay, Pagination, FreeMode]}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          speed={4000}
          slidesPerView={1.2}
          spaceBetween={14}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="cursor-grab active:cursor-grabbing border-2 border-black h-54 rounded-xl overflow-hidden">
                <img
                  src={img}
                  alt={`portfolio-${i}`}
                  className="h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

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
