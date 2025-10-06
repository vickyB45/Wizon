import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
        <div className="max-w-6xl mt-10  mx-auto flex flex-col md:flex-row gap-8 md:gap-6 w-full items-start px-4 sm:px-6">
      {/* Logo */}
      <div className="text-6xl flex justify-center items-center sm:text-7xl md:text-8xl logo font-bold tracking-wide md:w-[35%] w-full text-center md:text-left">
        <img className="w-58" src="/logo.png" alt="logo" />
      </div>

      {/* Strategy Call */}
      <div className="md:w-[22%] w-full text-center md:text-left">
        <p className="heading text-base sm:text-lg leading-6">
          <span className="font-bold">BOOK A STRATEGY CALL</span> <br />
          Stuck at <span className="font-bold">₹5-10/month?</span> <br />
          Let us audit your ads and fix your scale plan.
        </p>
        <p className="mt-4 px-3 py-2 border-2 inline-block border-green-500 font-bold text-sm sm:text-base hover:bg-green-50 cursor-pointer transition-all">
          Book Your Free Call
        </p>
      </div>

      {/* Quick Links */}
      <div className="text md:w-[22%] w-full text-center md:text-left">
        <h2 className="heading font-bold mb-2 text-lg sm:text-xl">QUICK LINKS</h2>
        <ul className="text-base sm:text-lg">
          <li>
            <Link to="/about" className="hover:underline">About</Link>
          </li>
          <li>
            <Link to="/" className="hover:underline">Service</Link>
          </li>
          <li>
            <Link to="/" className="hover:underline">Portfolio</Link>
          </li>
          <li>
            <Link to="/" className="hover:underline">Contact Us</Link>
          </li>
        </ul>
      </div>

      {/* Social Section */}
      <div className="heading md:w-[22%] w-full text-center md:text-left">
        <h2 className="font-bold text-lg sm:text-xl leading-6">
          Fashion-Focused. <br /> Performance-Obsessed.
        </h2>
        <div className="flex justify-center md:justify-start gap-4 mt-4">
          <FaInstagram className="cursor-pointer hover:scale-110 transition-transform" size={25} />
          <FaLinkedin className="cursor-pointer hover:scale-110 transition-transform" size={25} />
        </div>
      </div>
     
    </div>
     <p className="text-center text-sm w-full text-zinc-500 mt-6  mb-4">
  © {new Date().getFullYear()} Wizon | Developed by Kaal Coders
</p>
</>
  );
};

export default Footer;
