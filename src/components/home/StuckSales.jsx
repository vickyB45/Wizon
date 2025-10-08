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
    <div className="py-8 max-w-6xl mx-auto relative md:mt-10 px-4 sm:px-0">

        <div className="absolute inset-0 flex justify-center items-center -z-10">
    <div className="w-[500px] h-[500px] bg-red-500/10 blur-[150px] rounded-full"></div>
  </div>
      {/* Animated text */}
      <motion.h2
        className="text text-center mt-6 text-4xl sm:text-[53px] tracking-tight  font-bold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        WHY YOU'RE STUCK AT <span className="inline-block border-3 border-red-600 px-2">₹5-10L</span> IN SALES?
      </motion.h2>

      {/* Animated Lines */}
      <motion.div
        className="mt-10 flex flex-col text space-y-4 sm:pl-12 text-zinc-800"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {[
          <>- YOUR CPA <span className="text-red-600">increases</span> the moment you try scaling ad budgets</>,
          <>- <span className="inline-block border-t-3 border-red-600">You</span> 've worked with multiple freelancers, agencies, UGC creators but results don't sustain</>,
          <>- Sales are <span className="text-red-600">inconsistent and unpredictable</span> week over week</>,
          <>- You're fixing ads when the <span className="text-red-600">real problem is in your offer, funnel, or PMF</span></>,
          <>- <span className="text-red-600">Content isn't built to scale</span> — it's random, reactive, and unstructured</>,
        ].map((line, i) => (
          <motion.p
            key={i}
            className="text-xl sm:text-4xl tracking-tight leading-8 sm:leading-10"
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
