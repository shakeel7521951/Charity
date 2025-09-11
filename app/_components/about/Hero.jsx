"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation("about/hero");

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center text-center px-6 pt-24 md:pt-32"
      style={{
        backgroundImage: "url('about/Hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay with brand gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#8A1538]/50 via-[#723134]/65 to-[#8A1538]/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-white px-4">
        {/* Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-snug md:leading-tight drop-shadow-lg"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
        >
          <span className="text-[#F2EDE9]">{t("titleLine1")}</span> <br />
          {t("titleLine2")}
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="mt-6 text-base sm:text-lg md:text-xl text-[#F2EDE9]/90 leading-relaxed max-w-2xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
        >
          {t("subtitle")}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.6}
        >
          <Link href='/contact'>
            <button className="bg-gradient-to-r from-[#B62F5E] to-[#821435] text-[#F2EDE9] px-8 py-3 rounded-xl text-base sm:text-lg font-semibold shadow-lg hover:bg-[#543D2E] hover:text-white hover:bg-gradient-to-r hover:from-[#821435] hover:to-[#B62F5E] duration-400">
              {t("donateButton")}
            </button>
          </Link>
          <Link href='/campaign'>
            <button className="border-2 border-[#F2EDE9] text-[#F2EDE9] px-8 py-3 rounded-xl text-base sm:text-lg font-semibold shadow-lg hover:bg-[#F2EDE9] hover:text-[#723134] transition-all duration-300">
              {t("campaignsButton")}
            </button>
          </Link>
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          className="mt-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.8}
        >
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F2EDE9]">{t("livesImpacted")}</h3>
            <p className="text-xs sm:text-sm md:text-base text-[#FFFFFF]/80">{t("stats.livesImpacted")}</p>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F2EDE9]">{t("campaignsCount")}</h3>
            <p className="text-xs sm:text-sm md:text-base text-[#FFFFFF]/80">{t("stats.campaigns")}</p>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F2EDE9]">{t("transparencyPercent")}</h3>
            <p className="text-xs sm:text-sm md:text-base text-[#FFFFFF]/80">{t("stats.transparency")}</p>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F2EDE9]">{t("supportHours")}</h3>
            <p className="text-xs sm:text-sm md:text-base text-[#FFFFFF]/80">{t("stats.support")}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}