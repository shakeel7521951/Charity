"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section
      className="relative h-screen w-full flex items-center justify-center text-center text-white px-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')", // replace with Qatar charity/abstract bg
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for color filter */}
      <div className="absolute inset-0 bg-[#723134]/80 mix-blend-multiply"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <h1
          className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg"
          data-aos="fade-up"
        >
          About the Donation & Charity <br /> Management Platform
        </h1>

        <p
          className="mt-6 text-lg md:text-xl text-[#F2EDE9] leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          A secure and transparent platform integrating with{" "}
          <span className="font-semibold text-white">Sandi</span> to ensure
          trust, compliance, and impact in charitable giving across Qatar.
        </p>

        {/* Buttons */}
        <div
          className="mt-8 flex flex-wrap justify-center gap-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <button className="bg-[#543D2E] text-white px-8 py-3 rounded-xl shadow-lg hover:bg-[#F2EDE9] hover:text-[#543D2E] transition-all duration-300">
            View Campaigns
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-xl shadow-lg hover:bg-white hover:text-[#723134] transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
