import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const WizonSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-white pb-8 text-center"
    >
      {/* Headline */}
      <div className="px-2 md:px-24">
        <h1 className="md:text-5xl text-[40px] heading text-gray-800 font-[600] leading-11 md:leading-14">
          <span className="text-black underline decoration-dotted">Wizon Media</span>{" "}
          <span className="text-zinc-500">isn’t just an agency.</span>
          <br />
          <span className="text-gray-600">
            <span className="text-zinc-500">We become part of your </span>
            <span className="bg-black border-1 border-green-500 text-white px-2 font-semibold">
              Business.
            </span>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-gray-700 text max-w-5xl mx-auto text-base md:text-xl tracking-tight">
          If you're building a fashion brand for the long run, we’re here to grow it with you —
          not just run ads. No fluff. No shortcuts. Just business-led scale.
        </p>
      </div>

      {/* Logos Section */}
      <div className="overflow-hidden h-20 mt-10 w-screen">
        <Marquee
          speed={80}
          gradient={false}
          pauseOnHover={false}
          loop={0}
          className="flex items-center"
        >
          {Array.from({ length: 30 }).map((_, i) => (
            <img
              key={i}
              className="h-20 object-contain"
              src="/image/homeBanner.png"
              alt=""
            />
          ))}
        </Marquee>
      </div>
    </motion.section>
  );
};

export default WizonSection;
