import React, { useEffect, useState } from "react";

export default function Hero() {
  const messages = [
    "AN OPEN SOURCE SCHOOL ADMINISTRATION SOFTWARE",
    "ULTIMATE SOFTWARE TO RUN YOUR SCHOOL",
  ];

  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true); // fade out

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % messages.length); // switch message
        setAnimate(false); // fade in
      }, 700);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="
        relative min-h-screen flex flex-col items-center justify-center 
        bg-[#0F131D] 
        bg-dot-pattern
        text-center
      "
    >
      <div className="relative z-10 container mx-auto px-4 overflow-hidden">
        <h1
          className={`
            text-4xl md:text-5xl lg:text-6xl font-bold 
            text-white leading-tight max-w-5xl mx-auto
            transition-all duration-700 ease-in-out
            ${animate ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"}
          `}
        >
          {messages[index]}
        </h1>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="#contact"
            className="
              px-10 py-4 rounded-full font-medium text-lg 
              bg-[#8854FF] text-white
              hover:bg-black transition-all duration-300
              block text-center
            "
          >
            Book Demo
          </a>

          <a
            href="#aboutus"
            className="
              px-10 py-4
              rounded-full 
              text-white
              border border-white
              font-medium text-lg
            "
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
