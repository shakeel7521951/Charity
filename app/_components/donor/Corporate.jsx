"use client";

import React from "react";
import { FaBuilding, FaHandshake, FaChartLine } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Corporate = () => {
  const { t } = useTranslation("donor/Corporate");

  const cards = [
    {
      icon: <FaHandshake className="text-[#aa335f] text-2xl" />,
      title: t("cards.0.title"),
      text: t("cards.0.text"),
    },
    {
      icon: <FaChartLine className="text-[#aa335f] text-2xl" />,
      title: t("cards.1.title"),
      text: t("cards.1.text"),
    },
    {
      icon: <FaBuilding className="text-[#aa335f] text-2xl" />,
      title: t("cards.2.title"),
      text: t("cards.2.text"),
    },
  ];

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            {t("heading")}
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        {/* Sponsorship Opportunities */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-pink-100 mb-5">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600">{card.text}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-[#aa335f] text-white font-medium rounded-full shadow hover:bg-[#922b52] transition">
            {t("cta")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Corporate;
