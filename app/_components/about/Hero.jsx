"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  // Variants for fade-up effect
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay },
    }),
  };

  return (
    <section
      className="relative h-screen w-full flex items-center justify-center text-center text-white px-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#723134]/80 mix-blend-multiply"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
        >
          About the Donation & Charity <br /> Management Platform
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-[#F2EDE9] leading-relaxed"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
        >
          A secure and transparent platform integrating with{" "}
          <span className="font-semibold text-white">Sandi</span> to ensure
          trust, compliance, and impact in charitable giving across Qatar.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-4"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.6}
        >
          <button className="bg-[#543D2E] text-white px-8 py-3 rounded-xl shadow-lg hover:bg-[#F2EDE9] hover:text-[#543D2E] transition-all duration-300">
            View Campaigns
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-xl shadow-lg hover:bg-white hover:text-[#723134] transition-all duration-300">
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  );
}
