import React from "react";

export default function Impact() {
  const stats = [
    { value: "500K+", label: "Donations Processed" },
    { value: "120K+", label: "Beneficiaries Supported" },
    { value: "80+", label: "Registered Charities" },
  ];

  return (
    <section className="py-16 px-6 text-center bg-white max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-[#8A1538]">Our Impact</h2>
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {stats.map((s, i) => (
          <div key={i} className="p-6 shadow rounded-xl border">
            <h3 className="text-3xl font-bold text-[#8A1538]">{s.value}</h3>
            <p className="mt-2 text-gray-600">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-gray-600 max-w-3xl mx-auto">
        <p>
          Each donation makes a difference — with Sandi integration, we ensure
          aid reaches the right people at the right time without duplication.
        </p>
      </div>
    </section>
  );
}
