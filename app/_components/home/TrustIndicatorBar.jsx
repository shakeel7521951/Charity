"use client";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../../../i18n";

const TrustIndicatorBar = () => {
  const { t } = useTranslation("home/TrustIndicatorBar");


  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const statVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const iconVariants = {
    hidden: { rotate: -180, opacity: 0 },
    visible: { rotate: 0, opacity: 1, transition: { duration: 0.6, ease: "backOut" } }
  };

  return (
    <motion.div
      className="w-full bg-gradient-to-r from-[#f8f5f2] to-[#f0ebe6] py-12 md:py-16 border-t border-b border-[#e5ddd5]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.div
          className="text-center mb-10"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#543D2E] mb-3">
            {t("title")}
          </h2>
          <p className="text-[#8a1538] font-medium">{t("subtitle")}</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Partnerships */}
          <motion.div
            className="bg-white rounded-xl p-6 shadow-md border border-[#e5ddd5] flex flex-col items-center"
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="text-center mb-5">
              <h3 className="font-semibold text-[#543D2E] mb-2">{t("partnerships.heading")}</h3>
              <motion.div
                className="h-1 w-12 bg-[#8a1538] mx-auto mb-4"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
              />
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <motion.div className="flex flex-col items-center" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.6, type: "spring", stiffness: 100 }}>
                <div className="w-16 h-16 bg-gradient-to-br from-[#8a1538] to-[#6c102c] rounded-xl flex items-center justify-center text-white font-bold text-xs shadow-md">
                  {t("partnerships.raca.title")}
                </div>
                <span className="text-xs text-[#543D2E] mt-2 font-medium">{t("partnerships.raca.desc")}</span>
              </motion.div>
              <motion.div className="h-12 w-px bg-[#e5ddd5] hidden md:block" initial={{ height: 0 }} whileInView={{ height: 48 }} viewport={{ once: true }} transition={{ delay: 0.7, duration: 0.5 }} />
              <motion.div className="w-12 h-px bg-[#e5ddd5] md:hidden" initial={{ width: 0 }} whileInView={{ width: 48 }} viewport={{ once: true }} transition={{ delay: 0.7, duration: 0.5 }} />
              <motion.div className="flex flex-col items-center" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.8, type: "spring", stiffness: 100 }}>
                <div className="w-16 h-16 bg-gradient-to-br from-[#543D2E] to-[#3e2c21] rounded-xl flex items-center justify-center text-white font-bold text-xs text-center shadow-md">
                  {t("partnerships.sandi.title")}
                </div>
                <span className="text-xs text-[#543D2E] mt-2 font-medium">{t("partnerships.sandi.desc")}</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Impact */}
          <motion.div className="bg-white rounded-xl p-6 shadow-md border border-[#e5ddd5]" variants={itemVariants} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
            <div className="text-center mb-5">
              <h3 className="font-semibold text-[#543D2E] mb-2">{t("impact.heading")}</h3>
              <motion.div className="h-1 w-12 bg-[#8a1538] mx-auto mb-4" initial={{ width: 0 }} whileInView={{ width: 48 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.5 }} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "42+", label: t("impact.stats.verifiedCharities") },
                { value: "12.4M+", label: t("impact.stats.donationsRaised") },
                { value: "5,241+", label: t("impact.stats.familiesHelped") },
                { value: "100%", label: t("impact.stats.compliance") }
              ].map((stat, index) => (
                <motion.div key={index} className="text-center" variants={statVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.6 + index * 0.1 }}>
                  <motion.div className="text-2xl md:text-3xl font-bold text-[#8a1538]" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.7 + index * 0.1, type: "spring", stiffness: 120 }}>
                    {stat.value}
                  </motion.div>
                  <div className="text-xs text-[#543D2E] mt-1 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Security */}
          <motion.div className="bg-white rounded-xl p-6 shadow-md border border-[#e5ddd5]" variants={itemVariants} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
            <div className="text-center mb-5">
              <h3 className="font-semibold text-[#543D2E] mb-2">{t("security.heading")}</h3>
              <motion.div className="h-1 w-12 bg-[#8a1538] mx-auto mb-4" initial={{ width: 0 }} whileInView={{ width: 48 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.5 }} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["secure", "verified", "transparent", "compliant"].map((key, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center"
                  variants={iconVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-[#f8f5f2] rounded-full flex items-center justify-center border border-[#e5ddd5]"
                    whileHover={{ scale: 1.1, backgroundColor: "#f0e6e6" }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Inline SVGs directly */}
                    {key === "secure" && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8a1538]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    )}
                    {key === "verified" && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8a1538]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    )}
                    {key === "transparent" && (
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8a1538]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    )}
                    {key === "compliant" && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8a1538]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    )}
                  </motion.div>
                  <span className="text-xs text-[#543D2E] mt-2 font-medium text-center">
                    {t(`security.items.${key}`)}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div className="mt-10 pt-8 border-t border-[#e5ddd5] flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.8, duration: 0.5 }}>
          <motion.div className="flex items-center space-x-2 text-sm text-[#543D2E] font-medium" initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.9, duration: 0.5 }}>
            <motion.svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#8a1538]" viewBox="0 0 20 20" fill="currentColor" initial={{ scale: 0, rotate: -180 }} whileInView={{ scale: 1, rotate: 0 }} viewport={{ once: true }} transition={{ delay: 1, duration: 0.5, type: "spring" }}>
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </motion.svg>
            <span>{t("footer.regulation")}</span>
          </motion.div>
          <motion.div className="flex items-center space-x-4" initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.9, duration: 0.5 }}>
            <motion.div className="flex items-center space-x-2 bg-[#f8f5f2] px-3 py-1 rounded-lg border border-[#e5ddd5]" whileHover={{ y: -2, boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }} transition={{ duration: 0.2 }}>
              <motion.div className="w-5 h-5 bg-[#543D2E] rounded flex items-center justify-center" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 1, type: "spring" }}>
                <span className="text-xs font-bold text-white">SSL</span>
              </motion.div>
              <span className="text-xs text-[#543D2E]">{t("footer.ssl")}</span>
            </motion.div>
            <motion.div className="h-6 w-px bg-[#e5ddd5]" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ delay: 1.1, duration: 0.3 }} />
            <motion.div className="flex items-center space-x-2 bg-[#f8f5f2] px-3 py-1 rounded-lg border border-[#e5ddd5]" whileHover={{ y: -2, boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }} transition={{ duration: 0.2 }}>
              {/* Keep Blockchain Icon */}
              <span className="text-xs text-[#543D2E]">{t("footer.blockchain")}</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TrustIndicatorBar;
