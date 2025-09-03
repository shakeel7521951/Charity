"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="py-20 bg-[#723134] text-white text-center">
      <motion.div
        className="max-w-4xl mx-auto px-6"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 text-[#F2EDE9]"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Be Part of the Change Today
        </motion.h2>
        <motion.p
          className="mb-8 text-lg md:text-xl leading-relaxed text-[#F2EDE9]"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Your contribution can bring hope to communities in need.
          Start supporting a campaign now and help us create a better tomorrow.
        </motion.p>
        <Link href='/contact' passHref>
          <motion.button
            className="px-8 py-4 bg-[#F2EDE9] text-[#723134] font-bold rounded-full shadow-lg hover:bg-[#e0d9d4] transition"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Donate Now
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
};

export default CTASection;