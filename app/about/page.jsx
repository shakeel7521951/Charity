"use client";
import React from "react";
import Hero from "../_components/about/Hero";
import WhoWeAre from "../_components/about/WhoWeAre";
import SandiInfo from "../_components/about/SandiInfo";
import MissionVisionValues from "../_components/about/MissionVisionValues";
import HowItWorks from "../_components/about/HowItWorks";
import OversightCompliance from "../_components/about/OversightCompliance";
import Impact from "../_components/about/Impact";
import CallToAction from "../_components/about/CallToAction";

export default function AboutPage() {
  return (
    <main className="font-sans bg-white text-gray-800">
      <Hero />
      <WhoWeAre />
      <SandiInfo />
      <MissionVisionValues />
      <HowItWorks />
      <OversightCompliance />
      <Impact />
      <CallToAction />
    </main>
  );
}
