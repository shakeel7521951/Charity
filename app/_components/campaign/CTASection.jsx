"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CTASection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-20 bg-[#723134] text-white text-center">
      <div className="max-w-4xl mx-auto px-6" data-aos="zoom-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#F2EDE9]">
          Be Part of the Change Today
        </h2>
        <p className="mb-8 text-lg md:text-xl leading-relaxed text-[#F2EDE9]">
          Your contribution can bring hope to communities in need.  
          Start supporting a campaign now and help us create a better tomorrow.
        </p>
        <button
          className="px-8 py-4 bg-[#F2EDE9] text-[#723134] font-bold rounded-full shadow-lg hover:bg-[#e0d9d4] transition"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Donate Now
        </button>
      </div>
    </section>
  );
};

export default CTASection;
