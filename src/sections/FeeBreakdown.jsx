export default function FeeBreakdown() {
  const data = [
    { title: "Platform operations", percent: 50, color: "bg-blue-600", hex: "#2563eb", description: "Maintaining servers, infrastructure and uptime" },
    { title: "Customer support", percent: 25, color: "bg-emerald-500", hex: "#10b981", description: "24/7 dedicated support team for all users" },
    { title: "Development and security", percent: 25, color: "bg-violet-600", hex: "#7c3aed", description: "Continuous improvements and security updates" },
  ];

  return (
    <section className="py-24 bg-gray-50/30" id="fee-breakdown">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Where Your Fees Go
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Complete transparency on how we use your fees to power your experience.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-16">
          <div className="w-full max-w-2xl space-y-6">
            {data.map((item, i) => (
              <Item key={i} {...item} />
            ))}
          </div>

          <div className="relative flex items-center justify-center">
            {/* SVG Pie Chart "Ball" */}
            <svg viewBox="0 0 100 100" className="w-64 h-64 md:w-80 md:h-80 drop-shadow-2xl">
              {/* 50% Segment (Blue) - Start at -90deg, covers 180deg */}
              <circle
                cx="50" cy="50" r="40"
                fill="transparent"
                stroke={data[0].hex}
                strokeWidth="20"
                strokeDasharray="125.66 125.66"
                transform="rotate(-90 50 50)"
              />
              {/* 25% Segment (Green) - Start at 90deg, covers 90deg */}
              <circle
                cx="50" cy="50" r="40"
                fill="transparent"
                stroke={data[1].hex}
                strokeWidth="20"
                strokeDasharray="62.83 188.49"
                transform="rotate(90 50 50)"
              />
              {/* 25% Segment (Purple) - Start at 180deg, covers 90deg */}
              <circle
                cx="50" cy="50" r="40"
                fill="transparent"
                stroke={data[2].hex}
                strokeWidth="20"
                strokeDasharray="62.83 188.49"
                transform="rotate(180 50 50)"
              />
              
              {/* Center Circle for "Torus" effect and text background */}
              <circle cx="50" cy="50" r="30" fill="white" className="drop-shadow-sm" />
              <text
                x="50" y="50"
                textAnchor="middle"
                dy=".3em"
                className="text-[12px] font-bold fill-blue-600"
              >
                100%
              </text>
            </svg>
            
            {/* Decorative Pulse for the center */}
            <div className="absolute w-20 h-20 bg-blue-100 rounded-full animate-ping opacity-20 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Item({ title, percent, color, description }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center space-x-3">
          <div className={`w-3 h-3 rounded-full ${color}`} />
          <h3 className="font-bold text-gray-800 text-lg uppercase tracking-tight">{title}</h3>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${color}`}>
          {percent}%
        </span>
      </div>
      <p className="text-gray-500 leading-relaxed text-sm ml-6">{description}</p>
    </div>
  );
}