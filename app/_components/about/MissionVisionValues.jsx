import React from "react";
import { Eye, Target, Lightbulb } from "lucide-react";

export default function MissionVisionValues() {
  const values = [
    { icon: Target, title: "Compliance", desc: "Aligned with RACA regulations." },
    { icon: Eye, title: "Transparency", desc: "Full visibility across donations." },
    { icon: Lightbulb, title: "Innovation", desc: "Blockchain, AI, and AR/VR features." },
  ];

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-[#8A1538]">
        Mission, Vision & Values
      </h2>
      <div className="mt-8 grid md:grid-cols-2 gap-12 text-center">
        <div>
          <h3 className="text-xl font-semibold">Mission</h3>
          <p className="mt-2 text-gray-600">
            To provide a secure, transparent, and efficient digital donation
            system for Qatar.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Vision</h3>
          <p className="mt-2 text-gray-600">
            To make every donation traceable, accountable, and impactful.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {values.map((v, i) => (
          <div
            key={i}
            className="p-6 border rounded-xl shadow hover:shadow-lg transition text-center"
          >
            <v.icon className="mx-auto w-12 h-12 text-[#8A1538]" />
            <h3 className="mt-4 text-xl font-semibold">{v.title}</h3>
            <p className="mt-2 text-gray-600">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
