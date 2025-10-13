import React from "react";
import { motion } from "framer-motion";

const GrowthSection = () => {
  return (
    <section className="relative py-12 h-full  md:mt-10 overflow-hidden">
      {/* Slanted Black Bar */}
    <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 w-[101vw] md:rotate-2 rotate-4 origin-top-left bg-black text-white py-2 md:py-1.5 text-[16px] md:text-[25px] tracking-wide"
      >
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="10"
          className="flex items-center whitespace-nowrap"
        >
          {/* Duplicate content for seamless loop */}
          <span className="px-8">₹3.5Cr+ Sales</span>
          <span className="text-gray-400">|</span>
          <span className="px-8">₹1Cr+ Ad Spend</span>
          <span className="text-gray-400">|</span>
          <span className="px-8">30+ Brands</span>
          <span className="text-gray-400">|</span>

          <span className="px-8">₹3.5Cr+ Sales</span>
          <span className="text-gray-400">|</span>
          <span className="px-8">₹1Cr+ Ad Spend</span>
          <span className="text-gray-400">|</span>
          <span className="px-8">30+ Brands</span>
          <span className="text-gray-400">|</span>
        </marquee>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto mt-28 px-4 sm:px-6 md:px-0 text-end">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl tracking-tight heading font-[500] text-gray-900"
        >
          <span className="text-[#a8b630]">Founded in 2022,</span> Growing Strong
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="text-gray-700 mt-6 text-xl sm:text-xl md:text-2xl text-end leading max-w-[600px] ml-auto"
        >
          We’ve helped 30+ D2C brands generate over ₹3.5 Cr+ in revenue through
          high-performance Facebook Ads.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          viewport={{ once: true }}
          className="text-gray-700 mt-6 text-base sm:text-xl md:text-2xl"
        >
          Whether you're at ₹0 or ₹30L/month — <br />
          we scale with strategy, not guesswork.
        </motion.p>
      </div>

      <h3 className="md:mt-44 mt-10 text-3xl sm:text-4xl md:text-5xl text-center font-semibold heading">
        GRAPHIC PORTFOLIO
      </h3>
    </section>
  );
};

export default GrowthSection;
