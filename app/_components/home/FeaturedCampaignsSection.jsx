"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const FeaturedCampaignsSection = () => {
  const { t } = useTranslation("home/FeaturedCampaigns");

  // ✅ Load campaigns from translation JSON
  const campaigns = t("campaigns", { returnObjects: true });
  const campaignList = Array.isArray(campaigns) ? campaigns : [];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-QA", {
      style: "currency",
      currency: "QAR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const calculatePercentage = (raised, goal) => {
    return Math.min(100, Math.round((raised / goal) * 100));
  };

  return (
    <section className="mb-6 bg-gradient-to-b from-[#f8f5f2] to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 bg-[#8a1538]/10 rounded-full text-[#8a1538] font-medium text-sm mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {t("sectionBadge")}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#543D2E] mb-4">
            {t("sectionTitle")}
          </h2>
          <p className="text-lg text-[#543D2E]/80">{t("sectionDesc")}</p>
        </motion.div>

        {/* Campaigns Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {campaignList.map((campaign, index) => (
            <motion.div
              className="rounded-2xl"
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -8, boxShadow: "0 12px 30px rgba(0,0,0,0.15)" }}
            >
              <div className="bg-red-50 rounded-2xl shadow-md overflow-hidden border border-[#e5ddd5] group">
                {/* Campaign Image with Overlay */}
                <div className="h-48 relative overflow-hidden">
                  <motion.img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 ease-out group-hover:scale-105"
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                        campaign.category === "Health"
                          ? "bg-red-100 text-red-800"
                          : campaign.category === "Education"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {campaign.category}
                    </span>
                  </div>

                  {campaign.verified && (
                    <div className="absolute top-4 right-4 bg-white rounded-full p-1.5 shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-[#8a1538]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Campaign Content */}
                <div className="p-6">
                  <span className="text-sm font-medium text-[#543D2E]">
                    {campaign.charity}
                  </span>
                  <h3 className="text-xl font-semibold text-[#543D2E] mb-3 leading-tight">
                    {campaign.title}
                  </h3>
                  <p className="text-[#543D2E]/80 mb-5">
                    {campaign.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="mb-5">
                    <div className="flex justify-between text-sm text-[#543D2E] mb-2">
                      <span className="font-medium">
                        {calculatePercentage(campaign.raised, campaign.goal)}%
                        funded
                      </span>
                      <span className="font-medium">
                        {formatCurrency(campaign.raised)}
                      </span>
                    </div>
                    <div className="w-full bg-[#e5ddd5] rounded-full h-2.5">
                      <motion.div
                        className="h-3 rounded-full bg-gradient-to-r from-[#723134] to-[#a84d51]"
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${calculatePercentage(
                            campaign.raised,
                            campaign.goal
                          )}%`,
                        }}
                        transition={{ duration: 1.5, delay: 0.3 }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </div>
                    <div className="flex justify-between text-xs text-[#543D2E]/70 mt-1">
                      <span>Raised</span>
                      <span>Goal: {formatCurrency(campaign.goal)}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full bg-[#8a1538] hover:bg-[#6c102c] text-white font-semibold py-2.5 px-4 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
                  >
                    {t("donateButton")}
                  </motion.button>

                  <div className="mt-4 flex items-center justify-center text-xs text-[#543D2E]/70">
                    <div className="w-4 h-4 bg-[#8a1538]/10 rounded-full flex items-center justify-center mr-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-[#8a1538]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>{t("sandiBadge")}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link href="/campaign">
            <button className="bg-white hover:bg-[#f8f5f2] text-[#8a1538] font-semibold py-2.5 px-10 rounded-lg border-2 border-[#8a1538] transition duration-300 shadow-md hover:shadow-lg">
              {t("viewAllButton")}
            </button>
          </Link>
          <p className="text-sm text-[#543D2E]/70 mt-4">
            {t("viewAllDesc")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCampaignsSection;
