"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaHandsHelping, FaDonate, FaSmile } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const HowItWorks = () => {
  const { t } = useTranslation("campaigns/HowItWorks");

  const icons = [
    <FaHandsHelping className="text-5xl text-indigo-600" />,
    <FaDonate className="text-5xl text-green-600" />,
    <FaSmile className="text-5xl text-yellow-500" />
  ];

  const steps = t("steps", { returnObjects: true });
  const stepsList = Array.isArray(steps) ? steps : [];

  // Animation variants (for entry animation only)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-12"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {t("heading")}
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stepsList.map((step, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-2xl shadow-md bg-gray-50 hover:shadow-xl transform transition-transform duration-300 hover:-translate-y-2"
              variants={itemVariants}
            >
              <div className="flex justify-center mb-6">{icons[index]}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
