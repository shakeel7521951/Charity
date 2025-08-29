"use client";
import React from "react";
import { Users, HeartHandshake, ShieldCheck, Eye } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HowItWorks() {
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const steps = [
    {
      icon: <Users className="w-10 h-10 text-[#8A1538]" />,
      title: "Donor",
      desc: "Chooses a campaign and makes a secure donation.",
    },
    {
      icon: <HeartHandshake className="w-10 h-10 text-[#8A1538]" />,
      title: "Charity",
      desc: "Receives funds and manages aid distribution.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-[#8A1538]" />,
      title: "Sandi Sync",
      desc: "Ensures no duplicate beneficiaries.",
    },
    {
      icon: <Eye className="w-10 h-10 text-[#8A1538]" />,
      title: "Authority (RACA)",
      desc: "Monitors donations in real-time.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50 relative overflow-hidden">
      <h2
        className="text-3xl md:text-4xl font-bold text-center text-[#8A1538]"
        data-aos="fade-up"
      >
        How It Works
      </h2>

      {/* Timeline / Process Flow */}
      <div className="mt-16 relative max-w-6xl mx-auto">
        <div className="hidden md:flex absolute top-1/2 left-0 w-full h-1 bg-[#8A1538]/20 -z-10"></div>

        <div className="grid md:grid-cols-4 gap-12 md:gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center relative"
              data-aos="zoom-in"
              data-aos-delay={i * 200}
            >
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#8A1538]/10 border-4 border-[#8A1538] shadow-lg transition-transform hover:scale-110">
                {step.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="mt-3 text-gray-600">{step.desc}</p>

              {/* Mobile line connector */}
              {i !== steps.length - 1 && (
                <div className="md:hidden w-1 h-12 bg-[#8A1538]/30 mt-6"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
