"use client"; // for Next.js if using app directory
import React from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const fields = [
    { label: "1. What's your brand name and website?" },
    { label: "2. What category do you sell in?" },
    { label: "3. What's your current monthly revenue?" },
    { label: "4. What's your monthly Meta Ads budget?" },
    { label: "5. Is your current ROAS profitable?" },
    { label: "6. Who currently runs your Meta Ads?" },
    { label: "7. How would you describe your current ad strategy?" },
    { label: "8. What are your 1–3 biggest challenges right now?" },
    { label: "9. What's your goal right now?" },
    { label: "10. What's your mindset right now?" },
    { label: "11. Your Name, Email & Phone Number" },
  ];

  return (
    <div className="max-w-4xl mx-1 p-4 sm:p-6 md:px-12 border-4 rounded-lg shadow-lg">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl heading sm:text-4xl md:text-5xl mb-3 sm:mb-4 text-center font-[600] leading-tight"
      >
        HELP US UNDERSTAND YOUR{" "}
        <span className="heading inline-block px-2 sm:px-3 border-2 border-red-500 font-[700] tracking-tight">
          BRAND
        </span>{" "}
        BEFORE THE CALL
      </motion.h2>

      {/* Subtext */}
      <p className="text-sm sm:text-lg md:text-xl text mb-6 text-center text-zinc-500 tracking-tight">
        We only work with brands that are ready to scale profitably — and this quick form
        helps us understand if we're the right fit for each other.
      </p>

      {/* Form */}
      <form className="flex flex-col gap-4">
        {fields.map((field, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex flex-col"
          >
            <label className="text-base sm:text-lg md:text-xl heading mt-4 text-zinc-700 font-medium mb-1">
              {field.label}
            </label>
            <input
              type="text"
              className="border-b-2 text-base sm:text-lg md:text-xl heading text-zinc-700 border-red-500 focus:outline-none focus:border-red-700 py-1"
            />
          </motion.div>
        ))}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 bg-black w-full sm:w-[70%] md:w-[50%] mx-auto cursor-pointer text-white py-3 md:px-4 rounded-lg heading hover:bg-gray-900 transition-all text-base sm:text-lg"
        >
          BOOK YOUR FREE STRATEGY CALL
        </motion.button>
      </form>
    </div>
  );
};

export default ContactForm;
