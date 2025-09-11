"use client";
import { FaHandsHelping } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function CampaignHeader() {
  const { t } = useTranslation("campaigns/CampaignHeader");

  return (
    <div className="relative w-full h-[600px] md:h-[90vh] overflow-hidden shadow-lg">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1400&q=80"
        alt="Charity Campaign"
        className="absolute w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute w-full h-full bg-[#723134]/80 flex items-center justify-center">
        <div className="text-center text-white px-6">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <FaHandsHelping className="text-5xl md:text-6xl mx-auto mb-4 text-[#F2EDE9]" />
          </motion.div>

          <motion.h1
            className="text-3xl md:text-5xl font-bold"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            {t("heading")}
          </motion.h1>

          <motion.p
            className="mt-3 text-lg md:text-xl text-[#F2EDE9] max-w-2xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            {t("subtext")}
          </motion.p>
        </div>
      </div>
    </div>
  );
}
