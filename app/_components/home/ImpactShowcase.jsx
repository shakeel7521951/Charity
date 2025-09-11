"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import "../../../i18n";
import ConsultationForm from "../common/ConsultationForm";

const ImpactShowcase = () => {
  const { t } = useTranslation("home/ImpactShowcase");
  const [activeTab, setActiveTab] = useState("all");
  const [showConsultationModal, setShowConsultationModal] = useState(false);

  // Load translation arrays safely
  const stats = t("stats", { returnObjects: true });
  const features = t("features", { returnObjects: true });
  const userStories = t("userStories", { returnObjects: true });
  const tabsData = t("tabs", { returnObjects: true });
  const tabs = Array.isArray(tabsData) ? tabsData : [];

  const filteredFeatures =
    activeTab === "all"
      ? features
      : features.filter((feature) => feature.category === activeTab);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const statVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.section
      className="py-20 bg-gradient-to-br from-[#F0EBE6] relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-72 bg-[#821435] opacity-5"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#e992ac] rounded-full opacity-5 translate-x-1/2 translate-y-1/2"></div>

      <ConsultationForm
        isOpen={showConsultationModal}
        onClose={() => setShowConsultationModal(false)}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div className="text-center mb-16">
          <motion.span className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-[#821435] bg-[#8214351d] rounded-full">
            {t("header.tag")}
          </motion.span>
          <motion.h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t("header.title")}
          </motion.h2>
          <motion.p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("header.subtitle")}
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {Array.isArray(stats) &&
            stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition"
                variants={statVariants}
              >
                <div className="text-4xl font-bold text-[#821435] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-800 font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500">{stat.trend}</div>
              </motion.div>
            ))}
        </motion.div>

        {/* Features with Tabs */}
        <motion.div className="mb-20">
          <motion.div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              {t("featuresHeader.title")}
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("featuresHeader.subtitle")}
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                className={`px-5 py-2 rounded-full text-sm font-medium transition ${activeTab === tab.id
                    ? "bg-[#821435] text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Features */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeTab}
          >
            {Array.isArray(filteredFeatures) &&
              filteredFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:-translate-y-2 transition"
                  variants={featureVariants}
                >
                  <div className="text-[#821435] mb-4 flex justify-center">
                    {/* Keep icons inline */}
                    <span dangerouslySetInnerHTML={{ __html: feature.icon }} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
          </motion.div>
        </motion.div>

        {/* Testimonials */}
        <motion.div className="mb-16">
          <motion.div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              {t("testimonialsHeader.title")}
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("testimonialsHeader.subtitle")}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            {Array.isArray(userStories) &&
              userStories.map((story, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
                  variants={itemVariants}
                >
                  <div className="flex items-center mb-4 gap-x-3">
                    <img
                      src={story.image}
                      alt={story.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {story.author}
                      </h4>
                      <p className="text-sm text-[#821435]">{story.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{story.quote}"</p>
                </motion.div>
              ))}
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            {t("cta.title")}
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/campaign">
              <button className="px-8 py-3 bg-[#821435] text-white font-semibold rounded-lg shadow-md hover:scale-105 transition">
                {t("cta.register")}
              </button>
            </Link>
            <button
              onClick={() => setShowConsultationModal(true)}
              className="px-8 py-3 bg-white text-[#821435] border border-[#821435] font-semibold rounded-lg shadow-md hover:bg-[#8214351b] hover:scale-105 transition"
            >
              {t("cta.donate")}
            </button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ImpactShowcase;
