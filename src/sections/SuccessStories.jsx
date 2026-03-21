import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function SuccessStories() {
  const [index, setIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  const stories = [
    { name: "Sarah K.", title: "Transformative Payment Management", content: "This platform has completely transformed how we manage our international payments. It's fast, secure, and incredibly easy to use!", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" },
    { name: "James L.", title: "Smarter Business Decisions", content: "I love the real-time insights feature. It gives me the data I need to make smarter business decisions on the spot.", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James" },
    { name: "Olamide A.", title: "Top-Notch Security", content: "The security measures are top-notch. I feel confident knowing our transactions are protected at all times.", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Olamide" },
    { name: "Elizabeth W.", title: "Seamless Integration", content: "Integration with our existing systems was seamless. The support team was incredibly helpful throughout the entire process.", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elizabeth" },
    { name: "Ahmed M.", title: "Exceptional Customer Support", content: "The customer support is exceptional. They're always available and resolve any issues quickly. Highly recommend this platform!", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed" },
    { name: "Elena R.", title: "Game-Changing Analytics", content: "The analytics dashboard has been a game-changer for our team. We can now track everything in real-time and make data-driven decisions.", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setCardsToShow(window.innerWidth >= 768 ? 3 : 1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    setIndex((prev) => (prev + cardsToShow) % stories.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - cardsToShow + stories.length) % stories.length);
  };

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h1 className="text-3xl font-extrabold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent uppercase tracking-tight">
              Customers Success
            </h1>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-blue-200 rounded-full" />
          </div>
          <p className="text-gray-500 mt-6 text-lg">
           Customers success is our success.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden px-4 py-8 -mx-4">
            <motion.div 
              className="flex gap-6"
              animate={{ x: `-${index * (100 / cardsToShow)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {stories.map((story, i) => (
                <div 
                  key={i} 
                  className="shrink-0"
                  style={{ width: `calc(${100 / cardsToShow}% - ${(cardsToShow - 1) * 1.5}rem / ${cardsToShow})` }}
                >
                  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center h-full group">
                    <div className="w-20 h-20 rounded-2xl bg-blue-50 p-1 mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                      <img src={story.image} alt={story.name} className="w-full h-full rounded-xl object-cover" />
                    </div>
                    <div className="mb-6">
                      <h4 className="text-gray-900 font-bold text-lg">{story.name}</h4>
                    </div>
                    <h3 className="text-xl font-bold text-blue-600 mb-4 uppercase tracking-tight leading-tight">{story.title}</h3>
                    <p className="text-gray-600 italic leading-relaxed mb-8 grow">
                      "{story.content}"
                    </p>
                    <a href="#" className="text-blue-600 font-bold hover:text-blue-700 flex items-center group/link">
                      Read full story 
                      <svg className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons - Styled and Positioned */}
          <div className="flex items-center space-x-6 mt-12 px-4 justify-start">
            <button 
              onClick={prev}
              className="w-16 h-16 rounded-3xl bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 shadow-lg shadow-gray-200/50 hover:shadow-blue-500/20 active:scale-90 group"
              aria-label="Previous page"
            >
              <svg className="w-7 h-7 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={next}
              className="w-16 h-16 rounded-3xl bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 shadow-lg shadow-gray-200/50 hover:shadow-blue-500/20 active:scale-90 group"
              aria-label="Next page"
            >
              <svg className="w-7 h-7 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
