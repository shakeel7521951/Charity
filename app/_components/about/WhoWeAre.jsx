"use client";
import React from "react";
import { Shield, Users, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function WhoWeAre() {
  const { t } = useTranslation("about/WhoWeAre");

  const values = [
    {
      icon: Shield,
      title: t("values.0.title"),
      desc: t("values.0.desc"),
      bg: "/about/WhoWeAre-Security.jpg",
    },
    {
      icon: Users,
      title: t("values.1.title"),
      desc: t("values.1.desc"),
      bg: "/about/WhoWeAre-Transparency.jpg",
    },
    {
      icon: HeartHandshake,
      title: t("values.2.title"),
      desc: t("values.2.desc"),
      bg: "/about/WhoWeAre-Trust.jpg",
    },
  ];

  // Framer Motion variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay },
    }),
  };

  const zoomIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (delay = 0) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
        type: "spring",
        stiffness: 120,
        damping: 14,
      },
    }),
  };

  return (
    <section className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-14">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-[#543D2E] tracking-tight"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.1}
        >
          {t("title")}{" "}
          <span className="text-[#821435]">{t("highlightedTitle")}</span>
        </motion.h2>
        <motion.p
          className="mt-5 max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.3}
        >
          {t("description", {
            secure: t("highlightedWords.secure"),
            transparent: t("highlightedWords.transparent"),
            impactful: t("highlightedWords.impactful")
          })}
        </motion.p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {values.map((v, i) => (
          <motion.div
            key={i}
            className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 group"
            variants={zoomIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i * 0.2}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center scale-105 group-hover:scale-110 transition duration-700"
              style={{ backgroundImage: `url(${v.bg})` }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#543D2E]/70 to-[#723134]/80 backdrop-blur-[2px]" />
            {/* Content */}
            <div className="relative p-10 text-center text-white">
              <v.icon className="mx-auto w-16 h-16 mb-5 text-[#F2EDE9]" />
              <h3 className="text-2xl font-bold tracking-wide">{v.title}</h3>
              <p className="mt-4 text-sm md:text-base text-gray-200 leading-relaxed">
                {v.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mission Statement */}
      <motion.div
        className="mt-20 text-center bg-gradient-to-r from-[#F2EDE9] via-white to-[#F2EDE9] p-10 rounded-3xl shadow-xl border border-[#E6DCD5]"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.5}
      >
        <h3 className="text-3xl md:text-4xl font-extrabold text-[#821435]">
          {t("missionTitle")}
        </h3>
        <p className="mt-5 text-gray-700 max-w-4xl mx-auto leading-relaxed text-lg">
          {t("missionText", {
            innovation: t("highlightedWords.innovation"),
            compliance: t("highlightedWords.compliance"),
            compassion: t("highlightedWords.compassion")
          })}
        </p>
        <Link href='/donor'>
          <button className="mt-8 px-8 py-3 rounded-full hover:bg-[#B62F5E] bg-[#821435] text-white font-semibold shadow-lg hover:scale-105 transition">
            {t("learnMoreButton")}
          </button>
        </Link>
      </motion.div>
    </section>
  );
}