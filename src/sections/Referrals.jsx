export default function Referrals() {
  const referrals = [
    { link: "vitalswap.com/ref/ELIZABETH" },
    { link: "vitalswap.com/ref/PETER" },
    { link: "vitalswap.com/ref/MESSI" },
    { link: "vitalswap.com/ref/OLA" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="relative inline-block mb-4">
          <h1 className="text-4xl font-extrabold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            SwapTag Referrals
          </h1>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-blue-200 rounded-full" />
        </div>

        <p className="text-gray-500 text-lg mt-6 max-w-2xl mx-auto">
          Invite friends and earn rewards for every successful swap. 
          Your network is your net worth.
        </p>

        <div className="grid sm:grid-cols-2 gap-8 mt-16 text-left">
          {referrals.map((ref, i) => (
            <div 
              key={i} 
              className="group p-8 bg-gray-50 rounded-3xl border border-gray-100 transition-all duration-300 hover:shadow-xl hover:bg-white hover:border-blue-100"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                </div>
              </div>
              <p className="text-gray-800 font-mono text-sm mb-6 break-all">{ref.link}</p>
              <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-10 py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-yellow-400/20 active:scale-[0.98] flex items-center justify-center space-x-2">
                <span>Copy Link and Earn</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}