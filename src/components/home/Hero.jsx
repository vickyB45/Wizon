import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex flex-col bg-[url(/image/bg.png)] bg-cover bg-bottom bg-no-repeat items-center justify-center text-center px-4 sm:px-6 py-8 sm:py-12 bg-white"
    >
      {/* text */}
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3, type: "spring" }}
        className="text-[34px] font-[500] sm:text-5xl md:text-6xl leading-snug text sm:leading-18 text-gray-900 max-w-md sm:max-w-4xl "
      >
        Is Your <span className="border-3 px-2 inline-block border-green-500 py-0">Revenue</span> Stuck <br />
        Between{" "}
        <motion.span
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-bold border-b-4 border-red-500"
        >
          ₹5L–₹10L/Month
        </motion.span>{" "}
        <br />
        <motion.span
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="block mt-1 sm:mt-2"
        >
          — No Matter What You Try?
        </motion.span>
      </motion.h1>

      {/* Sub text */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-6 sm:mt-8 text text-base sm:text-2xl font-[500] leading-4 text-gray-700 max-w-sm sm:max-w-3xl px-2"
      >
        We help fashion brands cross{" "}
        <motion.span
          initial={{ rotate: -15, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1, type: "spring" }}
          className="font-bold text"
        >
          ₹10L/month
        </motion.span>{" "}
        <br />
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 2,
            type: "spring",
            stiffness: 200,
          }}
          className="inline-block text-sm text mt-2 px-3 py-1 pb-1 bg-green-500 text-white font-semibold rounded"
        >
          profitably
        </motion.span>{" "}
        — with Meta Ads, UGC & real business strategy.
      </motion.p>
    </motion.section>
  );
};

export default Hero;
