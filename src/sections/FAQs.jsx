import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQs() {
  const [open, setOpen] = useState(null);

  const faqs = [
    ["Why does the exchange rates vary?", "Exchange rate fluctuates based on market condition, we update our rate in real-time"],
    ["Do you charge hidden fees?", "No, we believe in complete transparency. all fees are clearly displayed before transactions"],
    ["How can i reduce my exchange fees?", "You can reduce Vital tokens, token holders receive a 50% discount on all transactions"],
    ["How long does currency exchange take?", "Most exchanges are processed instantly. Bank transfer typically takes 1-3 business days."],
    ["What are the minimum and maximum exchange limits?", "minimum exchange is 10USD equivalent. minimum limits depend on your account verification."]
  ];

  const toggleOpen = (i) => {
    setOpen(open === i ? null : i);
  };

  return (
    <section id="faqs" className="py-24 px-6 bg-gray-50/50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Find the answers you're looking for.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={false}
              className={`bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 ${
                open === i ? "shadow-lg ring-1 ring-blue-500/10" : "shadow-sm hover:shadow-md"
              }`}
            >
              <button
                onClick={() => toggleOpen(i)}
                className="w-full text-left px-8 py-6 flex items-center justify-between group"
              >
                <span className={`text-lg font-semibold transition-colors duration-300 ${
                  open === i ? "text-blue-600" : "text-gray-800 group-hover:text-blue-600"
                }`}>
                  {i + 1}. {faq[0]}
                </span>
                <span className={`ml-4 flex-shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}>
                  <svg
                    className={`w-6 h-6 ${open === i ? "text-blue-600" : "text-gray-400 group-hover:text-blue-600"}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-6 text-gray-600 border-t border-gray-50 pt-4 leading-relaxed">
                      {faq[1]}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}