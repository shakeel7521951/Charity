"use client";
import React from "react";
import {
  FiHeart,
  FiPlay,
  FiDollarSign,
  FiTarget,
  FiTruck,
  FiAward,
  FiVideo,
} from "react-icons/fi";
import { useTranslation } from "react-i18next";

// map icon strings from JSON to actual components
const iconMap = {
  FiDollarSign: <FiDollarSign className="w-8 h-8" />,
  FiTarget: <FiTarget className="w-8 h-8" />,
  FiTruck: <FiTruck className="w-8 h-8" />,
  FiAward: <FiAward className="w-8 h-8" />,
};

const MoneyPurs = () => {
  const { t } = useTranslation("donor/MoneyPurs");

  const header = t("header", { returnObjects: true });
  const steps = t("steps", { returnObjects: true }).map((s) => ({
    ...s,
    icon: iconMap[s.icon],
  }));
  const videoHeader = t("videoHeader", { returnObjects: true });
  const videos = t("videos", { returnObjects: true });

  return (
    <section className="bg-gradient-to-b from-white to-pink-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex gap-2 items-center justify-center px-4 py-2 mb-4 bg-pink-100 rounded-full text-[#AA335F]">
            <FiHeart />
            <span>{header.tag}</span>
          </div>
          <h2
            className="text-4xl font-bold text-gray-900 mb-4"
            dangerouslySetInnerHTML={{ __html: header.title }}
          />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {header.desc}
          </p>
        </div>

        {/* Step Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step) => (
            <div
              key={`step-${step.id}`}
              className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#AA335F] text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-100 text-[#AA335F] text-sm font-bold mb-4">
                {step.id}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Video Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex gap-2 items-center justify-center px-4 py-2 mb-4 bg-pink-100 rounded-full text-[#AA335F]">
            <FiVideo />
            <span>{videoHeader.tag}</span>
          </div>
          <h3
            className="text-3xl font-bold text-gray-900 mb-4"
            dangerouslySetInnerHTML={{ __html: videoHeader.title }}
          />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {videoHeader.desc}
          </p>
        </div>

        {/* Video Section */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, idx) => (
            <div key={`video-${idx}`} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#AA335F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl z-10 flex items-end p-6">
                <h4 className="text-white text-lg font-semibold">
                  {video.title}
                </h4>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#AA335F] bg-opacity-80 text-white transform scale-100 group-hover:scale-110 transition-transform duration-300">
                  <FiPlay className="w-8 h-8 ml-1" />
                </div>
              </div>
              <iframe
                src={video.url}
                title={`Video ${idx + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-64 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoneyPurs;
