"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const TrustedBrands = () => {
  const baseBrands = [
    // --- your existing 6 brands here unchanged ---
  ];

  const moreReviews = [
    {
      avatar: "https://i.pinimg.com/736x/a3/10/7c/a3107cc866182b13ef2777bbfae80f64.jpg",
      companyName: "CROOK STORE",
      body: `⭐⭐⭐⭐⭐ 
“Wizon took us from scratch to consistent 5–6 lakhs/month in sales.”
“We started with absolutely no structure — no funnels, nothing. Wizon built everything from 0: Meta Ads, funnels, creatives, landing pages. Within months, we hit steady ₹5–6L/month sales.”`,
      founderName: "Crook Store (Streetwear & Accessories)",
      websiteUrl: "https://crookstore.in",
    },
    {
      avatar: "https://i.pinimg.com/736x/f7/63/03/f7630358b6c2e058381a34be8d2736d8.jpg",
      companyName: "ARUSH CLOTHING",
      body: `⭐⭐⭐⭐⭐
“We found our PMF and scaled beyond lakhs within weeks.”
Wizon rebuilt our ads, creatives & testing system → PMF achieved → multi-lakh months unlocked.”`,
      founderName: "Arush Clothing (Founder)",
      websiteUrl: "https://arush.co.in",
    },
    {
      avatar: "https://i.pinimg.com/1200x/01/bc/28/01bc28dec7e8e02548fd54514ceda195.jpg",
      companyName: "JAIPUR CLOTHING",
      body: `⭐⭐⭐⭐⭐
“From brand name → website → Meta Ads — Wizon built Jaipur Clothing from the ground up.”
“Premium creatives helped us attract 25–55 working women exactly as planned.”`,
      founderName: "Jaipur Clothing (Founder)",
      websiteUrl: "#",
    },
    {
      avatar: "https://i.pinimg.com/736x/fa/01/8a/fa018ad9db226544b0bdaf9a74507da9.jpg",
      companyName: "LIVEOLOGY",
      body: `⭐⭐⭐⭐⭐
“Liveology finally became profitable after months of loss.”
“Wizon rebuilt our funnel, redesigned creatives & fixed audience strategy — stable ROAS achieved.”`,
      founderName: "Liveology",
      websiteUrl: "#",
    },
    {
      avatar: "https://i.pinimg.com/736x/d3/9f/39/d39f399aa70967afb7f48ab29fcfd515.jpg",
      companyName: "CHIRAN TEA",
      body: `⭐⭐⭐⭐⭐
“We were searching for the right agency — Wizon finally gave us real online growth.”`,
      founderName: "Chiran Tea",
      websiteUrl: "#",
    },
    {
      avatar: "https://i.pinimg.com/736x/5d/2f/f9/5d2ff9856572329454664ab469c020c0.jpg",
      companyName: "CHICLO",
      body: `⭐⭐⭐⭐⭐
“The best Meta Ads team if you’re starting from scratch.”
“Premium audience understanding = stable sales & profitable growth.”`,
      founderName: "Chiclo",
      websiteUrl: "#",
    },
  ];

  const brands = [...baseBrands, ...moreReviews];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (i) => {
    setExpandedIndex(expandedIndex === i ? null : i);
  };

  return (
    <div>
      <motion.h2
        className="text-4xl max-w-[1000px] mx-auto md:text-[50px] text-center font-[700] py-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Brands That <span className="px-2 border-2 border-green-500">Trusted</span> Us Still Do.
      </motion.h2>

      <div className="max-w-[1100px] mx-auto px-4 pb-10">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000 }}
          loop
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 16 },
            640: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 32 },
          }}
        >
          {brands.map((brand, i) => {
            const isExpanded = expandedIndex === i;
            const shortText =
              brand.body.length > 100
                ? brand.body.slice(0, 100) + "..."
                : brand.body;

            return (
              <SwiperSlide key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-black text text-white rounded p-6 cursor-grab active:cursor-grabbing min-h-[250px] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                    
                      <h3 className="font-[600]">{brand.companyName}</h3>
                    </div>

                    <p className="text-sm leading-4 whitespace-pre-line">
                      {isExpanded ? brand.body : shortText}
                    </p>

                    {brand.body.length > 100 && (
                      <button
                        onClick={() => toggleExpand(i)}
                        className="text-yellow-300 mt-2 underline"
                      >
                        {isExpanded ? "Show less" : "Show more"}
                      </button>
                    )}
                  </div>

                  <div className="text-sm">
                    <div
                      style={{ boxShadow: "4px 4px 0 #fff207" }}
                      className="bg-white text-black inline-block mt-4 py-1 px-4"
                    >
                      <p className="font-semibold">-{brand.founderName}</p>
                      <a
                        href={brand.websiteUrl}
                        target="_blank"
                        className="text-blue-400 underline"
                      >
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
  );
};

export default TrustedBrands;
