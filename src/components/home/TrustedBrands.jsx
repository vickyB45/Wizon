"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const TrustedBrands = () => {
  const brands = [
    {
      avatar: "https://i.pinimg.com/736x/f7/63/03/f7630358b6c2e058381a34be8d2736d8.jpg",
      companyName: "ARUSH CLOTHING",
      body: "We grew from ₹3.5L to ₹8.2L/month in under 60 days with a stable 2.8X ROAS. Wizon fixed our offer, positioning, and scaling strategy — not just ads. Now we’re growing profitably, month after month.",
      founderName: "Roshani Saini, Founder",
      websiteUrl: "https://arush.co.in",
    },
    {
      avatar: "https://i.pinimg.com/736x/a3/10/7c/a3107cc866182b13ef2777bbfae80f64.jpg",
      companyName: "CROOK STORE",
      body: "As a Gen Z accessories brand, no one truly got our vibe — until Wizon. In just 45 days, we scaled from ₹1.2L to ₹6.5L/month, cut CAC by 40%, and crossed ₹27L+ in total revenue. The ads finally felt like us.",
      founderName: "Yatin Batra, Founder",
      websiteUrl: "https://crookstore.in",
    },
    {
      avatar: "https://i.pinimg.com/1200x/5d/2f/f9/5d2ff9856572329454664ab469c020c0.jpg",
      companyName: "FLEXWEAR",
      body: "Before Wizon, we were stuck at ₹4L/month. After refining our funnel and creative direction, we hit ₹10L+ within 70 days with consistent ROAS and organic traction.",
      founderName: "Nikhil Sharma, Founder",
      websiteUrl: "https://flexwear.in",
    },
    {
      avatar: "https://i.pinimg.com/736x/fa/01/8a/fa018ad9db226544b0bdaf9a74507da9.jpg",
      companyName: "GLAMNEST BEAUTY",
      body: "Our skincare campaigns were losing steam. Wizon restructured our offer and visuals — within 30 days, we achieved a 3.2X ROAS and doubled repeat customers.",
      founderName: "Ayesha Khan, Founder",
      websiteUrl: "https://glamnest.in",
    },
    {
      avatar: "https://i.pinimg.com/736x/d3/9f/39/d39f399aa70967afb7f48ab29fcfd515.jpg",
      companyName: "URBANFIT",
      body: "From ₹6L to ₹11L/month — Wizon helped us find clarity in our brand message and optimize our ad funnel. We now scale predictably every month.",
      founderName: "Ravi Mehta, Founder",
      websiteUrl: "https://urbanfit.in",
    },
    {
      avatar: "https://i.pinimg.com/1200x/01/bc/28/01bc28dec7e8e02548fd54514ceda195.jpg",
      companyName: "LUXORA JEWELS",
      body: "Our high-ticket jewellery brand struggled online. After working with Wizon, we went from ₹2L to ₹7.8L/month in just 50 days, while maintaining premium positioning.",
      founderName: "Neha Kapoor, Founder",
      websiteUrl: "https://luxorajewels.in",
    },
  ];

  return (
    <div className="">
      {/* Heading */}
      <motion.h2
        className="text-4xl max-w-[1000px] mx-auto md:text-[50px] text text-center font-[700] py-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Brands That{" "}
        <span className="inline-block px-2 border-2 border-green-500">
          Trusted
        </span>{" "}
        Us Still Do.
      </motion.h2>

      {/* Swiper Section */}
      <div className="max-w-[1100px] mx-auto px-4 pb-10">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 16 },
            640: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 32 },
          }}
          loop={true}
        >
          {brands.map((brand, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-black text text-white rounded p-6 cursor-grab active:cursor-grabbing min-h-[230px] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={brand.avatar}
                      alt={brand.companyName}
                      className="w-10 h-10 object-contain rounded-full"
                    />
                    <h3 className=" font-[600]">{brand.companyName}</h3>
                  </div>
                  <p className="text-white text-sm leading-4">
                    {brand.body}
                  </p>
                </div>
                <div className=" text-sm  ">
                 <div style={{ boxShadow: "4px 4px 0 #fff207" }} className="bg-white text-black inline-block mt-4 leading-4 py-1 px-4"> 
                  <p className="font-semibold">-{brand.founderName}</p>
                  <a
                    href={brand.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                  >
                    website: {brand.websiteUrl.replace("https://", "")}
                  </a>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TrustedBrands;
