import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-4 md:px-10 py-4 shadow-sm sticky top-0 bg-white z-50">
      <h1 className="text-xl md:text-2xl font-bold text-blue-600">
        VitalSwap
      </h1>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-8 text-sm">
        <a href="#features">Features</a>
        <a href="#calculator">Calculator</a>
        <a href="#fee-breakdown">Pricing</a>
        <a href="#faqs">FAQs</a>
      </nav>

      {/* Buttons */}
      <div className="hidden md:flex gap-4">
        <button className="px-4 py-2 border rounded-lg">Sign In</button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
          Get Started
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-6 gap-4 md:hidden">
          <a href="#features">Features</a>
          <a href="#calculator">Calculator</a>
          <a href="#fee-breakdown">Pricing</a>
          <a href="#faqs">FAQs</a>
          <button className="px-4 py-2 border rounded-lg w-3/4">
            Sign In
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg w-3/4">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}