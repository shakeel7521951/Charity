"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Impact() {
  const stats = [
    { value: 500000, label: "Donations Processed" },
    { value: 120000, label: "Beneficiaries Supported" },
    { value: 80, label: "Registered Charities" },
  ];

  // Parent animation for stagger
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  // Child fade-up animation
  const fadeUp = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  // Counter animation helper
  const Counter = ({ target }) => {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
      let start = 0;
      const end = target;
      if (start === end) return;

      let duration = 2000; // 2 seconds
      let incrementTime = 20;
      let step = (end / duration) * incrementTime;

      let timer = setInterval(() => {
        start += step;
        if (start >= end) {
          clearInterval(timer);
          start = end;
        }
        setCount(Math.floor(start));
      }, incrementTime);
    }, [target]);

    return <>{count.toLocaleString()}+</>;
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white via-gray-50 to-gray-100 text-center relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#8A1538]/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#8A1538]/10 rounded-full blur-3xl"></div>

      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-[#8A1538] relative z-10"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Our Impact
      </motion.h2>

      {/* Stats Grid */}
      <motion.div
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mt-16 max-w-6xl mx-auto relative z-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {stats.map((s, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{
              scale: 1.05,
              background:
                "linear-gradient(135deg, rgba(138,21,56,0.1), rgba(138,21,56,0.2))",
              boxShadow: "0 20px 50px rgba(138,21,56,0.25)",
            }}
            className="p-10 bg-white rounded-2xl border border-gray-200 shadow-md transition-all duration-500 cursor-pointer"
          >
            <motion.h3
              className="text-4xl md:text-5xl font-extrabold text-[#8A1538]"
              whileInView={{ scale: [0.8, 1.2, 1] }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Counter target={s.value} />
            </motion.h3>
            <p className="mt-3 text-gray-600 text-lg font-medium">{s.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Subtext */}
      <motion.div
        className="mt-16 text-gray-600 max-w-3xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-lg leading-relaxed">
          Each donation creates real change — with{" "}
          <span className="text-[#8A1538] font-semibold">
            Sandi integration
          </span>
          , we ensure aid reaches the right people at the right time, without
          duplication or delay.
        </p>
      </motion.div>
    </section>
  );
}
