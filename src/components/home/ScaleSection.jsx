"use client"
import React from "react"
import { motion } from "framer-motion"

const ScaleSection = () => {
  const points = [
    "Your brand makes ₹5L–₹10L/month and is ready to scale.",
    "You spend ₹1L+/month on Meta Ads or are ready to.",
    "You’re done with hacks — want real, sustainable growth.",
    "You want consistent, profitable scale — not just spikes.",
    "You’re open to strategic advice across ads, content & product.",
    "You want a growth partner, not just a media buyer.",
    "You’re ready to execute — not just brainstorm.",
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <div className=" py-10 max-w-4xl px-2 mx-auto text-center">
      {/* Header */}
      <motion.h2
        style={{ boxShadow: "7px 7px 0 #fff207" }}
        className="text-[28px] md:text-5xl font-[500]  hover:[box-shadow:7px 7px 0 #facc15] text inline-block bg-black text-white px-4 py-2 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        This Is for You If :
      </motion.h2>

      {/* Bullet Points */}
      <motion.div
        className="mt-7 flex flex-row gap-6 items-center sm:items-start justify-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left Number Column */}
        <motion.div
          style={{ boxShadow: "-2px 2px 0 #fff207" }}
          className=" flex flex-col gap-9 md:gap-2 bg-black text-white md:py-3 py-2 md:px-5 px-2 text text-[20px] sm:text-[23px] justify-center rounded md:rounded-2xl"
          variants={item}
        >
          {[1, 2, 3, 4, 5, 6, 7].map((num) => (
            <span key={num}>{num}</span>
          ))}
        </motion.div>

        {/* Right Text List */}
        <motion.ul className="space-y-3 sm:space-y-2" variants={container}>
          {points.map((point, index) => (
            <motion.li key={index} className="flex items-start" variants={item}>
              <p className="text-lg md:leading-9 text sm:text-xl md:text-3xl text-start tracking-tight">
                {point}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Footer Quote */}
      <motion.p
        className="mt-10 text-center text-[20px] sm:text-[26px] md:text-[33px] xl:whitespace-nowrap italic font-bold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        "If We Can’t See a Clear Path to Scale, We Don’t Take the Brand."
      </motion.p>
    </div>
  )
}

export default ScaleSection
