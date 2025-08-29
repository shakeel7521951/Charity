import React from "react";

export default function Hero() {
  return (
    <section className="relative bg-[#8A1538] text-white py-20 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        About the Donation & Charity Management Platform
      </h1>
      <p className="mt-4 text-lg max-w-2xl mx-auto">
        A secure and transparent platform integrating with{" "}
        <span className="font-semibold">Sandi</span> to ensure trust,
        compliance, and impact in charitable giving across Qatar.
      </p>
      <div className="mt-6 space-x-4">
        <button className="bg-gold px-6 py-3 rounded-lg shadow hover:bg-yellow-500 transition">
          View Campaigns
        </button>
        <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#8A1538] transition">
          Get Started
        </button>
      </div>
    </section>
  );
}
