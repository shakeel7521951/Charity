"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation("campaigns/Testimonials");
  const testimonials = t("testimonials", { returnObjects: true });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-gray-100">
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
          className="grid md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((tItem, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transform transition-transform duration-300 hover:-translate-y-2"
              variants={itemVariants}
            >
              <div className="flex justify-center mb-4">
                <motion.img
                  src={tItem.image}
                  alt={tItem.name}
                  width={80}
                  height={80}
                  className="rounded-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
              <p className="text-gray-600 italic mb-4">"{tItem.feedback}"</p>
              <h4 className="font-semibold text-gray-800">{tItem.name}</h4>
              <p className="text-sm text-gray-500">{tItem.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
