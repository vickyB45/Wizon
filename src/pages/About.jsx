import React from 'react'
import HeroSection from '../components/about/HeroSection'
import MissionSection from '../components/about/MissionSection'
import WizonTeamSection from '../components/about/WizonTeamSection'
import { motion } from 'framer-motion'
import WizonStorySection from '../components/about/WizonStorySection'

const About = () => {
  return (
    <div className='max-w-6xl mx-auto'>
      <HeroSection />
      <MissionSection />
      <WizonTeamSection />

      {/* Divider + Heading Section */}
      <div className="w-full flex flex-col md:flex-row justify-center md:justify-start items-center md:items-center gap-3 md:gap-0 mt-12 md:mt-0">
  {/* Divider */}
  <motion.div
    initial={{ width: 0, opacity: 0 }}
    whileInView={{ width: "65%", opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
    className="w-[65%] md:w-[60%] border border-black md:border-2 mb-2 md:mb-0"
  />

  {/* Text */}
  <div className="w-auto md:w-[35%] text-center md:text-left">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-black text text-white px-4 md:px-6 py-1 font-semibold text-3xl heading whitespace-nowrap rounded-md md:rounded-none"
    >
      HOW IT ALL STARTED
    </motion.div>
  </div>

      </div>

      <WizonStorySection />
    </div>
  )
}

export default About
