import React, { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const path = [
  {
    name: "About",
    path: "/about"
  },
  {
    name: "Service",
    path: "/service"
  },
  {
    name: " Contact Us",
    path: "/contact"
  },
  {
    name: "Portfolio",
    path: "/portfolio"
  },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);



  return (
    <nav className="flex items-center justify-between px-6 py-4  max-w-5xl mx-auto relative">
      {/* ===== MOBILE VIEW ===== */}
      <div className="flex items-center justify-between w-full md:hidden relative">
        {/* Left: Menu Icon */}
        <button
          className="text-3xl text-gray-800 z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiOutlineMenuAlt2 className="opacity-0"/> : <HiOutlineMenuAlt2 />}
        </button>

        {/* Center: Logo (absolute for perfect centering) */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className=" select-none">
            <Link to="/" className=" cursor-pointer">
              <img className="w-30 sm:w-44" src="/logo.png" alt="logo" />
            </Link>
          </div>
        </div>
      </div>

      {/* ===== DESKTOP VIEW ===== */}
      <div className="hidden md:flex items-center justify-between w-full">
        {/* Logo Center */}
        <div className="text-5xl logo font-bold tracking-wide">
          <Link to="/" className=" cursor-pointer">
            <img className="w-44" src="/logo.png" alt="logo" />
          </Link>        </div>

        {/* Menu Items */}
        <ul className="flex space-x-10 text-[19px] text-gray-800 select-none">
          {path.map((item, i) => (
            <Link
              to={item.path}
              key={i}
              className="cursor-pointer transition-all duration-200 active:scale-[.94]"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </div>

      {/* ===== MOBILE SIDEBAR ===== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-3/4 h-full bg-white pt-10 shadow-xl z-40 flex flex-col items-start p-6 space-y-6 text-lg font-medium text-gray-800"
          >
            {path.map((item, i) => (
              <Link
                to={item.path}
                key={i}
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="cursor-pointer text  active:scale-[.96] transition-transform"
                >
                  {item.name}
                </motion.div>
              </Link>
            ))}

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-3xl text-gray-700"
            >
              <HiX />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
