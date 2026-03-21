export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#calculator" },
      { name: "Result card", href: "#cards" },
    ],
    Company: [
      { name: "About", href: "#hero" },
      { name: "Blog", href: "#hero" },
      { name: "Careers", href: "#hero" },
    ],
    Legal: [
      { name: "Privacy", href: "#hero" },
      { name: "Terms", href: "#hero" },
      { name: "Contact", href: "#hero" },
    ],
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-black text-blue-500 tracking-tight mb-4">
              VitalSwap
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-xs">
              Simple, transparent currency exchange for everyone.
            </p>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">
                {category}
              </h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 font-medium"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-medium">
          <p>© {currentYear} VitalSwap. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#hero" className="hover:text-blue-400 transition-colors">Twitter</a>
            <a href="#hero" className="hover:text-blue-400 transition-colors">LinkedIn</a>
            <a href="#hero" className="hover:text-blue-400 transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}