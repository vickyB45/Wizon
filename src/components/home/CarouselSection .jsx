"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const items = [
  {
    heading: "Clear Strategy",
    text: "Get a custom, data-backed plan to scale your brand without guesswork.",
  },
  {
    heading: "Optimized for Profit",
    text: "We build a real acquisition machine — not just pretty ROAS on paper.",
  },
  {
    heading: "Consistent Growth",
    text: "No more up-down sales. We engineer month-on-month stability.",
  },
  {
    heading: "Strategy-Led Content",
    text: "Ads your customers actually want to see — and buy from.",
  },
  {
    heading: "A Partner, Not Agency",
    text: "From website to products, we guide what drives real growth — not just ads.",
  },
];

const CarouselSection = ({ containerVariants, itemVariants }) => {
  return (
    <div className="py-8 sm:py-12 md:mt-8 sm:mt-16 px-4 sm:px-0">
      {/* Animated Heading */}
      <motion.h2
        className="text-center text-4xl md:text-[52px] text tracking-tight leading-snug"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Here's What Changes When{" "}
        <span className="font-[600] border-b-[3px] border-green-500">
          We Partner
        </span>
      </motion.h2>

      {/* Swiper Carousel (UI same, just auto slide) */}
      <motion.div
        className="p-2 max-w-5xl mx-auto mt-6 sm:mt-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {items.map((item, i) => (
            <SwiperSlide key={i}>
              <motion.div variants={itemVariants}>
                <div className="p-4 sm:p-6 py-4 md:py-0  flex justify-center max-w-6xl mx-auto h-44 md:min-h-64 rounded-2xl border-2 border-green-500 hoverShadow flex-col">
                  {/* Heading */}
                  <h2 className="text-4xl md:text-5xl text font-[500] sm:text-left">
                    {item.heading}
                  </h2>

                  {/* Underline */}
                  <hr className="w-16 sm:w-20 mt-2 border-b-2 border-green-500 sm:mx-0" />

                  {/* Text */}
                  <h3 className="text-base sm:text-lg md:text-xl mt-4 sm:mt-5 text-zinc-700 leading-5 font-medium tracking-tighter text sm:text-left">
                    {item.text}
                  </h3>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

    </div>
  );
};

export default CarouselSection;
