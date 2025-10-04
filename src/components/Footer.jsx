import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='max-w-5xl mt-10 py-10 mx-auto flex flex-col md:flex-row gap-6 w-full items-start'>
        <div className="text-8xl logo font-bold tracking-wide w-[35%]">
        <span className="text-black">wizon</span>
      </div>
      <div className='w-[22%]'>
        <p className='heading leading-5'><span className='font-bold'>BOOK A STRATEGY CALL</span> <br />Stuck at <span className='font-bold'>₹5-10/month?</span> <br />Let us audio your ads and fix your scale plan.</p>
        <p className='mt-4 px-2 py-1 border-2 inline-block border-green-500 font-bold'>Book Your Free Call</p>
      </div>
      <div className='text w-[22%]'>
        <h2 className='heading font-bold mb-2'>QUICK LINKS</h2>
        <ul>
        <li><a href="#">Service</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div className='heading w-[22%]'>
        <h2 className='font-bold'>Fashion-Focused. <br /> Performance-Obsessed</h2>
        <div className='flex gap-3 mt-4'>
            <FaInstagram className='cursor-pointer' size={25} />
            <FaLinkedin className='cursor-pointer' size={25}/>
        </div>
      </div>
    </div>
  )
}

export default Footer