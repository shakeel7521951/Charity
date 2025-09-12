"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FiHeart, FiArrowRight, FiArrowLeft } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t, i18n } = useTranslation("donor/Hero");
  const locale = i18n.language;

  const [mounted, setMounted] = useState(false);

  
  
  // Get slides data from translation
  const slidesData = [
    {
      id: 1,
      bgimg: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1600&auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      bgimg: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1600&auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      bgimg: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&auto=format&fit=crop&q=80",
    },
  ];

  // Create slides with translated content
  const slides = slidesData.map((slide, index) => ({
    ...slide,
    title: t(`slides.${index}.title`),
    msg: t(`slides.${index}.msg`)
  }));

  useEffect(() => {
    setMounted(true);
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  useEffect(() => {
    if (mounted) {
      // Refresh AOS when language changes to trigger animations again
      setTimeout(() => {
        AOS.refresh();
      }, 100);
    }
  }, [i18n.language, mounted]);

  // Wait for component to mount and translations to load
  if (!mounted) {
    return <div className="w-full h-screen bg-gray-200 animate-pulse"></div>;
  }

  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        speed={1000}
        loop={true}
        pagination={{
          clickable: true,
          el: '.custom-pagination',
          bulletClass: 'custom-bullet',
          bulletActiveClass: 'custom-bullet-active'
        }}
        className="w-full h-screen"
        key={i18n.language} // Force re-render when language changes
      >
        {slides.map((item) => (
          <SwiperSlide key={`${item.id}-${i18n.language}`}>
            <div
              className="relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-center"
              style={{ backgroundImage: `url(${item.bgimg})` }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#A02B54]/20 to-[#e22869]/60"></div>

              {/* Animated circles decoration */}
              <div className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full bg-white/10 animate-pulse"></div>
              <div className="absolute bottom-1/3 right-1/4 w-16 h-16 rounded-full bg-white/5 animate-pulse delay-1000"></div>
              <div className="absolute top-1/3 right-1/3 w-12 h-12 rounded-full bg-white/15 animate-pulse delay-500"></div>

              {/* Content */}
              <div className="relative z-10 text-center px-6 text-white max-w-4xl">
                <div data-aos="fade-down" className="inline-flex gap-2 mt-20 items-center justify-center px-4 py-2 mb-6 bg-white/20 backdrop-blur-sm rounded-full">
                  <FiHeart className=" text-[#FFD1DC]" />
                  <span className="text-sm font-semibold">{t("badge")}</span>
                </div>

                <h1 className="sm:text-5xl text-4xl md:text-7xl font-extrabold mb-6 drop-shadow-lg leading-tight">
                  {item.title.split(' ').map((word, i) => (
                    <span key={i} className="inline-block animate-fadeInUp" style={{ animationDelay: `${i * 0.1}s` }}>
                      {word}&nbsp;
                    </span>
                  ))}
                </h1>

                <p data-aos="fade-up" className="text-xl md:text-2xl mb-10 font-light drop-shadow-md max-w-2xl mx-auto leading-relaxed">
                  {item.msg}
                </p>

                <div className="flex flex-row justify-center items-center gap-6">
                  <Link href="/contact">
                    <button data-aos="fade-right" className="group relative p-3 sm:px-8 sm:py-4 bg-[#A02B54] hover:bg-[#e22869] transition-all duration-300 rounded-xl shadow-lg sm:text-xl font-semibold flex items-center overflow-hidden">
                      <span className="relative z-10 flex gap-2 items-center">
                        {t("buttons.donate")}
                        {locale === 'en' ? (
                          <FiArrowRight className=" group-hover:translate-x-1 transition-transform" />
                        ) : (
                          <FiArrowLeft className="group-hover:-translate-x-1  transition-transform" />
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#A02B54] to-[#e22869] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </Link>

                  <Link href="/about">
                    <button data-aos="fade-left" className="group relative sm:px-8 sm:py-4 bg-transparent border-2 border-white/60 hover:border-white hover:bg-white/10 transition-all duration-300 rounded-xl p-3 sm:text-xl font-semibold flex items-center backdrop-blur-sm">
                      <span className="relative z-10 flex items-center">
                        {t("buttons.about")}
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom pagination */}
      <div className="custom-pagination absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2"></div>

      {/* Custom CSS for pagination */}
      <style jsx>{`
        .custom-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          margin: 0 6px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .custom-bullet-active {
          width: 30px;
          background: #fff;
          border-radius: 10px;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Hero;