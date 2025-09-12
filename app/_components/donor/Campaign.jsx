"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Campaign = () => {
  const { t, i18n } = useTranslation("donor/Campaign");

  const compainAry = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1652858672796-960164bd632b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNoYXJpdHl8ZW58MHx8MHx8fDA%3D",
      name: t("campaigns.0.name"),
      desc: t("campaigns.0.desc"),
      target: "$10,000",
      raisedAmount: "$4,500",
    },
    {
      id: 2,
      img: "https://media.istockphoto.com/id/2171791945/photo/portrait-of-volunteers-during-donation-event-outdoors.webp?a=1&b=1&s=612x612&w=0&k=20&c=-dyAwuIFN4m8m4YxI-uTb7R29RqPn3aEndhTv4sBH_0=",
      name: t("campaigns.1.name"),
      desc: t("campaigns.1.desc"),
      target: "$8,000",
      raisedAmount: "$5,200",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1593113616828-6f22bca04804?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: t("campaigns.2.name"),
      desc: t("campaigns.2.desc"),
      target: "$15,000",
      raisedAmount: "$9,800",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hhcml0eXxlbnwwfHwwfHx8MA%3D%3D",
      name: t("campaigns.3.name"),
      desc: t("campaigns.3.desc"),
      target: "$12,000",
      raisedAmount: "$7,600",
    },
    {
      id: 5,
      img: "https://media.istockphoto.com/id/2171791945/photo/portrait-of-volunteers-during-donation-event-outdoors.webp?a=1&b=1&s=612x612&w=0&k=20&c=-dyAwuIFN4m8m4YxI-uTb7R29RqPn3aEndhTv4sBH_0=",
      name: t("campaigns.4.name"),
      desc: t("campaigns.4.desc"),
      target: "$20,000",
      raisedAmount: "$12,400",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1643321613219-6d50e1372c0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNoYXJpdHl8ZW58MHx8MHx8fDA%3D",
      name: t("campaigns.5.name"),
      desc: t("campaigns.5.desc"),
      target: "$25,000",
      raisedAmount: "$14,700",
    },
  ];

  return (
    <div className="py-10 px-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
        {t("title")}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {compainAry.map((item, index) => (
          <motion.div
            key={`${item.id}-${i18n.language}`}
            className="bg-white shadow-lg rounded-2xl overflow-hidden transform"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800">
                {item.name}
              </h2>
              <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>

              {/* Progress Section */}
              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-700">
                  <p>{t("labels.raised")}: {item.raisedAmount}</p>
                  <p>{t("labels.target")}: {item.target}</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{
                      width: `${(parseInt(item.raisedAmount.replace(/[^0-9]/g, "")) /
                          parseInt(item.target.replace(/[^0-9]/g, ""))) *
                        100
                        }%`,
                    }}
                  ></div>
                </div>
              </div>

              <Link href="/contact">
                <button className="mt-5 w-full bg-[#a22b56] text-white py-2 rounded-lg cursor-pointer font-medium hover:bg-[#ec538b] transition">
                  {t("labels.donateNow")}
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Campaign;