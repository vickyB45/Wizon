import React from "react";
import { motion } from "framer-motion";

const WizonSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-white pb-8  text-center"
    >
      {/* Headline */}
      <div className="  px-2 md:px-24">
        <h1 className="text-5xl  heading text-gray-800 md:leading-14">
        <span className="text-black underline decoration-dotted">Wizon Media</span>{" "}
       <span className="text-zinc-500"> isn’t just an agency.</span>
        <br />
        <span className="text-gray-600">
            <span className="text-zinc-500"> We become part of your{" "}</span>
         
          <span className="bg-black text-white  px-2 rounded font-semibold">
            Business.
          </span>
        </span>
      </h1>

      {/* Subheadline */}
      <p className="mt-6 text-gray-700 max-w-5xl mx-auto text-base md:text-xl text tracking-tight">
        If you're building a fashion brand for the long run, we’re here to grow it with you —
        not just run ads. No fluff. No shortcuts. Just business-led scale.
      </p>

      </div>
      {/* Logos */}
      <div className=" overflow-hidden h-20 mt-10 w-screen flex items-center">
  <img className="h-full object-contain" src="/image/homeBanner.png" alt="" />
  <img className="h-full object-contain" src="/image/homeBanner.png" alt="" />
  <img className="h-full object-contain" src="/image/homeBanner.png" alt="" />
  <img className="h-full object-contain" src="/image/homeBanner.png" alt="" />
  <img className="h-full object-contain" src="/image/homeBanner.png" alt="" />
  <img className="h-full object-contain" src="/image/homeBanner.png" alt="" />
  <img className="h-full object-contain" src="/image/homeBanner.png" alt="" />
  <img className="h-full object-contain" src="/image/homeBanner.png" alt="" />
</div>

    </motion.section>
  );
};

export default WizonSection;
