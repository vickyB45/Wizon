"use client";
import React from "react";
import { motion } from "framer-motion";

const TrustedBrands = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="pb-12">
      <motion.h2
        className=" text-5xl md:text-6xl heading text-center font-[600] py-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Brands That Trusted Us Still Do.
      </motion.h2>

      <motion.div
        className="grid-cols-1 grid px-4 sm:grid-cols-3 gap-8 max-w-5xl py-6 mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {["Peachyboo", "Crook Store", "Liveology"].map((brand, i) => (
          <motion.div
            key={i}
            className="border-green-500 border-2 p-4 text-2xl md:text-4xl min-h-50 md:min-h-60 text font-[700]"
            variants={itemVariants}
          >
            {brand}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TrustedBrands;
