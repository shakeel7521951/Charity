"use client";
import React, { useEffect } from "react";
import { Shield, Users, HeartHandshake } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhoWeAre() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

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

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2
          className="text-4xl md:text-5xl font-bold text-[#8A1538]"
          data-aos="fade-up"
        >
          Who We Are
        </h2>
        <p
          className="mt-4 max-w-2xl mx-auto text-gray-700 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          We are Qatar’s trusted national donation platform, dedicated to
          building <span className="font-semibold text-[#8A1538]">secure</span>,{" "}
          <span className="font-semibold text-[#8A1538]">transparent</span>, and{" "}
          <span className="font-semibold text-[#8A1538]">impactful</span> giving
          experiences.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {values.map((v, i) => (
          <div
            key={i}
            className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-500"
            data-aos="zoom-in"
            data-aos-delay={i * 200}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${v.bg})` }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#8A1538]/80 to-[#543D2E]/80" />
            {/* Content */}
            <div className="relative p-8 text-center text-white">
              <v.icon className="mx-auto w-14 h-14 mb-4" />
              <h3 className="text-2xl font-semibold">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed">{v.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mission Statement */}
      <div
        className="mt-16 text-center bg-[#F9F7F4] p-10 rounded-2xl shadow-lg"
        data-aos="fade-up"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-[#8A1538]">
          Our Mission
        </h3>
        <p className="mt-3 text-gray-700 max-w-3xl mx-auto leading-relaxed">
          To revolutionize charitable giving in Qatar by combining innovation,
          compliance, and compassion — ensuring that every contribution reaches
          those in need with maximum impact.
        </p>
        <button className="mt-6 px-8 py-3 rounded-lg bg-[#8A1538] text-white font-semibold shadow hover:bg-[#543D2E] transition">
          Learn More
        </button>
      </div>
    </section>
  );
}
