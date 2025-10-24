"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react"; // for + and - icons (lucide-react)

const faqs = [
  {
    question: "Do you really handle everything in-house?",
    answer:
      "Yes — every part of our Meta Ads execution is handled 100% in-house, from strategy to creatives to optimization. No outsourcing, no freelancers — just tight control, faster results, and full accountability.",
  },
  {
    question: "How do you start working on Meta Ads?",
    answer:
      "We begin by deep-diving into your business — analyzing margins, audiences, past ad data, and competitors to craft a data-backed strategy instead of random testing.",
  },
  {
    question: "Who creates the ad creatives?",
    answer:
      "Our in-house creative team produces all visuals and copies. From UGCs to reels to static ads, everything is designed around proven conversion principles and your brand’s tone.",
  },
  {
    question: "Do you optimize and manage ads daily?",
    answer:
      "Absolutely. Our internal team monitors, tests, and scales campaigns daily. No delays, no autopilot — every move is data-led for better ROAS and long-term profitability.",
  },
];


export default function ServiceFAQ() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleFAQ = (index) => {
    if (openIndexes.includes(index)) {
      // close it
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      // open it
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className="max-w-[1000px] mx-auto py-12 px-4">

      <div className="space-y-4 text">
        {faqs.map((faq, index) => (
          <div key={index} className="pb-3">
            <div
              className="flex gap-4 items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              {openIndexes.includes(index) ? (
                <Minus className="w-8 h-8 text-sky-600" />
              ) : (
                <Plus className="w-8 h-8 text-sky-600" />
              )}
              <h3 className="text-lg md:text-xl font-semibold">
                {faq.question}
              </h3>
            </div>

            <AnimatePresence>
              {openIndexes.includes(index) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="mt-2 md:text-[20px] text-gray-600 ml-12">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
            <hr className="mt-10 border-b-2 w-36 border-sky-600" />
          </div>
        ))}
      </div>
    </div>
  );
}
