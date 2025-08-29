import React from "react";

export default function HowItWorks() {
  const steps = [
    { num: 1, title: "Donor", desc: "Chooses a campaign and makes a secure donation." },
    { num: 2, title: "Charity", desc: "Receives funds and manages aid distribution." },
    { num: 3, title: "Sandi Sync", desc: "Ensures no duplicate beneficiaries." },
    { num: 4, title: "Authority (RACA)", desc: "Monitors donations in real-time." },
  ];

  return (
    <section className="py-16 px-6 bg-white max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-[#8A1538]">
        How It Works
      </h2>
      <div className="mt-12 grid md:grid-cols-4 gap-8 text-center">
        {steps.map((s, i) => (
          <div key={i} className="p-6 border rounded-xl shadow hover:shadow-md">
            <div className="text-4xl font-bold text-[#8A1538]">{s.num}</div>
            <h3 className="mt-4 font-semibold">{s.title}</h3>
            <p className="mt-2 text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
