"use client";

import React from "react";
import Marquee from "react-fast-marquee";

const FashionBrand = () => {
  return (
    <section className="relative mt-12 mr-3 py-10 h-[60px] md:h-[100px]">
      {/* Slanted Black Bar with Marquee */}
      <div className="absolute top-0 -left-1 w-[101vw] bg-black -md:rotate-2 -rotate-4 text-white py-3">
        <Marquee
          speed={80} // same as scrollamount=10
          gradient={false}
          pauseOnHover={false}
          loop={0} // infinite loop
          className="flex items-center font-[500] text md:text-[30px] "
        >
          <span className="px-8">Build For D2C Growth</span>
          <span className="text-gray-400">|</span>
          <span className="px-8">Build For D2C Growth</span>
          <span className="text-gray-400">|</span>
          <span className="px-8">Build For D2C Growth</span>
          <span className="text-gray-400">|</span>
          <span className="px-8">Build For D2C Growth</span>
          <span className="text-gray-400">|</span>
          <span className="px-8">Build For D2C Growth</span>
          <span className="text-gray-400">|</span>
          <span className="px-8">Build For D2C Growth</span>
          <span className="text-gray-400">|</span>
          <span className="px-8">Build For D2C Growth</span>
          <span className="text-gray-400">|</span>
          <span className="px-8">Build For D2C Growth</span>
          <span className="text-gray-400">|</span>
          <span className="px-8">Build For D2C Growth</span>
          <span className="text-gray-400">|</span>
        </Marquee>
      </div>
    </section>
  );
};

export default FashionBrand;
