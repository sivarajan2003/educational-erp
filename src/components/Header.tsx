import React from "react";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center">
      <nav
        className="
          w-[65%]                     /* Similar width to Image 1 */
          max-w-[1250px]
          bg-[#1B1E27]/90            /* Dark translucent background */
          border border-white/10
          rounded-[30px]             /* Bigger round corners like Image 1 */
          px-14 py-1                 /* Height same as Image 1 */
          flex items-center justify-between
          shadow-lg backdrop-blur-xl
        "
      >
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img src={logo} className="w-12 h-12 object-contain" />
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
      </nav>
    </header>
  );
}
