import React from "react";

export default function CallToAction() {
  return (
    <section className="py-20 px-6 text-center bg-[#8A1538] text-white">
      <h2 className="text-3xl font-bold">Join us in making donations transparent and impactful</h2>
      <p className="mt-4 text-lg">Be part of a trusted system backed by RACA & integrated with Sandi</p>
      <div className="mt-6 space-x-4">
        <button className="bg-white text-[#8A1538] px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Donate Now
        </button>
        <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#8A1538] transition">
          Register as Charity
        </button>
      </div>
    </section>
  );
}
