import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row gap-6 items-center justify-between max-w-6xl w-full mx-auto px-6 md:px-12 py-12">
      {/* LEFT TEXT */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }} // 👈 triggers when 30% in view
        className="md:w-[60%] text-center md:text-left"
      >
        <h1 className="text-4xl md:text-5xl heading font-[500] leading-tighter text-zinc-900">
          We Scale{" "}
          <span className="bg-black text-white px-2">Fashion Brands</span>{" "}
          With Business-Backed
          <span className="underline decoration-red-500 decoration-2 underline-offset-4">
            {" "}
            Meta Ads
          </span>
        </h1>

        <p className="text-zinc-500 text-xl text tracking-tight mt-5 leading-relaxed">
          We’re not just media buyers — we’re growth partners. <br />
          If your D2C fashion brand is stuck at{" "}
          <span className="border border-red-500 px-1 text-black font-medium">
            ₹5L–₹10L/month,
          </span>
          we help you break through with strategy, content, and execution that
          actually moves the needle.
        </p>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="md:w-[40%] mt-8 md:mt-0 flex justify-center"
      >
        <img
          src="/image/about.svg"
          alt="Fashion Growth Illustration"
          className="w-[90%] md:w-[85%] h-auto"
          priority
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
