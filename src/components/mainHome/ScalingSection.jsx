"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ScalingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="flex flex-col heading md:flex-row justify-between items-center px-4 sm:px-8 md:px-16 py-12 overflow-hidden"
    >
      {/* Left Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="text-left text-7xl sm:text-8xl md:text-[109px] font-[600] leading-[1.1] md:leading-[1.05] tracking-tight"
      >
        <h1 className="text-black">
          Scaling <br />
          <span className="">D2C Brands</span>
        </h1>

        <p className="mt-6 text-2xl sm:text-3xl md:text-5xl font-[400] text text-black leading-snug">
          with{" "}
          <span className="bg-black text-[#e4fb03] px-3 py-1 rounded-md md:text-5xl">
            No-Fluff Meta Ads
          </span>
        </p>
      </motion.div>

      {/* Right Circular Text + Arrow Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        className="relative mt-10 md:mt-0  hidden md:flex justify-center"
      >
        <img className="w-48 sm:w-56 md:w-72 lg:w-80" src="/image/home.png" alt="" />
      </motion.div>
    </section>
  );
};

export default ScalingSection;
