"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ConsultationForm from "../common/ConsultationForm";
import { FaHandHoldingHeart } from "react-icons/fa";
import { CheckCircle, CheckCircleIcon, ChevronLeft, ChevronRight, UsersIcon, Zap } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showConsultationModal, setShowConsultationModal] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const slides = [
    {
      title: "Transparent Charitable Giving",
      description:
        "Qatar's first transparent donation platform with blockchain tracking from donor to beneficiary.",
      ctaPrimary: "Donate Now", link: "/contact",
      ctaSecondary: "Consultation",
      icon: <CheckCircleIcon className="w-6 h-6" />,
    },
    {
      title: "Confidence in every contribution",
      description:
        "Every donation is tracked and verified. Complete transparency in real-time reporting and RACA oversight.",
      ctaPrimary: "Support a Cause", link: "/contact",
      ctaSecondary: "Consultation",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Make a Difference in Qatar",
      description:
        "Join thousands of donors helping communities across Qatar through verified, RACA-approved charities.",
      ctaPrimary: "View Campaigns", link: "/contact",
      ctaSecondary: "Consultation",
      icon: <UsersIcon className="w-6 h-6" />,
    },
  ];

  // Slide transition with fade effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        setIsVisible(true);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsVisible(true);
    }, 500);
  };

  const goToPrevSlide = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setIsVisible(true);
    }, 500);
  };

  const goToNextSlide = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setIsVisible(true);
    }, 500);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#723134] via-[#8a1538] to-[#543D2E] pt-10 ">
      <ConsultationForm
        isOpen={showConsultationModal}
        onClose={() => setShowConsultationModal(false)}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating circles */}
        <motion.div
          className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-[#F2EDE9]/10"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div
          className="absolute top-1/3 right-20 w-24 h-24 rounded-full bg-[#F2EDE9]/15"
          animate={{
            y: [0, 15, 0],
            x: [0, -15, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div
          className="absolute bottom-20 left-1/4 w-32 h-32 rounded-full bg-[#F2EDE9]/5"
          animate={{
            y: [0, -15, 0],
            x: [0, -10, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 grid-rows-6 h-full w-full gap-1">
            {Array.from({ length: 72 }).map((_, i) => (
              <div key={i} className="border border-white/20 rounded-sm"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative h-full w-full container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-7xl">
          {/* Text content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="transition-opacity duration-700"
            >
              {/* Trust badge */}
              <motion.div
                className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-8 border border-white/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="flex items-center justify-center w-8 h-8 bg-white/20 rounded-full mr-3">
                  {slides[currentSlide].icon}
                </div>
                <span className="text-sm font-medium text-white">
                  RACA Approved Platform
                </span>
              </motion.div>

              {/* Title and description */}
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-white/90 mb-10 max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                {slides[currentSlide].description}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Link href={slides[currentSlide].link}>
                  <motion.button
                    className="bg-white text-[#723134] hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {slides[currentSlide].ctaPrimary}
                  </motion.button>
                </Link>

                <motion.button
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-4 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 text-base"
                  onClick={() => setShowConsultationModal(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {slides[currentSlide].ctaSecondary}
                </motion.button>
              </motion.div>

              {/* Features list */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                {[
                  "Integrated with Sandi",
                  "Blockchain Transparency",
                  "Real-time Tracking",
                ].map((feature, i) => (
                  <motion.div
                    className="flex items-center text-white/90 text-sm"
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
                  >
                    <CheckCircle className="h-5 w-5 mr-2 text-white" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Visual element - Stylish Illustration with background image */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="relative w-full h-96 bg-[#723134]/20 backdrop-blur-xl rounded-3xl border-2 border-[#b9393f]/20 p-8 bg-cover bg-center overflow-hidden shadow-2xl"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1562709902-31c9a3b1ad5c?w=1200&auto=format&fit=crop&q=80')",
              }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#723134]/30 via-[#b9393f]/40 to-[#723134]/30 mix-blend-multiply"></div>

              {/* Floating decorative circles */}
              <motion.div
                className="absolute -top-6 -right-6 w-28 h-28 bg-[#F2EDE9]/30 rounded-full blur-2xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#b9393f]/40 rounded-full blur-3xl"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              ></motion.div>

              {/* Center Illustration */}
              <div className="w-full h-full flex items-center justify-center relative z-10">
                <div className="w-64 h-64 relative">
                  {/* Animated blockchain rings */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-4 border-[#F2EDE9]/20"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  ></motion.div>
                  <motion.div
                    className="absolute inset-6 rounded-full border-2 border-[#F2EDE9]/40"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  ></motion.div>
                  <motion.div
                    className="absolute inset-12 rounded-full border border-[#F2EDE9]/30"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  ></motion.div>

                  {/* Central glowing icon */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-[#723134] to-[#b9393f] rounded-full flex items-center justify-center shadow-xl shadow-[#723134]/50"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <FaHandHoldingHeart className="text-[#F2EDE9] text-4xl" />
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center space-x-4">
        {/* Previous button */}
        <motion.button
          onClick={goToPrevSlide}
          className="hidden bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition backdrop-blur-sm sm:flex items-center justify-center"
          aria-label="Previous slide"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-5 h-5" />
        </motion.button>

        {/* Indicator dots */}
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentSlide
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/70"
                }`}
              aria-label={`Go to slide ${index + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        {/* Next button */}
        <motion.button
          onClick={goToNextSlide}
          className="hidden bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition backdrop-blur-sm sm:flex items-center justify-center"
          aria-label="Next slide"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </div>
    </section>
  );
}