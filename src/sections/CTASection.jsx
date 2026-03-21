import { motion } from "framer-motion";

export default function CTASection() {
  const highlights = [
    { text: "No option required", icon: "✓" },
    { text: "Instant verification", icon: "✓" },
    { text: "24/7 support", icon: "✓" },
  ];

  return (
    <section className="bg-blue-900 py-24 px-6 relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 -mt-24 -mr-24 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-96 h-96 bg-blue-700 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-black text-white mb-6 tracking-tight leading-tight"
        >
          Start Exchanging Currency Today
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-blue-100 font-medium mb-12 max-w-3xl mx-auto"
        >
          Join thousands of Nigerians who trust VitalSwap for fast, secure, and affordable currency exchange.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16"
        >
          <a 
            href="#calculator"
            className="w-full sm:w-auto bg-white text-blue-600 font-black px-10 py-5 rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-xl shadow-blue-900/20 active:scale-95 text-lg text-center"
          >
            Start Exchange Now
          </a>
          <a 
            href="#calculator"
            className="w-full sm:w-auto bg-blue-700 text-white font-black px-10 py-5 rounded-2xl border-2 border-blue-500 hover:bg-blue-800 transition-all duration-300 active:scale-95 text-lg text-center"
          >
            View Exchange Rates
          </a>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-white font-bold">
          {highlights.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-sm">
                {item.icon}
              </div>
              <span className="text-lg tracking-wide">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
