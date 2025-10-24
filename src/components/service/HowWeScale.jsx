"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const steps = [
  { id: 1, title: "Business Deep–Dive", desc: "We audit your brand data, creatives, funnel & product–market fit." },
  { id: 2, title: "Scaling Strategy Setup", desc: "Custom Meta Ads structure built around your growth goals." },
  { id: 3, title: "Content & Creative Execution", desc: "UGC, influencer reels & static creatives — all managed in-house." },
  { id: 4, title: "Daily Testing & Optimization", desc: "We iterate fast. No guesswork. No waiting on results." },
  { id: 5, title: "Monthly Reviews & Growth Planning", desc: "We track margins, advise beyond ads & plan next growth moves." },
];

const HowWeScale = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6 overflow-hidden">
      <motion.h2
        className="text-3xl md:text-5xl heading font-bold text-center mb-14"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        “Here’s How We Scale Your Brand, Profitably”
      </motion.h2>

      <div className="relative">
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
          }}
          loop={true} // enables infinite loop
          autoplay={{
            delay: 3000, // 3 seconds
            disableOnInteraction: false, // keeps autoplay after manual swipe
          }}
          modules={[Autoplay]} // include autoplay module
          className="flex items-center"
        >
          {steps.map((step, index) => (
            <SwiperSlide key={step.id}>
              <div className="flex flex-col text items-center text-center relative">
                {index !== steps.length - 1 && (
                  <div className="hidden md:block absolute top-9 left-1/2 w-full border-t-2 border-black -z-10"></div>
                )}
                <div className="w-18 h-18 rounded-full border-2 border-black flex items-center justify-center text-2xl text font-bold bg-white z-10">
                  {step.id}
                </div>
                <h3 className="font-semibold text-3xl mt-4">{step.title}</h3>
                <p className="  text-white  mt-2 inline-block leading-relaxed rounded-sm">
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
