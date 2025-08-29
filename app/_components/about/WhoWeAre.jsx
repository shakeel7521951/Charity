import React from "react";
import { Shield, Users, HeartHandshake } from "lucide-react";

export default function WhoWeAre() {
  const values = [
    { icon: Shield, title: "Security", desc: "Every donation is encrypted and monitored." },
    { icon: Users, title: "Transparency", desc: "Complete visibility from donor to beneficiary." },
    { icon: HeartHandshake, title: "Trust", desc: "Backed by RACA & integrated with Sandi." },
  ];

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-[#8A1538]">
        Who We Are
      </h2>
      <p className="mt-4 text-center max-w-3xl mx-auto text-gray-600">
        We are a national digital platform for donations in Qatar, backed by
        <span className="font-semibold"> RACA </span>
        and fully integrated with <span className="font-semibold">Sandi</span>.
        Our mission is to make giving secure, fair, and impactful.
      </p>
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
