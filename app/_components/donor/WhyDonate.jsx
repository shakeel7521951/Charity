"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FiRefreshCw,
  FiGlobe,
  FiShield,
  FiLock,
  FiArrowRight,
  FiAward,
  FiHeart
} from "react-icons/fi";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import "../../../i18n";



const WhyDonate = () => {

  const { t } = useTranslation("donor/WhyDonate");
    

  const trustPoints = [
    {
      icon: <FiRefreshCw className="w-10 h-10 text-[#aa335f]" />,
      title: t("trustPoints.0.title"),
      desc: t("trustPoints.0.desc"),
    },
    {
      icon: <FiGlobe className="w-10 h-10 text-[#aa335f]" />,
      title: t("trustPoints.1.title"),
      desc: t("trustPoints.1.desc"),
    },
    {
      icon: <FiShield className="w-10 h-10 text-[#aa335f]" />,
      title: t("trustPoints.2.title"),
      desc: t("trustPoints.2.desc"),
    },
    {
      icon: <FiLock className="w-10 h-10 text-[#aa335f]" />,
      title: t("trustPoints.3.title"),
      desc: t("trustPoints.3.desc"),
    },
  ];

  return (
    <section
      className="py-16 bg-gradient-to-br from-gray-50 to-pink-50"
      id="why-donate"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Label */}
        <div className="inline-flex gap-2 items-center justify-center px-4 py-2 mb-4 bg-[#fce6ef] rounded-full text-[#aa335f] font-medium">
          <FiAward />
          <span>{t("label")}</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {t("heading")}{" "}
          <span className="text-[#aa335f]">{t("highlight")}</span>
        </h2>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          {t("description")}
        </p>

        {/* Trust Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trustPoints.map((point, index) => (
            <motion.div
              key={index}
              className="p-8 bg-white rounded-2xl shadow-lg transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="inline-flex items-center justify-center p-4 mb-6 rounded-2xl bg-[#fce6ef] group-hover:bg-[#f8d2e0] transition-colors duration-300">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {point.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{point.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex gap-3.5 items-center mb-6 md:mb-0">
              <div className="p-3 bg-[#fce6ef] rounded-full text-[#aa335f]">
                <FiHeart className="w-8 h-8" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-900">
                  {t("cta.title")}
                </h3>
                <p className="text-gray-600">{t("cta.desc")}</p>
              </div>
            </div>
            <Link href="/contact">
              <button className="flex items-center gap-2 justify-center px-6 py-3 bg-[#aa335f] text-white font-medium rounded-full hover:bg-[#8a234b] transition-colors duration-300 group">
                {t("cta.button")}
                <FiArrowRight className=" ltr:group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform duration-300" />
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyDonate;
