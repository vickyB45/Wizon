"use client";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AdShowcase = ({ data, onClick }) => {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative w-full max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-3xl mx-auto border-2 bg-white rounded-2xl overflow-hidden shadow-sm cursor-pointer"
      onClick={onClick} // triggers Portfolio's Lightbox
    >
      {/* Image */}
      <div className="relative rounded-xl border-2 w-full h-64 sm:h-72 md:h-82 overflow-hidden">
        <img
          src={data.image}
          alt="Ad Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/15 to-transparent" />
      </div>

      {/* Metrics */}
      <div className="bg-white text-center text-gray-800 leading-5 py-1 px-2">
        <p className="font-bold text-sm sm:text-base md:text-lg">
          {data.heading1 || "CTR: 1% | ROAS: 4.1X"}
        </p>
        <p className="font-bold text-sm sm:text-base md:text-lg">
          {data.heading2 || "Revenue: 7.2L+"}
        </p>
      </div>
    </motion.section>
  );
};

export default AdShowcase;
