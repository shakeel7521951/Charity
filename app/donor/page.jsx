"use client";
import React, { useEffect } from "react";
import Lenis from "lenis";

import Hero from "../_components/donor/Hero";
import PayOption from "../_components/donor/PayOption";
import Campaign from "../_components/donor/Campaign";
import MoneyPurs from "../_components/donor/MoneyPurs";
import WhyDonate from "../_components/donor/WhyDonate";
import Corporate from "../_components/donor/Corporate";

const Page = () => {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true, // enables smooth scroll on wheel
      lerp: 0.1, // adjust smoothness
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // cleanup on unmount
    };
  }, []);

  return (
    <div>
      <Hero />
      <Corporate/>
      <PayOption />
      <Campaign />
      <MoneyPurs />
      <WhyDonate />
    </div>
  );
};

export default Page;
