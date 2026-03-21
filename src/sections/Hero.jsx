import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="text-center py-16 md:py-24 px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-black-600 leading-tight"
      >
        Simple transparent pricing for{" "}
        <span className="text-blue-800">Every Swap</span>
      </motion.h1>

      <p className="mt-4 md:mt-6 max-w-xl md:max-w-2xl mx-auto text-sm md:text-base text-gray-600">
        At <span className="font-bold">VitalSwap</span>, we believe in complete transparency. Know exactly what
        you will pay before you swap, with competitive rates and no surprises.
      </p>

      <div className="grid grid-cols-4 gap-4 md:gap-8 mt-12 max-w-sm mx-auto">
        {[
          { src: "https://flagcdn.com/w160/ca.png", alt: "Canada" },
          { src: "https://flagcdn.com/w160/gb.png", alt: "UK" },
          { src: "https://flagcdn.com/w160/ng.png", alt: "Nigeria" },
          { src: "https://flagcdn.com/w160/us.png", alt: "USA" },
        ].map((flag, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
          >
            <img src={flag.src} alt={flag.alt} className="w-10 md:w-16 mx-auto object-cover rounded-md" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}