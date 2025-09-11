"use client";
import React from "react";
import { Eye, Target, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function MissionVisionValues() {
  const { t } = useTranslation("about/MissionVisionValues");

  const values = [
    {
      icon: Target,
      title: t("values.0.title"),
      desc: t("values.0.desc"),
      gradient: "from-[#8A1538] via-[#b63b5c] to-[#d9738f]",
    },
    {
      icon: Eye,
      title: t("values.1.title"),
      desc: t("values.1.desc"),
      gradient: "from-[#8A1538] via-[#6b1a2b] to-[#c84c67]",
    },
    {
      icon: Lightbulb,
      title: t("values.2.title"),
      desc: t("values.2.desc"),
      gradient: "from-[#8A1538] via-[#5c1222] to-[#9b2c46]",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay },
    }),
  };

  return (
    <section className="relative py-20 px-6 bg-gray-50">
      {/* Section Title */}
      <motion.div
        className="text-center max-w-3xl mx-auto"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#8A1538]">
          {t("section.title")}
        </h2>
        <p className="mt-4 text-lg text-gray-600">{t("section.subtitle")}</p>
      </motion.div>

      {/* Mission & Vision */}
      <div className="mt-12 grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <motion.div
          className="p-8 bg-white/90 backdrop-blur-lg rounded-2xl shadow-md border border-gray-100 hover:shadow-2xl transition transform hover:-translate-y-2 duration-500"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.1}
        >
          <h3 className="text-2xl font-semibold text-[#8A1538]">
            {t("mission.title")}
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed">
            {t("mission.desc")}
          </p>
        </motion.div>

        <motion.div
          className="p-8 bg-white/90 backdrop-blur-lg rounded-2xl shadow-md border border-gray-100 hover:shadow-2xl transition transform hover:-translate-y-2 duration-500"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
        >
          <h3 className="text-2xl font-semibold text-[#8A1538]">
            {t("vision.title")}
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed">
            {t("vision.desc")}
          </p>
        </motion.div>
      </div>

      {/* Values */}
      <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
        {values.map((v, i) => (
          <motion.div
            key={i}
            className={`relative p-8 rounded-2xl shadow-lg cursor-pointer text-white 
              bg-gradient-to-br ${v.gradient} 
              overflow-hidden group transform transition duration-700 
              hover:-translate-y-3 hover:shadow-2xl`}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.3 + i * 0.1}
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition duration-500"></div>

            <div className="relative z-10 text-center">
              <v.icon className="mx-auto w-14 h-14 text-white animate-bounce" />
              <h3 className="mt-4 text-2xl font-bold">{v.title}</h3>
              <p className="mt-3 text-sm md:text-base text-gray-100 leading-relaxed">
                {v.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
