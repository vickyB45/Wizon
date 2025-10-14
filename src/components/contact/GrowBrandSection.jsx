"use client";
import React from "react";
import { motion } from "framer-motion";

const GrowBrandSection = () => {
  return (
    <section className="text-center text pt-16 px-4 overflow-hidden">
      {/* Heading Animation */}
      <motion.h2
        className="text-3xl md:text-[54px] font-bold text-gray-900"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Let’s{" "}
        <span className="text-black">
          Grow Your{" "}
          <motion.span
            className="border-4 px-3 inline-block border-red-500"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "backOut" }}
            viewport={{ once: true }}
          >
            Brand
          </motion.span>
        </span>{" "}
        —{" "}
        <motion.span
          className="text-black relative inline-block"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Together.
        </motion.span>
      </motion.h2>

      {/* Paragraph Animation */}
      <motion.p
        className="text-gray-700 text-lg  md:text-2xl leading-7 mt-6 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Whether you’re just getting started or{" "}
        <motion.span
          className="bg-red-600 text-white px-1 py-1 inline-block"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          spending lakhs a month on ads,
        </motion.span>{" "}
        <br />
        we’re here to scale your fashion brand profitably — <br />
        without the fluff, just business–led growth.
      </motion.p>
    </section>
  );
};

export default GrowBrandSection;
