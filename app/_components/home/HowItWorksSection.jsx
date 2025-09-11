"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const HowItWorksSection = () => {
  const { t } = useTranslation("home/HowItWorks");

  // Arrays with safety check
  const steps = t("steps", { returnObjects: true });
  const stepList = Array.isArray(steps) ? steps : [];

  const features = t("features", { returnObjects: true });
  const featureList = Array.isArray(features) ? features : [];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const stepVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, type: "spring", stiffness: 100 },
    },
  };

  const numberVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { duration: 0.5, type: "spring", stiffness: 150 },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, type: "spring", stiffness: 120 },
    },
  };

  return (
    <motion.section
      className="py-16 bg-gradient-to-b from-white to-[#f8f5f2]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex gap-x-2 items-center justify-center px-4 py-1.5 bg-[#8a1538]/10 rounded-full text-[#8a1538] font-medium text-sm mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
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
            {t("badge")}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#543D2E] mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-[#543D2E]/80">{t("subtitle")}</p>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {stepList.map((step, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center text-center"
              variants={stepVariants}
              whileHover={{ y: -5 }}
            >
              <div className="mb-6">
                <motion.div
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 relative shadow-lg ${index % 2 === 0
                      ? "bg-gradient-to-br from-[#8a1538] to-[#6c102c]"
                      : "bg-gradient-to-br from-[#543D2E] to-[#3e2c21]"
                    }`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* ✅ Inline SVG from JSON */}
                  <motion.div
                    variants={iconVariants}
                    dangerouslySetInnerHTML={{ __html: step.icon }}
                  />
                  <motion.div
                    className="absolute -top-3 -left-3 w-8 h-8 bg-white text-[#8a1538] rounded-full flex items-center justify-center font-bold border-2 border-[#8a1538] shadow-md"
                    variants={numberVariants}
                  >
                    {index + 1}
                  </motion.div>
                </motion.div>
                <h3 className="text-xl font-semibold text-[#543D2E] mb-2">
                  {step.title}
                </h3>
                <p className="text-[#543D2E]/80">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Information */}
        <motion.div
          className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-md border border-[#e5ddd5]"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold text-[#543D2E] mb-4">
                {t("additional.title")}
              </h3>
              <p className="text-[#543D2E]/80 mb-4">
                {t("additional.desc")}
              </p>
              <motion.ul
                className="space-y-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {featureList.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    variants={stepVariants}
                  >
                    <div className="flex gap-2.5 mt-0.5">
                      <div className="w-6 h-6 bg-[#8a1538]/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-[#8a1538]"
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
                      <span className="text-[#543D2E]">{item}</span>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-[#8a1538] to-[#543D2E] rounded-2xl flex items-center justify-center p-6 text-white text-center shadow-lg">
                <div>
                  <div className="text-5xl font-bold mb-2">100%</div>
                  <div className="text-lg font-medium">
                    {t("additional.box.title")}
                  </div>
                  <div className="text-sm opacity-80 mt-2">
                    {t("additional.box.subtitle")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link href="/contact">
            <button className="bg-[#8a1538] hover:bg-[#6c102c] text-white font-semibold py-3 px-10 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 active:scale-95">
              {t("cta")}
            </button>
          </Link>
          <p className="text-sm text-[#543D2E]/70 mt-4">{t("note")}</p>
        </div>
      </div>
    </motion.section>
  );
};

export default HowItWorksSection;
