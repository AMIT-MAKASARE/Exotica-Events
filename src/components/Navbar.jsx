// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuLeft = ["Home", "About", "Services"];
  const menuRight = ["Gallery", "Upcoming Events", "Contact"];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] 
                    bg-blue-950/50 backdrop-blur-md text-white 
                    rounded-2xl px-6 py-3 flex items-center justify-between 
                    shadow-lg border border-yellow-400/30">
      {/* Left Menu */}
      <div className="hidden md:flex gap-6">
        {menuLeft.map((item) => (
          <Link
            key={item}
            to={item.toLowerCase()}
            smooth={true}
            duration={500}
            className="cursor-pointer text-white hover:text-yellow-400 transition font-medium"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Logo */}
      <div className="w-16 h-16 flex items-center justify-center">
        <a href="#home">
        <img
          src="src/components/imgVideos/mainLogo.jpg"
          alt="logo"
          className="rounded-full w-full h-full object-cover border-2 border-yellow-400 shadow-md"
        /></a>
      </div>

      {/* Right Menu */}
      <div className="hidden md:flex gap-6">
        {menuRight.map((item) => (
          <Link
            key={item}
            to={item.toLowerCase()}
            smooth={true}
            duration={500}
            className="cursor-pointer text-white hover:text-green-400 transition font-medium"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl text-yellow-400"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[90%] 
                        bg-blue-950/95 rounded-xl p-6 flex flex-col gap-4 md:hidden 
                        border border-yellow-400/40">
          {[...menuLeft, ...menuRight].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              className="cursor-pointer text-white hover:text-yellow-400 transition font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
