"use client";
import React, { useEffect } from "react";
import { Eye, Target, Lightbulb } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MissionVisionValues() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const values = [
    {
      icon: Target,
      title: "Compliance",
      desc: "Strictly aligned with RACA regulations to ensure all donations are legitimate and ethical.",
      gradient: "from-[#8A1538] via-[#b63b5c] to-[#d9738f]",
    },
    {
      icon: Eye,
      title: "Transparency",
      desc: "Donors, charities, and regulators enjoy complete visibility into donation flows.",
      gradient: "from-[#8A1538] via-[#6b1a2b] to-[#c84c67]",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      desc: "Integrating Blockchain, AI, and AR/VR to redefine digital giving in Qatar.",
      gradient: "from-[#8A1538] via-[#5c1222] to-[#9b2c46]",
    },
  ];

  return (
    <section className="relative py-20 px-6 bg-gray-50">
      {/* Section Title */}
      <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold text-[#8A1538]">
          Mission, Vision & Values
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Guided by integrity, innovation, and compliance, we’re building
          Qatar’s most trusted and impactful digital donation ecosystem.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="mt-12 grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div
          className="p-8 bg-white/90 backdrop-blur-lg rounded-2xl shadow-md border border-gray-100 hover:shadow-2xl transition transform hover:-translate-y-2 duration-500"
          data-aos="fade-right"
        >
          <h3 className="text-2xl font-semibold text-[#8A1538]">Mission</h3>
          <p className="mt-3 text-gray-600 leading-relaxed">
            To provide a{" "}
            <span className="font-semibold">
              secure, transparent, and efficient
            </span>{" "}
            digital donation system that ensures fairness and accountability
            across Qatar.
          </p>
        </div>

        <div
          className="p-8 bg-white/90 backdrop-blur-lg rounded-2xl shadow-md border border-gray-100 hover:shadow-2xl transition transform hover:-translate-y-2 duration-500"
          data-aos="fade-left"
        >
          <h3 className="text-2xl font-semibold text-[#8A1538]">Vision</h3>
          <p className="mt-3 text-gray-600 leading-relaxed">
            To create a future where{" "}
            <span className="font-semibold">
              every donation is traceable, impactful, and trusted
            </span>{" "}
            — driving social progress in Qatar and beyond.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
        {values.map((v, i) => (
          <div
            key={i}
            className={`relative p-8 rounded-2xl shadow-lg cursor-pointer text-white 
              bg-gradient-to-br ${v.gradient} 
              overflow-hidden group transform transition duration-700 
              hover:-translate-y-3 hover:shadow-2xl`}
            data-aos="zoom-in"
          >
            {/* Animated Overlay */}
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition duration-500"></div>

            {/* Content */}
            <div className="relative z-10 text-center">
              <v.icon className="mx-auto w-14 h-14 text-white animate-bounce" />
              <h3 className="mt-4 text-2xl font-bold">{v.title}</h3>
              <p className="mt-3 text-sm md:text-base text-gray-100 leading-relaxed">
                {v.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
