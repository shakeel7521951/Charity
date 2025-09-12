"use client";
import React from "react";
import { FaCreditCard } from "react-icons/fa6";
import { CiBank, CiWallet } from "react-icons/ci";
import { IoQrCode } from "react-icons/io5";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const PayOption = () => {
  const { t } = useTranslation("donor/PayOption");

  // Array of payment options
  const paymentMethods = [
    {
      icon: <FaCreditCard />,
      title: t("cards.0.title"),
      text: t("cards.0.text"),
    },
    {
      icon: <CiBank />,
      title: t("cards.1.title"),
      text: t("cards.1.text"),
    },
    {
      icon: <IoQrCode />,
      title: t("cards.2.title"),
      text: t("cards.2.text"),
    },
    {
      icon: <CiWallet />,
      title: t("cards.3.title"),
      text: t("cards.3.text"),
    },
  ];

  return (
    <div
      className="relative min-h-[70vh] bg-gray-100 bg-fixed bg-cover bg-center py-12 px-6"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1683140538884-07fb31428ca6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hhcml0eXxlbnwwfHwwfHx8MA%3D%3D')",
      }}
    >
      {/* Heading */}
      <h2 className="relative text-2xl sm:text-4xl font-bold text-white text-center z-10 mb-10">
        {t("heading")}
      </h2>

      <div className="absolute inset-0 bg-gradient-to-r from-[#A02B54]/20 to-[#e22869]/60"></div>

      {/* Payment cards */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {paymentMethods.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-4xl mb-4 text-[#A22B56]">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-4">{item.text}</p>

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="mt-auto px-6 py-2 bg-[#A22B56] text-white rounded-lg hover:bg-[#e94c85] transition"
              >
                {t("cta")}
              </motion.button>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PayOption;
