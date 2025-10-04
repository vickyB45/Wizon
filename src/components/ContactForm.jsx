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
    <div className="max-w-4xl mx-auto p-6 border-4 px-12 rounded-lg shadow-lg">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl mb-4 text-center font-[500] leading-14"
      >
        HELP US UNDERSTAND YOUR <span className=" heading px-3 border-2 border-red-500 font-[700] tracking-tighter">BRAND</span> BEFORE THE CALL
      </motion.h2>
      <p className="text-xl mb-6 text-center text tracking-tighter text-zinc-500">
        We only work with brands that are ready to scale profitably — and this quick form
        helps us understand if we're the right fit for each other.
      </p>

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
            <label className="text-xl heading mt-5 text-zinc-700 font-medium mb-1">{field.label}</label>
            <input
              type="text"
              className="border-b-3 text-xl heading text-zinc-700 border-red-500 focus:outline-none focus:border-red-700 py-1"
            />
          </motion.div>
        ))}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 bg-black w-[50%] mx-auto cursor-pointer text-white py-3 px-4 rounded-lg heading hover:bg-gray-900 transition-all"
        >
          BOOK YOUR FREE STRATEGY CALL
        </motion.button>
      </form>
    </div>
  );
};

export default ContactForm;
