"use client";
import { motion } from "framer-motion";

const TrustIndicatorBar = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
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

  const statVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { rotate: -180, opacity: 0 },
    visible: {
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    }
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
        <motion.div 
          className="text-center mb-10"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#543D2E] mb-3">Trusted by Qatar's Charitable Community</h2>
          <p className="text-[#8a1538] font-medium">Fully integrated with Sandi for transparent, regulated charitable giving</p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Official Partnerships */}
          <motion.div 
            className="bg-white rounded-xl p-6 shadow-md border border-[#e5ddd5] flex flex-col items-center"
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="text-center mb-5">
              <h3 className="font-semibold text-[#543D2E] mb-2">Official Partnerships</h3>
              <motion.div 
                className="h-1 w-12 bg-[#8a1538] mx-auto mb-4"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
              />
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <motion.div 
                className="flex flex-col items-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#8a1538] to-[#6c102c] rounded-xl flex items-center justify-center text-white font-bold text-xs shadow-md">
                  RACA
                </div>
                <span className="text-xs text-[#543D2E] mt-2 font-medium">Regulatory Body</span>
              </motion.div>
              
              <motion.div 
                className="h-12 w-px bg-[#e5ddd5] hidden md:block"
                initial={{ height: 0 }}
                whileInView={{ height: 48 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.5 }}
              />
              <motion.div 
                className="w-12 h-px bg-[#e5ddd5] md:hidden"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.5 }}
              />
              
              <motion.div 
                className="flex flex-col items-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#543D2E] to-[#3e2c21] rounded-xl flex items-center justify-center text-white font-bold text-xs text-center shadow-md">
                  SANDI
                </div>
                <span className="text-xs text-[#543D2E] mt-2 font-medium">National Platform</span>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Impact Statistics */}
          <motion.div 
            className="bg-white rounded-xl p-6 shadow-md border border-[#e5ddd5]"
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="text-center mb-5">
              <h3 className="font-semibold text-[#543D2E] mb-2">Our Impact</h3>
              <motion.div 
                className="h-1 w-12 bg-[#8a1538] mx-auto mb-4"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "42+", label: "Verified Charities" },
                { value: "12.4M+", label: "Donations Raised" },
                { value: "5,241+", label: "Families Helped" },
                { value: "100%", label: "Compliance" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  variants={statVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <motion.div 
                    className="text-2xl md:text-3xl font-bold text-[#8a1538]"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + index * 0.1, type: "spring", stiffness: 120 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-xs text-[#543D2E] mt-1 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Security & Trust */}
          <motion.div 
            className="bg-white rounded-xl p-6 shadow-md border border-[#e5ddd5]"
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="text-center mb-5">
              <h3 className="font-semibold text-[#543D2E] mb-2">Security & Trust</h3>
              <motion.div 
                className="h-1 w-12 bg-[#8a1538] mx-auto mb-4"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { 
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8a1538]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  ), 
                  label: "Secure" 
                },
                { 
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8a1538]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ), 
                  label: "Verified" 
                },
                { 
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8a1538]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ), 
                  label: "Transparent" 
                },
                { 
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8a1538]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ), 
                  label: "Compliant" 
                }
              ].map((item, index) => (
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
                    {item.icon}
                  </motion.div>
                  <span className="text-xs text-[#543D2E] mt-2 font-medium text-center">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
        
        {/* Additional Trust Elements */}
        <motion.div 
          className="mt-10 pt-8 border-t border-[#e5ddd5] flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <motion.div 
            className="flex items-center space-x-2 text-sm text-[#543D2E] font-medium"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <motion.svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 text-[#8a1538]" 
              viewBox="0 0 20 20" 
              fill="currentColor"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.5, type: "spring" }}
            >
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </motion.svg>
            <span>100% compliant with Qatari charitable regulations</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center space-x-4"
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <motion.div 
              className="flex items-center space-x-2 bg-[#f8f5f2] px-3 py-1 rounded-lg border border-[#e5ddd5]"
              whileHover={{ y: -2, boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="w-5 h-5 bg-[#543D2E] rounded flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1, type: "spring" }}
              >
                <span className="text-xs font-bold text-white">SSL</span>
              </motion.div>
              <span className="text-xs text-[#543D2E]">Secure Encryption</span>
            </motion.div>
            
            <motion.div 
              className="h-6 w-px bg-[#e5ddd5]"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1, duration: 0.3 }}
            />
            
            <motion.div 
              className="flex items-center space-x-2 bg-[#f8f5f2] px-3 py-1 rounded-lg border border-[#e5ddd5]"
              whileHover={{ y: -2, boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.2 }}
            >
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 text-[#8a1538]" 
                viewBox="0 0 20 20" 
                fill="currentColor"
                initial={{ scale: 0, rotate: 180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
              >
                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.2 6.5 10.266a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
              </motion.svg>
              <span className="text-xs text-[#543D2E]">Blockchain Verified</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TrustIndicatorBar;