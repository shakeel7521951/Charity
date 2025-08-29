"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Shield, Eye, Database, Users } from "lucide-react";

export default function SandiInfo() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-in-out" });
  }, []);

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

  return (
    <section className="bg-[#F2EDE9] py-20 px-6">
      {/* Title & Description */}
      <div className="text-center max-w-4xl mx-auto">
        <h2
          data-aos="fade-down"
          className="text-4xl md:text-5xl font-bold text-[#723134]"
        >
          What is <span className="text-[#8A1538]">Sandi?</span>
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-6 text-lg text-gray-700 leading-relaxed"
        >
          <span className="font-semibold">Sandi</span> is Qatar’s national
          platform for charitable and social aid management. It ensures{" "}
          <span className="text-[#8A1538] font-semibold">
            fairness, security, and transparency
          </span>{" "}
          in donations by unifying data across organizations, preventing fraud,
          and building trust between donors, charities, and beneficiaries.
        </p>
      </div>

      {/* Image */}
      <div className="mt-12 flex justify-center" data-aos="zoom-in-up">
        <img
          src="https://images.unsplash.com/photo-1644822861254-c99d0022ab70?w=900&auto=format&fit=crop&q=80"
          alt="Sandi Integration Diagram"
          className="max-w-3xl w-full rounded-2xl shadow-2xl border-4 border-[#723134]/20"
        />
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 max-w-7xl mx-auto">
        {features.map((f, i) => (
          <div
            key={i}
            data-aos="flip-left"
            data-aos-delay={i * 200}
            className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer transform hover:-translate-y-2 transition-all duration-500"
          >
            {/* Background */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:opacity-90 transition-all duration-500"
              style={{ backgroundImage: `url(${f.bg})` }}
            ></div>

            {/* Overlay */}
            <div className="relative z-10 p-8 text-white text-center flex flex-col items-center justify-center h-60 bg-[#723134]/60 group-hover:bg-[#8A1538]/70 transition-all duration-500">
              <f.icon className="w-12 h-12 mb-4 text-[#F2EDE9]" />
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
