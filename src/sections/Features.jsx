import { motion } from "framer-motion";

export default function Features() {
  const cards = [
    {
      note: "Low, transparent fee on all currency exchanges",
      badge: "Exchange fee, 0.2%",
      badgeColor: "text-blue-600 bg-blue-50",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      image: "/stock_market_rising.png"
    },
    {
      note: "No charges for bank deposits and withdrawals",
      badge: "Bank transfer, Free",
      badgeColor: "text-emerald-600 bg-emerald-50",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      image: "/smiling_woman.png"
    },
    {
      note: "No monthly fees or account maintenance charges",
      badge: "Account setup, Free",
      badgeColor: "text-purple-600 bg-purple-50",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      image: "/smiling_man.png"
    }
  ];

  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Simple Fee Structure
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 font-medium max-w-2xl mx-auto">
            Clear competitive rates for all your currency exchange needs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative bg-gray-50 rounded-3xl overflow-hidden hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-gray-100"
            >
              {/* Badge */}
              <div className="absolute top-6 left-6 z-10">
                <div className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm shadow-sm ${card.badgeColor}`}>
                  {card.icon}
                  <span>{card.badge}</span>
                </div>
              </div>

              {/* Content Box */}
              <div className="p-9 pb-0 md:p-8 md:pb-0 m-11">
                <p className="text-xl font-bold text-gray-900 leading-snug mb-8">
                  {card.note}
                </p>
              </div>

              {/* Image Container */}
              <div className="relative h-72 w-full mt-auto overflow-hidden transition-transform duration-500 group-hover:-translate-y-2">
                <img
                  src={card.image}
                  alt={card.note}
                  className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-white/90 via-white/20 to-transparent group-hover:opacity-0 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}