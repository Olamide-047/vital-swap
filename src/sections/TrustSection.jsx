import React from "react";
import { motion } from "framer-motion";
import nibssLogo from "../assets/NIBSS-logo.png";
import ndicLogo from "../assets/NDIC_logo.png";

const TrustSection = () => {
  return (
    <section className="w-full bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-black-600 leading-tight"
      >
        WE VALUE YOUR <span className="text-blue-800">TRUST AND IDENTITY</span> 
      </motion.h1>

        {/* Subtext */}
        <h4 className="text-gray-600 text-base md:text-lg leading-relaxed mb-10">
          Your trust is the foundation of everything we do. That’s why we’ve
          built VitalSwap with Bank-Level security and strict compliance
          standards. Every transaction is encrypted End-to-End making it
          virtually impossible for external interference.
          <br /><br />
          We follow global standards and regulations to keep your money safe.
          Fraud monitoring runs 24/7 protecting your funds when you are not
          looking. We also make security easy for you with clear controls and
          instant alerts.
        </h4>

        {/* Logos */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          
          <img
            src="https://static.cdnlogo.com/logos/c/53/cbn.svg"
            alt="CBN Logo"
            className="h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
          />

          <img
            src={nibssLogo}
            alt="NIBSS Logo"
            className="h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
          />

          <img
            src={ndicLogo}
            alt="NDIC Logo"
            className="h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
          />
        </div>

      </div>
    </section>
  );
};

export default TrustSection;