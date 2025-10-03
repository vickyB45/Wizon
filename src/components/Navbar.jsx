
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white max-w-5xl mx-auto">
      {/* Logo */}
      <div className="text-5xl logo font-bold tracking-wide">
        <span className="text-black">wizon</span>
        <span className="block text-xs tracking-[0.4em] text-gray-400 -mt-1">
          {/* MEDIA */}
        </span>
      </div>

      {/* Menu Items */}
      <ul className="flex space-x-10 text text-[17px]  text-gray-800 select-none">
        <li className="cursor-pointer transition-all duration-200 active:scale-[.94]">About Us</li>
        <li className="cursor-pointer transition-all duration-200 active:scale-[.94]">Portfolio</li>
        <li className="cursor-pointer transition-all duration-200 active:scale-[.94]">Contact</li>
        <li className="cursor-pointer transition-all duration-200 active:scale-[.94]">Services</li>
      </ul>
    </nav>
  );
};

export default Navbar;
