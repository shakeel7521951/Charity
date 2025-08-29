"use client";
import React from "react";
import { Shield, Users, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

export default function WhoWeAre() {
  const values = [
    {
      icon: Shield,
      title: "Security",
      desc: "Every donation is encrypted, monitored, and protected under Qatar’s compliance laws.",
      bg: "/images/security-bg.jpg",
    },
    {
      icon: Users,
      title: "Transparency",
      desc: "Track your donations with complete visibility from donor to beneficiary.",
      bg: "/images/transparency-bg.jpg",
    },
    {
      icon: HeartHandshake,
      title: "Trust",
      desc: "Backed by RACA & integrated with Sandi for fairness and accountability.",
      bg: "/images/trust-bg.jpg",
    },
  ];

  // Framer Motion variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay },
    }),
  };

  const zoomIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (delay = 0) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay },
    }),
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl font-bold text-[#723134]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.1}
        >
          Who We Are
        </motion.h2>
        <motion.p
          className="mt-4 max-w-2xl mx-auto text-gray-700"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.3}
        >
          We are Qatar’s trusted national donation platform, dedicated to
          building <span className="font-semibold">secure</span>,{" "}
          <span className="font-semibold">transparent</span>, and{" "}
          <span className="font-semibold">impactful</span> giving experiences.
        </motion.p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {values.map((v, i) => (
          <motion.div
            key={i}
            className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-500"
            variants={zoomIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i * 0.2}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${v.bg})` }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#543D2E]/70 to-[#723134]/80" />
            {/* Content */}
            <div className="relative p-8 text-center text-white">
              <v.icon className="mx-auto w-14 h-14 mb-4" />
              <h3 className="text-2xl font-semibold">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed">{v.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mission Statement */}
      <motion.div
        className="mt-16 text-center bg-[#F2EDE9] p-8 rounded-2xl shadow-lg"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.5}
      >
        <h3 className="text-2xl font-bold text-[#543D2E]">Our Mission</h3>
        <p className="mt-3 text-gray-700 max-w-3xl mx-auto">
          To revolutionize charitable giving in Qatar by combining innovation,
          compliance, and compassion — ensuring that every contribution reaches
          those in need with maximum impact.
        </p>
        <button className="mt-6 px-8 py-3 rounded-lg bg-[#723134] text-white font-semibold shadow hover:bg-[#543D2E] transition">
          Learn More
        </button>
      </motion.div>
    </section>
  );
}
