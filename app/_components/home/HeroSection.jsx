"use client";
import { useState, useEffect } from "react";
import ConsultationForm from "../common/ConsultationForm";
import { FaHandHoldingHeart } from "react-icons/fa";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showConsultationModal, setShowConsultationModal] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const slides = [
    {
      title: "Transparent Charitable Giving",
      description:
        "Qatar's first transparent donation platform with blockchain tracking from donor to beneficiary.",
      ctaPrimary: "Donate Now",
      ctaSecondary: "Consultation",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
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
      ),
    },
    {
      title: "Give with Confidence",
      description:
        "Every donation is tracked and verified. Complete transparency in real-time reporting and RACA oversight.",
      ctaPrimary: "Support a Cause",
      ctaSecondary: "Consultation",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
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
      ),
    },
    {
      title: "Make a Difference in Qatar",
      description:
        "Join thousands of donors helping communities across Qatar through verified, RACA-approved charities.",
      ctaPrimary: "View Campaigns",
      ctaSecondary: "Consultation",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
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
      ),
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
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#723134] via-[#8a1538] to-[#543D2E] pt-10">
      <ConsultationForm
        isOpen={showConsultationModal}
        onClose={() => setShowConsultationModal(false)}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating circles */}
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-[#F2EDE9]/10 animate-float-1"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 rounded-full bg-[#F2EDE9]/15 animate-float-2"></div>
        <div className="absolute bottom-20 left-1/4 w-32 h-32 rounded-full bg-[#F2EDE9]/5 animate-float-3"></div>

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
          <div
            className={`transition-opacity duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Trust badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-8 border border-white/20">
              <div className="flex items-center justify-center w-8 h-8 bg-white/20 rounded-full mr-3">
                {slides[currentSlide].icon}
              </div>
              <span className="text-sm font-medium text-white">
                RACA Approved Platform
              </span>
            </div>

            {/* Title and description */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-lg leading-relaxed">
              {slides[currentSlide].description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button className="bg-white text-[#723134] hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-base">
                {slides[currentSlide].ctaPrimary}
              </button>
              <button
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-4 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 text-base"
                onClick={() => setShowConsultationModal(true)}
              >
                {slides[currentSlide].ctaSecondary}
              </button>
            </div>

            {/* Features list */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                "Integrated with Sandi",
                "Blockchain Transparency",
                "Real-time Tracking",
              ].map((feature, i) => (
                <div
                  className="flex items-center text-white/90 text-sm"
                  key={i}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual element - Illustration with background image */}
<div className="relative hidden lg:block ">
  <div
    className="relative w-full h-96 bg-[#723134]/10 backdrop-blur-md rounded-3xl border border-white/20 p-8 bg-cover bg-center overflow-hidden"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1562709902-31c9a3b1ad5c?w=1200&auto=format&fit=crop&q=80')",
    }}
  >
    {/* Decorative circles */}
    <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#F2EDE9] rounded-full opacity-20"></div>
    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#723134] rounded-full opacity-30"></div>

    {/* Illustration overlay */}
    <div className="w-full h-full flex items-center justify-center relative z-10">
      <div className="w-64 h-64 relative">
        {/* Blockchain visualization */}
        <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-pulse"></div>
        <div className="absolute inset-8 rounded-full border-2 border-white/20 animate-pulse delay-300"></div>

        {/* Central charity icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#723134] rounded-full flex items-center justify-center shadow-lg">
          <FaHandHoldingHeart className="text-[#F2EDE9] text-3xl" />
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>

      {/* Navigation controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center space-x-4">
        {/* Previous button */}
        <button
          onClick={goToPrevSlide}
          className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition backdrop-blur-sm flex items-center justify-center"
          aria-label="Previous slide"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Indicator dots */}
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={goToNextSlide}
          className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition backdrop-blur-sm flex items-center justify-center"
          aria-label="Next slide"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes float-1 {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        @keyframes float-2 {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(15px) translateX(-15px);
          }
        }
        @keyframes float-3 {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-15px) translateX(-10px);
          }
        }
        .animate-float-1 {
          animation: float-1 10s ease-in-out infinite;
        }
        .animate-float-2 {
          animation: float-2 8s ease-in-out infinite;
        }
        .animate-float-3 {
          animation: float-3 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
