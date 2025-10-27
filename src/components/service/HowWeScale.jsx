"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const steps = [
  { id: 1, title: "Business Deep–Dive", desc: "We audit your brand data, creatives, funnel & product–market fit." },
  { id: 2, title: "Scaling Strategy Setup", desc: "Custom Meta Ads structure built around your growth goals." },
  { id: 3, title: "Content & Creative Execution", desc: "UGC, influencer reels & static creatives — all managed in-house." },
  { id: 4, title: "Daily Testing & Optimization", desc: "We iterate fast. No guesswork. No waiting on results." },
  { id: 5, title: "Monthly Reviews & Growth Planning", desc: "We track margins, advise beyond ads & plan next growth moves." },
];

const HowWeScale = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 md:px-6 px-2 overflow-hidden">
      <motion.h2
        className="text-3xl md:text-5xl heading font-bold text-center mb-14"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        “Here’s How We Scale Your Brand, Profitably”
      </motion.h2>

      <div className="relative">

        {/* Navigation Arrows */}
        <div className="absolute flex  inset-0 pointer-events-none items-center justify-between px-6 z-20">
          <button className="prev-btn pointer-events-auto bg-white text-black w-10 h-10 rounded-full shadow flex items-center justify-center hover:bg-black hover:text-white transition">
            ❮
          </button>
          <button className="next-btn pointer-events-auto bg-white text-black w-10 h-10 rounded-full shadow flex items-center justify-center hover:bg-black hover:text-white transition">
            ❯
          </button>
        </div>

        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
          }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          modules={[Autoplay, Navigation]}
          className="flex items-center"
        >
          {steps.map((step, index) => (
            <SwiperSlide key={step.id}>
              <div className="relative flex flex-col items-center text-center">
                {index !== steps.length - 1 && (
                  <div className="hidden md:block absolute top-9 left-1/2 w-[200%] border-t-2 border-black -z-10"></div>
                )}
                <div className="w-18 h-18 rounded-full border-2 border-black flex items-center justify-center text-2xl font-bold bg-white z-10">
                  {step.id}
                </div>
                <h3 className="font-semibold text-3xl mt-4">{step.title}</h3>
                <p className="text-white mt-2 inline-block leading-relaxed rounded-sm">
                  <span className="bg-black px-3 py-1 leading-9">{step.desc}</span>
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default HowWeScale;
