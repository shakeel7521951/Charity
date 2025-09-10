"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const PlatformForEveryone = () => {
  const { t } = useTranslation("home/PlatformForEveryone");

  // Safe arrays
  const userTypes = t("userTypes", { returnObjects: true });
  const userTypeList = Array.isArray(userTypes) ? userTypes : [];

  const integrationPoints = t("integration.points", { returnObjects: true });
  const integrationList = Array.isArray(integrationPoints) ? integrationPoints : [];

  const isRole = (role, ...matches) => {
    return matches.includes(role);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#8A1538] rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t("title.before")}{" "}
            <span className="text-[#8A1538]">{t("title.highlight")}</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* User Type Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {userTypeList.map((user, index) => (
            <motion.div
              key={index}
              className="relative bg-white flex flex-col rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group "
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Decorative Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 rotate-45 transform origin-bottom-left bg-gradient-to-br from-[#8A1538]/10 to-transparent"></div>
              </div>

              {/* Icon */}
              <motion.div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${user.accentColor}15` }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div style={{ color: user.accentColor }}>
                  {/* Inline SVGs */}
                  {isRole(user.role, "Donors", "المتبرعون") && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>

                  )}
                  {isRole(user.role, "Charities", "الجمعيات الخيرية") && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  )}
                  {isRole(user.role, "Authority (RACA)", "الجهة التنظيمية (رَقابة)") && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  )}
                </div>
              </motion.div>

              {/* Title + Description */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {user.role}
              </h3>
              <p className="text-gray-600 mb-7 leading-relaxed">
                {user.description}
              </p>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {Array.isArray(user.features) &&
                  user.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start flex-grow"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                    >
                      <div className="flex gap-2.5 mt-0.5">
                        <div
                          className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: `${user.accentColor}20` }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill={user.accentColor}
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    </motion.li>
                  ))}
              </ul>

              {/* CTA */}
              <motion.button
                className="w-full py-2.5 px-6 rounded-xl font-semibold transition-all duration-300 hover:opacity-90 hover:shadow-md group-hover:-translate-y-0.5 mt-auto"
                style={{ backgroundColor: user.accentColor, color: "white" }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {user.cta}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Integration */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-[#8A1538] to-[#6A0F2A] rounded-2xl p-10 md:p-14 text-white overflow-hidden relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 right-0 w-full h-full opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="smallGrid"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 20 0 L 0 0 0 20"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#smallGrid)" />
            </svg>
          </div>

          <div className="flex flex-col md:flex-row items-center relative z-10">
            <motion.div
              className="md:w-2/3 mb-8 md:mb-0 md:pr-10"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-sm font-medium mb-5">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                {t("integration.badge")}
              </div>
              <h3 className="text-3xl font-bold mb-5">
                {t("integration.title")}
              </h3>
              <p className="mb-6 text-lg opacity-95 leading-relaxed">
                {t("integration.description")}
              </p>
              <ul className="space-y-4">
                {integrationList.map((point, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.2 }}
                  >
                    <div className="flex gap-2.5 mt-0.5">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-[#8A1538]"
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
                      <span className="text-lg">{point}</span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="md:w-1/3 flex justify-center"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
                <div className="text-5xl font-bold mb-2">
                  {t("integration.stats.value")}
                </div>
                <div className="text-xl font-medium mb-1">
                  {t("integration.stats.label")}
                </div>
                <div className="text-sm opacity-90 mt-2">
                  {t("integration.stats.sub")}
                </div>
                <div className="mt-6 w-full bg-white/20 rounded-full h-2.5">
                  <motion.div
                    className="bg-white h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformForEveryone;
