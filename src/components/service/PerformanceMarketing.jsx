"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

const PerformanceMarketing = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      ref={ref}
      className="relative bg-[url(/image/table.png)] bg-center bg-cover w-full flex flex-col items-center justify-center py-16 px-2 md:px-6 overflow-hidden"
    >
      {/* 3D grid background */}
      <div className="absolute inset-0 bg-[url('/grid-bg.png')] bg-cover bg-center opacity-20 pointer-events-none"></div>

      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-5xl font-bold text text-center mb-10"
      >
        <span className="md:bg-black md:text-white px-3 py-1">PERFORMANCE MARKETING</span>{" "}
        <span className="text-blue-600">(META ADS)</span>
      </motion.h1>

      <div className="grid md:grid-cols-2 text gap-5 max-w-5xl w-full z-10">
        {[
          "🤖 AI-BASED TARGETING",
          "📊 DATA-LED STRATEGY",
          "🧠 BUSINESS-BACKED FUNNEL",
          "🎯 RETARGETING & REMARKETING",
          "📈 SCALABILITY & PROFITABILITY",
          "🗓️ WEEKLY + MONTHLY REPORTING",
          "⚙️ DAILY OPTIMIZATIONS",
          "🧩 WEBSITE CRO SUPPORT",
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: i * 0.1 }}
            className="bg-white border-2  border-gray-700 rounded-xl py-3 px-5 flex items-center justify-center text-xl md:text-2xl font-medium"
          >
            {item}
          </motion.div>
        ))}
      </div>

      <motion.a
  href="#"
  variants={fadeUp}
  initial="hidden"
  animate={inView ? "visible" : "hidden"}
  transition={{ delay: 0.8 }}
  className="mt-10 inline-flex items-center justify-center bg-sky-600 font-semibold text-lg px-6 py-3 rounded-lg shadow-md hover:bg-sky-700 transition-all duration-300 hover:scale-105"
>
  <span className="text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]">
    BOOK YOUR STRATEGY CALL →
  </span>
</motion.a>

    </section>
  );
};

export default PerformanceMarketing;
