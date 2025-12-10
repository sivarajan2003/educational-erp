import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import Card1 from "../assets/customer.png";
import Card2 from "../assets/dark-132.png";
import Card3 from "../assets/flower.png";
import Card4 from "../assets/order.png";

export default function StackGlowCards() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const cards = [
    { img: Card1, border: "from-purple-500 to-blue-400" },
    { img: Card2, border: "from-green-400 to-cyan-300" },
    { img: Card3, border: "from-yellow-400 to-orange-500" },
    { img: Card4, border: "from-pink-500 to-red-400" },
  ];

  return (
    <div ref={ref} className="relative h-[160vh] w-full flex justify-center items-start">

      <div className="relative w-[420px] h-[550px]">
        {cards.map((card, index) => {
          const offsetStart = index * 0.25;
          const offsetEnd = offsetStart + 0.25;

          const y = useTransform(
            scrollYProgress,
            [offsetStart, offsetEnd],
            [0, -250]
          );

          const opacity = useTransform(
            scrollYProgress,
            [offsetStart, offsetEnd],
            [1, 0]
          );

          const scale = useTransform(
            scrollYProgress,
            [offsetStart, offsetEnd],
            [1, 0.8]
          );

          return (
            <motion.div
              key={index}
              style={{ y, opacity, scale, zIndex: 10 - index }}
              className="absolute top-0 left-0 w-full h-full rounded-3xl overflow-hidden"
            >
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${card.border} opacity-40 blur-xl`}
              ></div>

              <img
                src={card.img}
                className="relative w-full h-full object-cover rounded-3xl shadow-xl"
                alt=""
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
