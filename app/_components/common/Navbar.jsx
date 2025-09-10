"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation("navbar/navbar");


  const [lang, setLang] = useState(i18n.language || "en");

  const changeLanguage = (newLang) => {
    i18n.changeLanguage(newLang);
    setLang(newLang);

    // update <html> attributes
    if (typeof document !== "undefined") {
      document.documentElement.lang = newLang;
      document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    }
  };

  // Toggle between EN ↔ AR
  const toggleLanguage = () => {
    const newLang = lang === "en" ? "ar" : "en";
    changeLanguage(newLang);
  };


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation links from JSON
  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/campaign", label: t("campaigns") },
    { href: "/about", label: t("about") },
    { href: "/donor", label: t("donor") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-[#821435] to-[#B62F5E] p-2 rounded-lg mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <span
                className={`text-xl font-bold ${isScrolled ? "text-gray-800" : "text-white"
                  }`}
              >
                {t("logo")}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${isScrolled
                      ? "text-gray-700 hover:text-[#821435]"
                      : "text-white hover:text-gray-200"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/login"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${isScrolled
                  ? "text-[#821435] hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
                }`}
            >
              {t("login")}
            </Link>
            <Link
              href="#"
              className="px-4 py-2 bg-gradient-to-r from-[#821435] to-[#B62F5E] text-white text-sm font-medium rounded-md shadow-md hover:opacity-90 transition-opacity duration-300"
            >
              {t("donate")}
            </Link>
            <Link
              href="/dashboard"
              className="px-4 py-2 bg-gradient-to-r from-[#63cc56] to-[#9b254e] text-white text-sm font-medium rounded-md shadow-md hover:opacity-90 transition-opacity duration-300"
            >
              {t("dashboard")}
            </Link>

            {/* Language Switch */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 text-sm border rounded"
            >
              {lang === "en" ? "AR" : "EN"}
            </button>

          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <Link
              href="#"
              className="mr-4 px-3 py-1 bg-gradient-to-r from-[#821435] to-[#B62F5E] text-white text-sm font-medium rounded-md shadow-md"
            >
              {t("donate")}
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${isScrolled ? "text-gray-700" : "text-white"
                }`}
            >
              <svg
                className={`h-6 w-6 ${isOpen ? "hidden" : "block"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`h-6 w-6 ${isOpen ? "block" : "hidden"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
      >
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${isScrolled ? "bg-white" : "bg-gray-800"
            }`}
        >
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className={`block px-3 py-2 rounded-md text-base font-medium ${isScrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-gray-700"
                }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/login"
            className={`block px-3 py-2 rounded-md text-base font-medium ${isScrolled
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-gray-700"
              }`}
          >
            {t("login")}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;