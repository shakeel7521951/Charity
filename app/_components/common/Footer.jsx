"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("common/footer");

  const links = t("links.items", { returnObjects: true });
  const resources = t("resources.items", { returnObjects: true });

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1 ">
            <div className="flex items-center mb-6 gap-3">
              <div className="bg-gradient-to-r from-[#821435] to-[#B62F5E] p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">{t("brand.title")}</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">{t("brand.desc")}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">{t("links.title")}</h4>
            <ul className="space-y-3">
              {links.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">{t("resources.title")}</h4>
            <ul className="space-y-3">
              {resources.map((res, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                    {res}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">{t("contact.title")}</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-gray-300 whitespace-pre-line">{t("contact.address")}</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-300">{t("contact.phone")}</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-300">{t("contact.email")}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="border-t border-gray-700 pt-12 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h4 className="text-xl font-semibold mb-4">{t("newsletter.title")}</h4>
              <p className="text-gray-400 max-w-md">{t("newsletter.desc")}</p>
            </div>
            <div className="lg:w-1/2">
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder={t("newsletter.placeholder")}
                  className="flex-grow px-5 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B62F5E] focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-[#821435] to-[#B62F5E] text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition-opacity duration-300"
                >
                  {t("newsletter.button")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} {t("bottom.platform")}. {t("bottom.rights")}
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">{t("bottom.privacy")}</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">{t("bottom.terms")}</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">{t("bottom.cookie")}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
