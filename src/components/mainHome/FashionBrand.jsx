"use client";

const FashionBrand = () => {
  return (
    <section className="relative mt-12  mr-3  py-10 h-[60px] md:h-[100px]">
      {/* Slanted Black Bar with Marquee */}
      <div className="absolute top-0 -left-1 w-[101vw] bg-black -md:rotate-2 -rotate-4  text-white py-3">
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="10" // speed
          className="flex items-center text-sm md:text-[30px] tracking-wide"
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
          <span className="px-8">Build For D2C Growth</span>
          <span className="text-gray-400">|</span>
          <span className="px-8">Build For D2C Growth</span>
        </marquee>
      </div>
    </section>
  );
};

export default FashionBrand;
