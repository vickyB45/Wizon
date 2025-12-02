import React, { useState } from "react";
import { HiX, HiOutlineMenuAlt2 } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const path = [
  { name: "About", path: "/about" },
  { name: "Service", path: "/service" },
  { name: "Contact Us", path: "/contact" },
  { name: "Portfolio", path: "/portfolio" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isLandingPage = location.pathname === "/landing";

  return (
    <div
      className={`${
        isLandingPage
          ? "md:bg-gradient-to-r from-white to-[#F5F5F5]"
          : "bg-white"
      }`}
    >
      <nav className="flex py-2 md:py-0 items-center justify-between px-6 max-w-6xl mx-auto relative">
        {/* ===== MOBILE VIEW ===== */}
        <div className="flex items-center justify-between w-full md:hidden relative">
          <button
            className="text-3xl text-gray-800 z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            <HiOutlineMenuAlt2 />
          </button>

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" className="cursor-pointer select-none">
              <img className="w-30 sm:w-44" src="/logo.png" alt="logo" />
            </Link>
          </div>
        </div>

        {/* ===== DESKTOP VIEW ===== */}
        <div className="hidden md:flex items-center justify-between w-full">
          <div className="text-5xl logo font-bold tracking-wide w-[20%]">
            <Link to="/" className="cursor-pointer">
              <img className="w-44" src="/logo.png" alt="logo" />
            </Link>
          </div>

          <ul className="flex space-x-10 text-[21px] text-gray-800 justify-center items-center select-none text-center w-[80%]">
            {path.map((item, i) => (
              <Link
                to={item.path}
                key={i}
                className={`cursor-pointer px-3 text transition-all duration-200 active:scale-[.94] ${
                  location.pathname === item.path
                    ? "border-2 border-[#00c951]"
                    : "border-2 border-transparent"
                }`}
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
                <Link to={item.path} key={i} onClick={() => setIsOpen(false)}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`cursor-pointer active:scale-[.96] transition-transform ${
                      location.pathname === item.path
                        ? "border-l-4 border-[#00c951] pl-2"
                        : ""
                    }`}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              ))}

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
    </div>
  );
};

export default Navbar;
