import React, { useEffect, useState } from "react";

export default function Hero() {
  const [text, setText] = useState(
    "AN OPEN SOURCE SCHOOL ADMINISTRATION SOFTWARE"
  );
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);

      setTimeout(() => {
        setText("ULTIMATE SOFTWARE TO RUN YOUR SCHOOL");
        setAnimate(false);
      }, 700);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    
    <section
      id="home"
      className="
        relative min-h-screen flex items-center justify-center 
        bg-[#0F131D] 
        bg-dot-pattern   /* custom pattern class */
      "
    >
      <div className="relative z-10 container mx-auto px-4 text-center overflow-hidden">
        <h1
          className={`
            text-4xl md:text-5xl lg:text-6xl font-bold 
            text-white leading-tight max-w-5xl mx-auto
            transition-all duration-700 ease-in-out
            ${animate ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"}
          `}
        >
          {text}
        </h1>
      </div>
    </section>
  );
} 