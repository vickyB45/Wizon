"use client";
import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const RealRevenueSection = () => {
  return (
    <section className="text-center text py-10 md:py-6 px-6 overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        {/* Top Heading */}
        <motion.h2
          variants={fadeUp}
          className="text-2xl  md:text-3xl font-semibold text-black tracking-tight"
        >
          We don’t do{" "}
          <motion.span
            variants={fadeUp}
            className="text-green-500 font-semibold"
          >
            “one–size–fits–all”
          </motion.span>{" "}
          marketing. We go deep into your
        </motion.h2>

        {/* Red-bordered words */}
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-24 mt-10"
        >
          {["BRAND", "MARGINS", "AUDIENCE", "PRODUCTS"].map((word, i) => (
            <motion.span
              key={word}
              variants={fadeUp}
              transition={{ delay: i * 0.15 }}
              className="border-2 border-red-500 px-4 py-2 font-bold text[22px] md:text-2xl text-black"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        {/* Bottom Line Text */}
        <motion.h3
          variants={fadeUp}
          className="text-2xl md:text-3xl font-bold text-black mt-16"
        >
          AND CRAFT STRATEGIES THAT DRIVE{" "}
          <motion.span
            variants={fadeUp}
            className="bg-green-500 text-white px-2 py-1 inline-block"
          >
            REAL REVENUE.
          </motion.span>
        </motion.h3>

        {/* Underline Animation */}
        <motion.div
          className="w-62 h-[3px] bg-black mx-auto mt-6 md:mt-20 rounded-full origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        ></motion.div>
      </motion.div>
    </section>
  );
};

export default RealRevenueSection;
