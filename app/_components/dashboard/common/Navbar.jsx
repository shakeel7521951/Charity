"use client";
import { Bell, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import i18n from "../../../../i18n";


export default function Navbar({ onMenuClick }) {

  const [lang, setLang] = useState(i18n.language || "en");

  useEffect(() => {
    const handleLangChange = (lng) => setLang(lng);
    i18n.on("languageChanged", handleLangChange);
    return () => {
      i18n.off("languageChanged", handleLangChange);
    };
  }, []);

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    setLang(newLang);
  };


  return (
    <header className="sticky top-0 flex items-center justify-between bg-white shadow px-6 py-3.5">
      <div className="flex items-center gap-3">
        {/* Sidebar toggle button */}
        <button
          onClick={onMenuClick}
          className="p-2 rounded-md hover:bg-gray-100 focus:outline-none block lg:hidden"
        >
          <Menu className="w-6 h-6 text-[#723134]" />
        </button>

        <h2 className="text-xl font-semibold text-[#543D2E]">Dashboard</h2>
      </div>

      <div className="flex items-center gap-4">
        {/* 🌍 Language Toggle */}
        <button
          onClick={toggleLanguage}
          className="px-3 py-1 text-sm font-semibold border rounded-md hover:bg-gray-100"
        >
          {lang === "en" ? "AR" : "EN"}
        </button>
        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <Bell className="w-6 h-6 text-[#723134]" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="w-8 h-8 rounded-full bg-[#723134] text-white flex items-center justify-center font-bold">
          A
        </div>
      </div>
    </header>
  );
}
