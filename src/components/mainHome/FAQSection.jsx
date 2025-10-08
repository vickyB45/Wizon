"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "1. How are you different from other agencies or freelancers we’ve worked with?",
    a: "Most agencies think ads — no strategy, no direction, just random hooks and ROAS screenshots. We don’t work like that. We follow a structured data-led growth framework that includes meta ads fundamentals, customer avatars, and audience — and use that to craft a business-scaled strategy that scales your brand profitably. We don’t just run ads — we build businesses.",
  },
  {
    q: "2. How long does it usually take to see results?",
    a: "Most brands start seeing early improvements within 2–3 weeks. We aim for 30–40% growth or drop in CAC by the end of the first month — depending on your ad spend, past performances, and how fast we move.",
  },
  {
    q: "3. What’s included in your Meta Ads service?",
    a: `Everything needed to scale:
- Competitor & position research
- Buyer persona setup
- Marketing strategy
- Ad copywriting
- Creative strategy & graphic design
- Campaign setup (structure, testing)
- Weekly optimizations
- Landing page (Conversion Rate Optimization)
We Don’t Leave Chance Of Error™`,
  },
  {
    q: "4. Do you also create the Ad creatives?",
    a: "Yes — we handle everything from static graphics to UGC and influencer-led reels. You’ll never be stuck waiting on content again.",
  },
  {
    q: "5. Do I need to create content or do you manage that too?",
    a: "We manage content end-to-end. From planning and scripting to sourcing and editing — we deliver what actually converts. It’s what helps us post winning ads consistently.",
  },
  {
    q: "6. How does communication and reporting work?",
    a: "You’ll get a dedicated WhatsApp group with our team. Weekly reports for tracking performance. Monthly P&L reviews to refine strategy. Fast updates, zero confusion, big clarity.",
  },
  {
    q: "7. Do you work with any fashion brand or do you qualify them first?",
    a: "Yes we only work with fashion eComs — ₹10L/month and serious about scaling. If your ad spend & sample is scale profitability, we’ll take the project — plain and simple.",
  },
  {
    q: "8. What kind of ad budget do I need to start?",
    a: "You should be spending at least ₹1L/month on Meta Ads — or be ready to scale there. If that’s the budget for now, we may not be the right fit.",
  },
  {
    q: "9. What if my Meta Ads account has performed well before?",
    a: "That’s exactly why brands come to us. We audit your past data, uncover what’s worked, build a fresh strategy — no guesswork, no recycled results.",
  },
  {
    q: "10. Can you help with website or product strategy too?",
    a: "Yes! Every Meta Ads brand needs strong landing page fixes, pricing strategy, product focus, social proof, anything that improves conversion and ROAS.",
  },
  {
    q: "11. Do you offer any guarantees?",
    a: "We don’t promise vanity ROAS. We guarantee strategic clarity. If we can’t find a way to scale your brand profitably, we won’t waste time — we’ll tell you before the project. No false hope. Only honest, business-first strategy.",
  },
  {
    q: "12. What’s the next step if I want to get started?",
    a: "Book your free strategy call — we’ll audit your setup, find where you’re stuck, and show how we’d fix it. If we don’t end up working together, you’ll still walk away with clarity.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-20 font-sans text-[#1a1a1a]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl font-semibold mb-5 uppercase tracking-wide">
          Frequently Asked <span className="border-2 heading border-[#d32f2f]">Question?</span>
        </h2>
        <div className="space-y-2">
          {faqs.map((item, i) => (
            <div key={i} className=" rounded-md   ">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full cursor-pointer flex justify-between items-center text-left px-5 py-5 text-[20px] font-medium text "
              >
                <span>{item.q}</span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-600 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-[600px] px-5 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-gray-700 text text-[18.5px] leading-relaxed whitespace-pre-line">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
