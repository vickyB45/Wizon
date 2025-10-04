"use client"
import React from "react"
import { motion } from "framer-motion"

const StuckSales = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <div className="py-12 mt-10">
      {/* Animated Heading */}
      <motion.h2
        className="heading text-center mt-6 text-[55px] tracking-wide font-[600]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        WHY YOU'RE STUCK AT ₹5-10 IN SALES?
      </motion.h2>

      {/* Animated Lines */}
      <motion.div
        className="mt-10 flex flex-col space-y-4 pl-12 text-zinc-800"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {[
          <>- YOUR CPA <span className="text-red-600">increases</span> the moment you try scaling ad budgets</>,
          <>- You've worked with multiple freelancers, agencies, UGC creators but results don't sustain</>,
          <>- Sales are <span className="text-red-600">inconsistent and unpredictable</span> week over week</>,
          <>- You're fixing ads when the <span className="text-red-600">real problem is in your offer, funnel, or PMF</span></>,
          <>- <span className="text-red-600">Content isn't built to scale</span> — it's random, reactive, and unstructured</>,
        ].map((line, i) => (
          <motion.p
            key={i}
            className="text-4xl tracking-tight leading-10"
            variants={itemVariants}
          >
            {line}
          </motion.p>
        ))}
      </motion.div>
    </div>
  )
}

export default StuckSales
