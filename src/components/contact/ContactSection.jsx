"use client";
import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ContactSection = () => {
  return (
    <section className="text-center px-1 py-8 md:px-4 overflow-hidden">
      {/* Heading */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="md:text-3xl text-3xl md:text-[45px] font-[500] tracking-tight text-black mb-10"
        style={{
          textShadow: "2px 2px 0 #fffb00", // same as Tailwind's yellow-400
        }}
      >
        DROP US A LINE. LET’S BUILD SOMETHING GREAT.
      </motion.h2>

      {/* Form Box */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto border-3 border-black rounded-xl p-3 text "
      >
        <form className="grid md:grid-cols-2 gap-6 mt-4 text-left">
          {/* First Name */}
          <div>
            <input
              type="text"
              placeholder="First Name"
              className="w-full border-b-[3px] inline-block  focus:outline-none text-gray-800 placeholder-gray-400 md:text-3xl text-2xl "
            />
          </div>

          {/* Last Name */}
          <div>
            <input
              type="text"
              placeholder="Last Name"
              className="w-full border-b-[3px] inline-block  focus:outline-none text-gray-800 placeholder-gray-400 md:text-3xl text-2xl "
            />
          </div>

          {/* Phone Number */}
          <div>
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border-b-[3px] inline-block  focus:outline-none text-gray-800 placeholder-gray-400 md:text-3xl text-2xl "
            />
          </div>

          {/* Email ID */}
          <div>
            <input
              type="email"
              placeholder="Email ID"
              className="w-full border-b-[3px] inline-block  focus:outline-none text-gray-800 placeholder-gray-400 md:text-3xl text-2xl "
            />
          </div>

          {/* Brand Name */}
          <div>
            <input
              type="text"
              placeholder="Brand Name"
              className="w-full border-b-[3px] inline-block  focus:outline-none text-gray-800 placeholder-gray-400 md:text-3xl text-2xl "
            />
          </div>

          {/* Meta Ads Dropdown */}
          <div>
            <select className="w-full border-b-[3px] inline-block  focus:outline-none text-gray-400 md:text-3xl text-2xl   bg-transparent">
              <option value="">Meta Ads</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          {/* Monthly Budget */}
          <div className="md:col-span-2">
            <input
              type="text"
              placeholder="Monthly Budget"
              className="w-full border-b-[3px] inline-block  focus:outline-none text-gray-800 placeholder-gray-400 md:text-3xl text-2xl "
            />
          </div>

          {/* Describe */}
          <div className="md:col-span-2">
            <textarea
              placeholder="Describe your brand and vision"
              className="w-full border-b-[3px] inline-block  focus:outline-none text-gray-800 placeholder-gray-400 md:text-3xl text-2xl "
            ></textarea>
          </div>
        </form>

        {/* Contact Button */}
        <motion.div
          className="text-center my-4 text-xl md:text[16px]  mx-3"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-block"
          >
<button
  className="px-6 md:px-18 py-2 rounded-2xl bg-black text-white shadow-[4px_4px_0_#eddd1d] hover:shadow-[9px_9px_0_#fde047] transition-all duration-200"
>
  Contact Now
</button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Address Section */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex text flex-col md:flex-row justify-between max-w-4xl mx-auto mt-8 text-left"
      >
        {/* Left Box */}
        <div className="  border-black text-center px-3 py-2 md:px-4 md:py-3 text-sm md:text-base">
          <p className=" bg-black text-white inline-block px-2 py-1 text-2xl">Office Address :</p>
          <p className=" mt-1 text-xl  leading-6">
            T–267, G/F, Parampuri <br />
            Uttam Nagar, New Delhi –110059
          </p>
        </div>

        {/* Right Box */}
        <div className="  px-3 py-2 text-center md:px-4 md:py-3 text-sm md:text-base mt-4 md:mt-0">
          <p className="tracking-tight border border-red-500 inline-block text-xl px-1 ">Reach Out At:</p>
          <p className="mt-1 text-xl  leading-6">
            Hello@wizonmedia.com <br />
            +91-9289301459,
            <br /> +91-9643099825
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
