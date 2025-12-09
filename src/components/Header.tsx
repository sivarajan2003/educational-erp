import React from "react";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center">
      <nav
        className="
          w-[65%]               
          max-w-[1200px]        
          bg-[#1b1e27]
          bg-gradient-to-r from-[#1b1e27] to-[#1b1e27]/70
          border border-white/10
          rounded-[26px]        
          px-10 py-3            /* Medium size height */
          flex justify-between items-center
          shadow-xl
          backdrop-blur-xl
        "
      >
        {/* === LOGO === */}
        <div className="flex items-center gap-2">
          <img src={logo} className="w-12 h-12" />
          
        </div>

        {/* === MENU === */}
        <ul className="flex items-center gap-10 text-white text-sm font-medium">
  <li>
    <a href="#home" className="hover:text-gray-300 transition">Home</a>
  </li>
  <li>
    <a href="#aboutus" className="hover:text-gray-300 transition">Aboutus</a>
  </li>
  <li>
    <a href="#contact" className="hover:text-gray-300 transition">Contact</a>
  </li>
</ul>


        {/* === BUTTON === 
        <button
          className="
            bg-white text-black 
            px-6 py-2 
            rounded-xl 
            text-sm font-medium 
            shadow-sm 
            hover:bg-gray-200 transition
          "
        >
          Start for free
        </button>*/}
      </nav>
    </header>
  );
}
