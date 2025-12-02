"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const brands = [
  {
   
    companyName: "— Crook Store (Streetwear & Accessories)",
    body: `⭐⭐⭐⭐⭐ 
“Wizon took us from scratch to consistent 5–6 lakhs/month in sales.”  
“We started with absolutely no structure — no proper website, no funnels, nothing.  
Wizon built everything from 0: Meta Ads, funnels, creatives, landing pages.  
Within months, we hit a steady ₹5–6L/month in sales.  
Their Gen-Z creative direction and Meta testing process is unmatched.”`,
    founderName: "Crook Store",
    websiteUrl: "#",
  },

  {
  
    companyName: "— Arush Clothing",
    body: `⭐⭐⭐⭐⭐
“We found our PMF and scaled beyond lakhs within weeks.”  
“We were struggling to find product–market fit.  
Wizon completely rebuilt our ads, creatives and testing system.  
That single change helped us find our PMF and unlock real scale.  
We grew from inconsistent revenue to solid multi-lakh months quickly.  
They genuinely understand fashion buying behaviour.”`,
    founderName: "Founder, Arush Clothing",
    websiteUrl: "#",
  },

  {

    companyName: "— Jaipur Clothing",
    body: `⭐⭐⭐⭐⭐ 
“From brand name → website → Meta Ads — Wizon built Jaipur Clothing from the ground up.”  
“This brand literally started on a blank page.  
Wizon built our brand name, website, funnels and full Meta Ads setup.  
Even with extremely thin stock, they pushed the brand to profitability.  
Their premium creative approach helped attract 25–55 working women.”`,
    founderName: "Founder, Jaipur Clothing",
    websiteUrl: "#",
  },

  {
  
    companyName: "— Liveology (Premium Towels)",
    body: `⭐⭐⭐⭐⭐
“Liveology finally became profitable after months of loss.”  
“We were running ads but ROAS was always unprofitable.  
Wizon rebuilt our entire funnel, redesigned creatives, and fixed audience strategy.  
Within a few weeks, we finally saw stable, profitable ROAS for the first time in months.  
Their UGC direction was the best we've seen.”`,
    founderName: "Liveology",
    websiteUrl: "#",
  },

  {
  
    companyName: "— Chiran Tea (Matcha Supplier)",
    body: `⭐⭐⭐⭐⭐
“We were searching for the right agency — Wizon finally gave us real online growth.”  
“For years, we tried scaling our online channel but nothing worked.  
Wizon took over Meta Ads + SEO, built high-ranking blogs, fixed funnels,  
and scaled our bestseller Matcha packs.  
We finally have a long-term growth partner.”`,
    founderName: "Chiran Tea",
    websiteUrl: "#",
  },

  {
  
    companyName: "— Chiclo (Women’s Co-ords)",
    body: `⭐⭐⭐⭐⭐
“The best Meta Ads team if you're starting from scratch.”  
“Our brand had no structure.  
Wizon built our foundation — TOFU angles, refined creatives,  
and consistent Meta Ads revenue.  
Today we have stable, profitable growth because they understood  
our premium audience deeply.”`,
    founderName: "Chiclo",
    websiteUrl: "#",
  },
];

export default function AboutUsClientSay() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (i) => {
    setExpandedIndex(expandedIndex === i ? null : i);
  };

  return (
    <section>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl heading font-bold text-center mb-12 tracking-wide">
          What Our Client Say{" "}
          <span className="inline-block border-3 border-red-600">About Us</span>
        </h2>

        <div className="max-w-[1100px] mx-auto px-4 pb-10">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 16 },
              640: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 32 },
            }}
            loop={true}
          >
            {brands.map((brand, i) => {
              const isExpanded = expandedIndex === i;
              const text = brand.body;

              const shortText =
                text.length > 60 ? text.slice(0, 60) + "..." : text;

              return (
                <SwiperSlide key={i}>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="bg-black text-white rounded p-6 cursor-grab active:cursor-grabbing min-h-[200px] flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                       
                        <h3 className="font-[600]">{brand.companyName}</h3>
                      </div>

                      {/* TEXT WITH SLICE + SHOW MORE */}
                      <p className="text-sm leading-4 whitespace-pre-line">
                        {isExpanded ? text : shortText}

                        {text.length > 60 && (
                          <button
                            className="ml-2 underline text-yellow-300 text-xs"
                            onClick={() => toggleExpand(i)}
                          >
                            {isExpanded ? "Show less" : "Show more"}
                          </button>
                        )}
                      </p>
                    </div>

                    <div className="text-sm">
                      <div
                        style={{ boxShadow: "4px 4px 0 #fff207" }}
                        className="bg-white text-black inline-block mt-4 leading-4 py-1 px-4"
                      >
                        <p className="font-semibold">-{brand.founderName}</p>
                        <a
                          href={brand.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 underline"
                        >
                          website:
                          {brand.websiteUrl.replace("https://", "")}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
