import React from "react";

export default function SandiInfo() {
  return (
    <section className="bg-gray-50 py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-[#8A1538]">What is Sandi?</h2>
      <p className="mt-4 max-w-3xl mx-auto text-gray-600">
        <span className="font-semibold">Sandi</span> is Qatar’s national
        platform that coordinates social assistance and charitable aid. It
        ensures fairness by preventing duplicate beneficiaries, providing
        transparency, and maintaining a unified record of all aid distribution.
      </p>
      <div className="mt-8 flex justify-center">
        <img
          src="/sandi-flow.png"
          alt="Sandi Integration Diagram"
          className="max-w-xl rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
