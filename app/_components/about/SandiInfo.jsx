"use client";
import React from "react";
import { Shield, Eye, Database, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function SandiInfo() {
  const features = [
    {
      icon: Shield,
      title: "Fairness & Security",
      desc: "Prevents duplicate beneficiaries, ensuring aid reaches those who truly need it.",
      bg: "/images/security-bg.jpg",
    },
    {
      icon: Eye,
      title: "Transparency",
      desc: "Gives donors, organizations, and regulators full visibility into aid distribution.",
      bg: "/images/transparency-bg.jpg",
    },
    {
      icon: Database,
      title: "Unified Records",
      desc: "Maintains a centralized national database of all charitable transactions.",
      bg: "/images/database-bg.jpg",
    },
    {
      icon: Users,
      title: "Collaboration",
      desc: "Connects charities, government, and donors for more impactful giving.",
      bg: "/images/community-bg.jpg",
    },
  ];

  // Motion variants
  const fadeDown = {
    hidden: { opacity: 0, y: -40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay },
    }),
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay },
    }),
  };

  const zoomInUp = {
    hidden: { opacity: 0, scale: 0.9, y: 60 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="bg-[#F2EDE9] py-20 px-6">
      {/* Title & Description */}
      <div className="text-center max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[#723134]"
          variants={fadeDown}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
        >
          What is <span className="text-[#8A1538]">Sandi?</span>
        </motion.h2>
        <motion.p
          className="mt-6 text-lg text-gray-700 leading-relaxed"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.3}
        >
          <span className="font-semibold">Sandi</span> is Qatar’s national
          platform for charitable and social aid management. It ensures{" "}
          <span className="text-[#8A1538] font-semibold">
            fairness, security, and transparency
          </span>{" "}
          in donations by unifying data across organizations, preventing fraud,
          and building trust between donors, charities, and beneficiaries.
        </motion.p>
      </div>

      {/* Image */}
      <motion.div
        className="mt-12 flex justify-center"
        variants={zoomInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img
          src="https://images.unsplash.com/photo-1644822861254-c99d0022ab70?w=900&auto=format&fit=crop&q=80"
          alt="Sandi Integration Diagram"
          className="max-w-3xl w-full rounded-2xl shadow-2xl border-4 border-[#723134]/20"
        />
      </motion.div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 max-w-7xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={i}
            className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer transform hover:-translate-y-2 transition-all duration-500 min-h-[280px] md:min-h-0"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i * 0.2}
          >
            {/* Background */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:opacity-90 transition-all duration-500"
              style={{ backgroundImage: `url(${f.bg})` }}
            ></div>

            {/* Overlay + Content */}
            <div className="relative z-10 p-8 text-white text-center flex flex-col items-center justify-center h-full bg-[#723134]/60 group-hover:bg-[#8A1538]/70 transition-all duration-500">
              <f.icon className="w-12 h-12 mb-4 text-[#F2EDE9]" />
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
