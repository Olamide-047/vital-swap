import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Card = ({ type, index, activeIndex, onClick }) => {
  const cards = {
    visa: {
      name: "Visa",
      color: "from-blue-600 to-indigo-700",
      number: "**** **** **** 4290",
      expiry: "12/26",
    },
    mastercard: {
      name: "Mastercard",
      color: "from-orange-500 to-red-600",
      number: "**** **** **** 8821",
      expiry: "09/25",
    },
    verve: {
      name: "Verve",
      color: "from-teal-500 to-emerald-600",
      number: "**** **** **** 3345",
      expiry: "05/27",
    },
  };

  const { name, color, number, expiry } = cards[type];
  const relativeIndex = (index - activeIndex + 3) % 3;

  const variants = {
    active: {
      scale: 1,
      x: 0,
      zIndex: 3,
      opacity: 1,
      rotateY: 0,
    },
    back: {
      scale: 0.85,
      x: relativeIndex === 1 ? 120 : -120,
      zIndex: 1,
      opacity: 0.4,
      rotateY: relativeIndex === 1 ? 15 : -15,
    },
  };

  return (
    <motion.div
      variants={variants}
      animate={relativeIndex === 0 ? "active" : "back"}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      onClick={onClick}
      className={`absolute w-72 h-44 md:w-96 md:h-56 rounded-2xl p-6 text-white shadow-2xl bg-linear-to-br ${color} backdrop-blur-sm border border-white/20 cursor-pointer transition-all duration-300 hover:shadow-cyan-500/10 active:scale-95`}
    >
      <div className="flex justify-between items-start mb-8">
        <span className="text-xl font-bold tracking-widest uppercase">{name}</span>
        <div className="w-12 h-8 bg-white/20 rounded-md backdrop-blur-md flex items-center justify-center">
          <div className="w-8 h-5 bg-white/40 rounded-sm" />
        </div>
      </div>
      <div className="text-lg md:text-2xl font-mono tracking-widest mb-4">
        {number}
      </div>
      <div className="flex justify-between items-end">
        <div>
          <p className="text-[10px] uppercase opacity-60">Card Holder</p>
          <p className="text-sm font-medium tracking-wide">PETER JOHNSON</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] uppercase opacity-60">Expires</p>
          <p className="text-sm font-medium">{expiry}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function CardsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardTypes = ["visa", "mastercard", "verve"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="cards" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            VitalSwap Virtual Dollar Card
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Seamless cross-border payments at your fingertips.
          </p>
        </div>

        <div className="relative flex justify-center items-center h-64 md:h-80" style={{ perspective: "1000px" }}>
          {cardTypes.map((type, i) => (
            <Card 
              key={type} 
              type={type} 
              index={i} 
              activeIndex={activeIndex} 
              onClick={() => setActiveIndex(i)} 
            />
          ))}
        </div>

        <div className="flex justify-center space-x-2 mt-8">
          {cardTypes.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === i ? "w-8 bg-blue-600" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}