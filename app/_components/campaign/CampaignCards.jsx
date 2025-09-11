"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaCheckCircle, FaCalendarAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const CampaignCard = () => {
  const { t } = useTranslation("campaigns/CampaignCard");

  const campaigns = [
    {
      id: 1,
      name: t("campaigns.0.name"),
      category: t("campaigns.0.category"),
      goal: 100000,
      raised: 65000,
      startDate: "2023-05-01",
      endDate: "2023-12-31",
      description: t("campaigns.0.description"),
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      name: t("campaigns.1.name"),
      category: t("campaigns.1.category"),
      goal: 100000,
      raised: 42000,
      startDate: "2023-06-15",
      endDate: "2023-11-30",
      description: t("campaigns.1.description"),
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 3,
      name: t("campaigns.2.name"),
      category: t("campaigns.2.category"),
      goal: 200000,
      raised: 176000,
      startDate: "2023-07-01",
      endDate: "2023-10-31",
      description: t("campaigns.2.description"),
      image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 4,
      name: t("campaigns.3.name"),
      category: t("campaigns.3.category"),
      goal: 80000,
      raised: 55000,
      startDate: "2023-08-01",
      endDate: "2023-12-15",
      description: t("campaigns.3.description"),
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 5,
      name: t("campaigns.4.name"),
      category: t("campaigns.4.category"),
      goal: 120000,
      raised: 90000,
      startDate: "2023-09-10",
      endDate: "2024-02-28",
      description: t("campaigns.4.description"),
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 6,
      name: t("campaigns.5.name"),
      category: t("campaigns.5.category"),
      goal: 120000,
      raised: 47000,
      startDate: "2023-09-01",
      endDate: "2024-02-28",
      description: t("campaigns.5.description"),
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 bg-[#F2EDE9]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-14 text-[#543D2E]"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {t("title")}
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {campaigns.map((campaign) => {
            const progress = Math.min(
              (campaign.raised / campaign.goal) * 100,
              100
            );
            const daysRemaining = Math.ceil(
              (new Date(campaign.endDate) - new Date()) /
              (1000 * 60 * 60 * 24)
            );

            return (
              <motion.div
                key={campaign.id}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 15px 30px rgba(0,0,0,0.2)",
                }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#E5DCD4] flex flex-col cursor-pointer"
              >
                {/* Image */}
                <div className="h-65 w-full relative overflow-hidden">
                  <img
                    src={campaign.image}
                    alt={campaign.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute top-3 right-3 bg-[#723134] text-white text-xs px-3 py-1 rounded-full font-medium">
                    {campaign.category}
                  </div>
                  {daysRemaining > 0 && (
                    <div className="absolute top-3 left-3 bg-[#543D2E] bg-opacity-90 text-white text-xs px-3 py-1 rounded-full">
                      {daysRemaining} {t("labels.daysLeft")}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 pt-1 flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold text-[#723134] mb-2">
                    {campaign.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">
                    {campaign.description}
                  </p>

                  <div className="mb-5 space-y-2 text-sm text-gray-700 my-auto">
                    <p className="flex items-center gap-2">
                      <FaBullseye className="text-[#723134]" />
                      {t("labels.goal")}: QAR {campaign.goal.toLocaleString()}
                    </p>
                    <p className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-600" />
                      {t("labels.raised")}: QAR {campaign.raised.toLocaleString()}
                    </p>
                    <p className="flex items-center gap-2">
                      <FaCalendarAlt className="text-[#543D2E]" />
                      {new Date(campaign.startDate).toLocaleDateString()} →{" "}
                      {new Date(campaign.endDate).toLocaleDateString()}
                    </p>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-auto">
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className="h-3 rounded-full bg-gradient-to-r from-[#723134] to-[#a84d51]"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${progress}%` }}
                        transition={{ duration: 1.5, delay: 0.3 }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </div>
                    <p className="mt-2 text-sm text-gray-600 text-right">
                      {progress.toFixed(1)}% {t("labels.funded")}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CampaignCard;