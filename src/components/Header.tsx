import React from "react";
import logo from "../assets/ATSwhlo.png";

export default function Header() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center">
      <nav
        className="
          w-[80%]                   /* Wider box like the example */
          max-w-[1350px]
          bg-gradient-to-r from-[#1A1D27] to-[#0F1117] 
          border border-white/10
          rounded-[32px]           /* Smooth rounded corners */
          px-10 py-4               /* Perfect vertical spacing */
          flex items-center justify-between
          shadow-xl shadow-black/40
          backdrop-blur-xl
        "
      >
        {/* LEFT — LOGO */}
        <div className="flex items-center gap-3">
          <img src={logo} className="h-10 object-contain" />
        </div>

        {/* NAVIGATION MENU */}
        <ul className="flex items-center gap-14 text-white text-base font-medium">
          <li>
            <a href="#home" className="hover:text-gray-300 transition">Home</a>
          </li>
          <li>
            <a href="#modern" className="hover:text-gray-300 transition">Aboutus</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300 transition">Contact</a>
          </li>
        </ul>

        {/* RIGHT — BUTTON 
        <button
          className="
            bg-white text-black
            px-6 py-2
            rounded-xl
            font-semibold
            shadow-md
            hover:bg-gray-200 transition
          "
        >
          Start for free
        </button>*/}
      </nav>
    </header>
  );
}
