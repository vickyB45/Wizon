"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react"; // for + and - icons (lucide-react)

const faqs = [
  {
    question: "How long have you been doing this?",
    answer:
      "We’ve been helping D2C fashion brands scale profitably since 2021. Our frameworks are battle–tested, not experimental.",
  },
  {
    question: "How many brands do you work with at a time?",
    answer:
      "We only work with 8–10 brands at a time — to give each one the deep focus and support they deserve.",
  },
  {
    question: "How does communication happen?",
    answer:
      "You’ll be added to a dedicated WhatsApp group with our team. Regular updates happen via voice notes, calls, and quick messages. No long wait times.",
  },
  {
    question: "Do you do weekly reporting?",
    answer:
      "Yes — every week, you’ll get a clear performance report with action points. At the end of each month, we also do a full business-side P&L review to improve strategy.",
  },
  {
    question: "What’s included in the scope of work?",
    answer:
      "We manage everything around Meta Ads — research, creative direction, strategy, setup, optimization, and scaling. We also advise on content, website fixes, product–market fit, and anything that affects results.",
  },
  {
    question: "Do you also manage influencer content or reels?",
    answer:
      "Not in this offer. But we guide you on what content works best and how to create ads that convert. If needed, we have a separate UGC+Content package.",
  },
  {
    question: "How soon can we expect results?",
    answer:
      "Most brands start seeing early improvements in 2–3 weeks. Clear results (30%+ growth or reduced CAC) usually within the first 30 days.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-[1000px] mx-auto py-12 px-4">
      <h2 className="text-3xl md:text-5xl font-bold text text-center mb-12 uppercase tracking-wide">
        <span className="inline-block border-3 border-red-600">Questions</span> In Your Mind
      </h2>

      <div className="space-y-4 ">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className=" pb-3 "
          >
            <div
              className="flex gap-4 items-center"
              onClick={() => toggleFAQ(index)}
            >
                 {openIndex === index ? (
                <Minus className="w-8 h-8 text-sky-600" />
              ) : (
                <Plus className="w-8 h-8 text-sky-600" />
              )}
              <h3 className="text-lg md:text-xl text font-semibold cursor-pointer">{faq.question}</h3>
            </div>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="mt-2 md:text-[20px] text text-gray-600 ml-12">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
            <hr className="mt-10 border-b-2 w-36 border-sky-600"/>
          </div>
        ))}
      </div>
    </div>
  );
}
