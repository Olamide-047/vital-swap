import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Calculator() {
  const [amount, setAmount] = useState(100);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("NGN");
  const [discount, setDiscount] = useState(false);

  // Realistic-ish dummy rates
  const rates = {
    USD: { NGN: 1520, EUR: 0.92, USD: 1 },
    NGN: { USD: 1 / 1520, EUR: 1 / 1650, NGN: 1 },
    EUR: { NGN: 1650, USD: 1.09, EUR: 1 },
  };

  const exchangeRate = rates[fromCurrency]?.[toCurrency] || 1;
  const feePercent = discount ? 0.001 : 0.002;
  const feeAmount = amount * feePercent;
  const result = (amount - feeAmount) * exchangeRate;

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const currencyOptions = [
    { code: "USD", label: "US Dollar", flag: "$" },
    { code: "NGN", label: "Nigerian Naira", flag: "₦" },
    { code: "EUR", label: "Euro", flag: "€" },
  ];

  return (
    <section id="calculator" className="py-24 px-6 bg-gray-50/30">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-blue-600 mb-4 tracking-tight">
            Exchange Calculator
          </h2>
          <p className="text-gray-600 text-lg font-semibold">
            Calculate your exchange amount and fees in real time .
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-xl shadow-blue-500/5 border border-gray-100 p-8 md:p-10"
        >
          <div className="space-y-6">
            {/* Amount Input */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">
                Amount to Send
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full bg-gray-50 border-none rounded-2xl p-5 text-2xl font-bold text-gray-900 focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                  
                />
                <div className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 font-bold">
                  {fromCurrency}
                </div>
              </div>
            </div>

            {/* Currency Selectors & Swap */}
            <div className="flex flex-col md:flex-row items-center gap-4 relative">
              <div className="w-full">
                <label className="block text-sm font-bold text-gray-700 mb-2 ml-1 text-center md:text-left">
                  From
                </label>
                <select
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                  className="w-full bg-gray-50 border-none rounded-2xl p-4 font-semibold text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none appearance-none cursor-pointer"
                >
                  {currencyOptions.map((opt) => (
                    <option key={opt.code} value={opt.code}>
                      {opt.flag} {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <motion.button 
                onClick={handleSwap}
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                className="z-10 bg-blue-600 text-white p-4 rounded-full shadow-lg shadow-blue-600/20 mt-6 md:mt-2 transition-colors hover:bg-blue-700"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </motion.button>

              <div className="w-full">
                <label className="block text-sm font-bold text-gray-700 mb-2 ml-1 text-center md:text-left">
                  To
                </label>
                <select
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                  className="w-full bg-gray-50 border-none rounded-2xl p-4 font-semibold text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none appearance-none cursor-pointer"
                >
                  {currencyOptions.map((opt) => (
                    <option key={opt.code} value={opt.code}>
                      {opt.flag} {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Token Discount Toggle */}
            <div className="pt-2">
              <label className="flex items-center gap-3 p-4 bg-blue-50/50 rounded-2xl border border-blue-100 cursor-pointer group hover:bg-blue-50 transition-colors">
                <input 
                  type="checkbox" 
                  checked={discount}
                  onChange={() => setDiscount(!discount)}
                  className="w-5 h-5 rounded border-blue-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm font-semibold text-blue-800 group-hover:text-blue-900 select-none">
                  I hold VITAL tokens (50% fee discount applied)
                </span>
              </label>
            </div>

            {/* Summary */}
            <div className="bg-gray-900 rounded-3xl p-8 text-white relative overflow-hidden group">
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                  <p className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-1">
                    You'll Receive
                  </p>
                  <motion.p 
                    key={result}
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-4xl font-black"
                  >
                    {new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: toCurrency,
                    }).format(result)}
                  </motion.p>
                </div>
                <div className="h-px w-full md:h-12 md:w-px bg-gray-800" />
                <div className="text-center md:text-right">
                  <p className="text-gray-400 text-sm font-medium mb-1">Fee: ({discount ? '0.1%' : '0.2%'})</p>
                  <p className="font-bold text-lg text-blue-400">
                    {new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: fromCurrency,
                    }).format(feeAmount)}
                  </p>
                </div>
              </div>
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl" />
            </div>

            <p className="text-center text-xs text-gray-400 px-4">
              *Amounts may vary slightly based on live market data. Minimum exchange limit: 10.00 {fromCurrency}.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}