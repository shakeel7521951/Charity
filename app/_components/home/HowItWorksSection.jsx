"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

const HowItWorksSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const stepVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const numberVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 150
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 120
      }
    }
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
          <motion.div
            className="inline-flex items-center justify-center px-4 py-1.5 bg-[#8a1538]/10 rounded-full text-[#8a1538] font-medium text-sm mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              initial={{ rotate: -180, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </motion.svg>
            Transparent Process
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#543D2E] mb-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            How Your Donation Makes an Impact
          </motion.h2>
          <motion.p
            className="text-lg text-[#543D2E]/80"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Our platform ensures complete transparency from donation to distribution, with full integration to Qatar's Sandi system
          </motion.p>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Step 1 */}
          <motion.div
            className="relative flex flex-col items-center text-center"
            variants={stepVariants}
            whileHover={{ y: -5 }}
          >
            <div className="mb-6">
              <motion.div
                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#8a1538] to-[#6c102c] flex items-center justify-center mx-auto mb-4 relative shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  variants={iconVariants}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM9.5 9.5V11m0 2h.01M17 9.5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </motion.svg>
                <motion.div
                  className="absolute -top-3 -left-3 w-8 h-8 bg-white text-[#8a1538] rounded-full flex items-center justify-center font-bold border-2 border-[#8a1538] shadow-md"
                  variants={numberVariants}
                >
                  1
                </motion.div>
              </motion.div>
              <motion.h3
                className="text-xl font-semibold text-[#543D2E] mb-2"
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Choose a Verified Campaign
              </motion.h3>
              <motion.p
                className="text-[#543D2E]/80"
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Browse RACA-approved campaigns from trusted charities in Qatar
              </motion.p>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            className="relative flex flex-col items-center text-center"
            variants={stepVariants}
            whileHover={{ y: -5 }}
          >
            <div className="mb-6">
              <motion.div
                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#543D2E] to-[#3e2c21] flex items-center justify-center mx-auto mb-4 relative shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  variants={iconVariants}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </motion.svg>
                <motion.div
                  className="absolute -top-3 -left-3 w-8 h-8 bg-white text-[#543D2E] rounded-full flex items-center justify-center font-bold border-2 border-[#543D2E] shadow-md"
                  variants={numberVariants}
                >
                  2
                </motion.div>
              </motion.div>
              <motion.h3
                className="text-xl font-semibold text-[#543D2E] mb-2"
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Donate Securely
              </motion.h3>
              <motion.p
                className="text-[#543D2E]/80"
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Give easily via card, bank transfer, or digital wallet with encryption
              </motion.p>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            className="flex flex-col items-center text-center"
            variants={stepVariants}
            whileHover={{ y: -5 }}
          >
            <div className="mb-6">
              <motion.div
                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#8a1538] to-[#6c102c] flex items-center justify-center mx-auto mb-4 relative shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  variants={iconVariants}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </motion.svg>
                <motion.div
                  className="absolute -top-3 -left-3 w-8 h-8 bg-white text-[#8a1538] rounded-full flex items-center justify-center font-bold border-2 border-[#8a1538] shadow-md"
                  variants={numberVariants}
                >
                  3
                </motion.div>
              </motion.div>
              <motion.h3
                className="text-xl font-semibold text-[#543D2E] mb-2"
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Track Your Impact
              </motion.h3>
              <motion.p
                className="text-[#543D2E]/80"
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Receive real-time updates on how your donation is being used
              </motion.p>
            </div>
          </motion.div>
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
              <motion.h3
                className="text-2xl font-bold text-[#543D2E] mb-4"
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                Complete Transparency with Sandi Integration
              </motion.h3>
              <motion.p
                className="text-[#543D2E]/80 mb-4"
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                Our platform uses blockchain technology to create an immutable record of every transaction,
                ensuring complete transparency from donor to beneficiary while integrating with Qatar's national Sandi platform.
              </motion.p>
              <motion.ul
                className="space-y-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  "Integrated with Sandi to prevent duplicate aid distribution",
                  "RACA approved and monitored campaigns with full oversight",
                  "Regular impact reports with photos, videos, and beneficiary stories",
                  "Blockchain-verified transaction records for complete auditability"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    variants={itemVariants}
                  >
                    <motion.div
                      className="w-6 h-6 bg-[#8a1538]/10 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5"
                      whileHover={{ scale: 1.1, backgroundColor: "#8a1538", color: "white" }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-[#8a1538]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.9 + index * 0.1, type: "spring" }}
                      >
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </motion.svg>
                    </motion.div>
                    <span className="text-[#543D2E]">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
            <motion.div
              className="md:w-1/3 flex justify-center"
              initial={{ scale: 0, rotate: 180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.6, type: "spring" }}
            >
              <div className="w-64 h-64 bg-gradient-to-br from-[#8a1538] to-[#543D2E] rounded-2xl flex items-center justify-center p-6 text-white text-center shadow-lg">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  <motion.div
                    className="text-5xl font-bold mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.3, type: "spring", stiffness: 120 }}
                  >
                    100%
                  </motion.div>
                  <motion.div
                    className="text-lg font-medium"
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.4, duration: 0.5 }}
                  >
                    Transparent Donation Tracking
                  </motion.div>
                  <motion.div
                    className="text-sm opacity-80 mt-2"
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                  >
                    From donor to beneficiary
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <Link href='/contact'>
            <button
              className="bg-[#8a1538] hover:bg-[#6c102c] text-white font-semibold py-3 px-10 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 active:scale-95"
            >
              Start Donating Now
            </button>
          </Link>

          <motion.p
            className="text-sm text-[#543D2E]/70 mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.3, duration: 0.5 }}
          >
            All donations are processed securely and are tax-deductible in Qatar
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HowItWorksSection;