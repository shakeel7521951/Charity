import React from "react";
import { FileCheck, Scale, ShieldCheck } from "lucide-react";

export default function OversightCompliance() {
  const points = [
    { icon: FileCheck, title: "Campaign Approval", desc: "Every campaign reviewed by RACA." },
    { icon: Scale, title: "Compliance", desc: "Financial monitoring & anti-fraud checks." },
    { icon: ShieldCheck, title: "Transparency", desc: "Blockchain ensures tamper-proof records." },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-[#8A1538]">
        Oversight & Compliance
      </h2>
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {points.map((p, i) => (
          <div
            key={i}
            className="p-6 border rounded-xl shadow hover:shadow-lg transition text-center"
          >
            <p.icon className="mx-auto w-12 h-12 text-[#8A1538]" />
            <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-gray-600">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
