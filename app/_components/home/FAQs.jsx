"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import "../../../i18n";

const FAQs = () => {
  const { t } = useTranslation("home/FAQs");
  const [activeCategory, setActiveCategory] = useState("general");
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Get data safely
  const faqData = t("faqData", { returnObjects: true }) || {};
  const categories = t("categories", { returnObjects: true }) || [];

  return (
    <div className="bg-gradient-to-br from-blue-25 via-white to-indigo-25 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-[#821435] to-[#B62F5E] rounded-full shadow-lg mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("header.title")}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("header.subtitle")}
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {Array.isArray(categories) &&
            categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
                className={`flex items-center px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-[#821435] to-[#B62F5E] text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-50 hover:text-[#821435] shadow-md"
                }`}
              >
                <span className="mr-3 text-xl">{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
        </motion.div>

        {/* FAQ Items */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16 border border-gray-100">
          {Array.isArray(faqData[activeCategory]) &&
            faqData[activeCategory].map((item) => (
              <motion.div
                key={item.id}
                className="border-b border-gray-100 last:border-b-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-8 py-6 text-left focus:outline-none group hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 pr-4 group-hover:text-[#821435] transition-colors duration-300">
                      {item.question}
                    </h3>
                    <motion.div
                      className={`flex-shrink-0 ml-2 transform transition-transform duration-300 ${
                        openItems[item.id] ? "rotate-180" : ""
                      }`}
                      animate={{ rotate: openItems[item.id] ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="bg-gray-100 rounded-full p-2 group-hover:bg-[#821435] group-hover:text-white transition-colors duration-300">
                        <svg
                          className="w-5 h-5 text-gray-600 group-hover:text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </motion.div>
                  </div>
                  <AnimatePresence>
                    {openItems[item.id] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden mt-4"
                      >
                        <p className="text-gray-600 leading-relaxed pb-2">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            ))}
        </div>

        {/* Contact Support */}
        <motion.div
          className="relative bg-gradient-to-r from-[#821435] to-[#B62F5E] rounded-2xl shadow-2xl p-10 md:p-14 text-white text-center overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-white opacity-10"></div>
          <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-white opacity-10"></div>

          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-5">
              {t("support.title")}
            </h2>
            <p className="mb-7 max-w-2xl mx-auto text-lg opacity-95">
              {t("support.description")}
            </p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/contact">
                <button className="px-8 py-4 bg-white text-[#821435] font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1">
                  {t("support.button")}
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQs;
