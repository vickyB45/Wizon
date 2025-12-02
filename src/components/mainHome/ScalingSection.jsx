"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ScalingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="flex flex-col md:flex-row justify-between items-center   md:px-16 py-12 overflow-hidden"
    >
      {/* LEFT TEXT SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
      >
        {/* Top Line — Scaling + Round icon on mobile */}
        <div className="flex items-center justify-start  md:justify-start gap-7">
          <h1 className="text-black text-7xl sm:text-6xl md:text-[109px] font-semibold  tracking-tight leading-0 md:leading-[5rem] heading">
            Scaling
          </h1>

          {/* 🔹 Round Rotating Circle (only visible on mobile) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="relative w-[100px]  h-[100px] sm:w-[90px] sm:h-[90px] md:hidden flex justify-center items-center"
          >
            {/* Rotating Text */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              className="absolute inset-0"
            >
              <svg
                viewBox="0 0 300 300"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <path
                    id="circlePathMobile"
                    d="M150,150 m-120,0 a120,120 0 1,1 240,0 a120,120 0 1,1 -240,0"
                  />
                </defs>
                <text fill="#000" fontSize="35" fontWeight="500" textAnchor="middle">
                  <textPath xlinkHref="#circlePathMobile" startOffset="50%" textLength="750">
                    • ROI FOCUSED • D2C • META ADS • SCALE BRANDS 
                  </textPath>
                </text>
              </svg>
            </motion.div>

            {/* Center Image */}
            <img
              src="/image/circle-center.png"
              alt="center"
              className="absolute top-1/2 left-1/2 w-[70px] h-[70px] -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-md"
            />
          </motion.div>
        </div>

        {/* D2C Brands line */}
        <h1 className="text-black relative -mt-3 md:mt-0 text-7xl sm:text-6xl md:text-[109px] font-semibold tracking-tight heading">
          D2C Brands
        </h1>

        {/* Subtext */}
        <p className="mt-2 text md:mr-0 mr-14  text-start relative  text-2xl sm:text-2xl md:text-5xl font-normal text-black">
          with{" "}
          <span className= " text bg-black font-bold text-[#fffd2f] px-3 py-1 rounded-md">
            No-Fluff Meta Ads
          </span>
        </p>
      </motion.div>

      {/* DESKTOP RIGHT SIDE CIRCLE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        className="relative mt-10 md:mt-0 hidden md:flex justify-center items-center w-[250px] h-[250px]"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
          className="absolute inset-0"
        >
          <svg
            viewBox="0 0 300 300"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <path
                id="circlePathDesktop"
                d="M150,150 m-120,0 a120,120 0 1,1 240,0 a120,120 0 1,1 -240,0"
              />
            </defs>
            <text fill="#000" fontSize="22" fontWeight="500" textAnchor="middle">
              <textPath xlinkHref="#circlePathDesktop" startOffset="50%" textLength="750" className="text-3xl">
                • ROI FOCUSED • D2C • META ADS • SCALE BRANDS 
              </textPath>
            </text>
          </svg>
        </motion.div>

        <img
          src="/image/circle-center.png"
          alt="center"
          className="absolute top-1/2 left-1/2 w-[100px] h-[100px] -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-md"
        />
      </motion.div>
    </section>
  );
};

export default ScalingSection;
