import React from 'react'
import PerformanceMarketing from '../components/service/PerformanceMarketing'
import BlueBoxSlider from '../components/service/BlueBoxSlider'
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import HowWeScale from '../components/service/HowWeScale';
import MetaAdsSection from '../components/service/MetaAdsSection';
import ServiceFAQ from '../components/service/ServiceFAQ';
import AboutUsClientSay from '../components/service/AboutUsClientSay';


const Service = () => {
  return (
    <div className='w-full overflow-hidden'>
      <PerformanceMarketing />
      <BlueBoxSlider />
      <div>
              <motion.div
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-[101vw] py-3 mt-8 relative -left-1 -md:rotate-2 -rotate-4 origin-top-left bg-black text-white md:py-2 text-[17px] md:text-[25px] tracking-wide outline-dashed outline-4 outline-red-700"
    >
      <Marquee
        speed={60}
        gradient={false}
        pauseOnHover={false}
        loop={0} // infinite loop
        className="flex items-center whitespace-nowrap"
      >
        {/* Content for marquee */}
        <span className="px-8">BUILD FOR FASHION D2C BRAND</span>
        <span className="text-gray-400">|</span>
        <span className="px-8">FULL STRATEGY, NO FLUFF</span>
        <span className="text-gray-400">|</span>
        <span className="px-8">WE ONLY TAKE BRANDS WE BELIVE IN</span>
        <span className="text-gray-400">|</span>

        <span className="px-8">BUILD FOR FASHION D2C BRAND</span>
        <span className="text-gray-400">|</span>
        <span className="px-8">FULL STRATEGY, NO FLUFF</span>
        <span className="text-gray-400">|</span>
        <span className="px-8">WE ONLY TAKE BRANDS WE BELIVE IN</span>
        <span className="text-gray-400">|</span>

        <span className="px-8">BUILD FOR FASHION D2C BRAND</span>
        <span className="text-gray-400">|</span>
        <span className="px-8">FULL STRATEGY, NO FLUFF</span>
        <span className="text-gray-400">|</span>
        <span className="px-8">WE ONLY TAKE BRANDS WE BELIVE IN</span>
        <span className="text-gray-400">|</span>
      </Marquee>
    </motion.div>

    
<HowWeScale />
<MetaAdsSection/>
<ServiceFAQ />
<AboutUsClientSay/>

      </div>
    </div>
  )
}

export default Service