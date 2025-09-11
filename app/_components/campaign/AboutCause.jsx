"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const AboutCause = () => {
  const { t } = useTranslation("campaigns/AboutCause");

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80"
            alt="Charity work"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {t("heading")}
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            {t("paragraph1")}
          </p>
          <p className="text-gray-600 leading-relaxed">
            {t("paragraph2")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCause;
