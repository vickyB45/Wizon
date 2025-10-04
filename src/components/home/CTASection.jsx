"use client";
import React from "react";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <div className="py-16  px-4">
    <section className="flex justify-center items-center ">
      <motion.div      
        style={{ boxShadow: "7px 7px 0 #fff207" }}
        className="bg-[url(/image/1.jpg)] text-white rounded-2xl relative p-10 max-w-5xl w-full text-center shadow-lg border border-gray-800"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Yellow border shadow effect */}
        <div className="absolute -bottom-2 -right-2 w-full h-full rounded-2xl border-2 border-black -z-10 "></div>

        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-5xl text  leading-snug"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          Ready to Scale Your Fashion Brand <br />
          <span className="font-extrabold">Beyond ₹10L/Month?</span>
        </motion.h2>

        {/* Sub Text */}
        <motion.p
          className="mt-4 text-lg text-gray-200 text tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          Let’s build a scalable, profitable growth system — without hacks, fluff, or guesswork.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="mt-8 z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="px-8 py-4 rounded-full cursor-pointer bg-black border-2 border-red-600 text-white font-bold text-sm tracking-wide  hover:text-white transition"
          >
            BOOK YOUR FREE STRATEGY CALL
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
      <h2 className="text-center text-2xl text font-[700] mt-5">WE'LL ADULT YOUR CURRENT SETUP AND SHOW YOU EXACTALY HOW WE'D SCALE YOUR BRAND. NO HARD SELL.</h2>
      </div>
  );
};

export default CTASection;
