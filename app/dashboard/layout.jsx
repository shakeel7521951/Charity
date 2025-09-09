"use client";
import { useState, useEffect } from "react";
import Sidebar from "../_components/dashboard/common/Sidebar";
import Navbar from "../_components/dashboard/common/Navbar";
import i18n from "../../i18n"; // adjust path if needed

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [lang, setLang] = useState(i18n.language || "en");

  // keep state in sync with i18n
  useEffect(() => {
    const handleLangChange = (lng) => setLang(lng);
    i18n.on("languageChanged", handleLangChange);
    return () => {
      i18n.off("languageChanged", handleLangChange);
    };
  }, []);

  const isRTL = lang === "ar";

  return (
    <div className="flex min-h-screen bg-[#F2EDE9] w-full">
      {/* Sidebar */}
      <div
        className={`fixed top-0 inset-y-0 transform lg:translate-x-0 transition-transform duration-300 ease-in-out z-40 w-64 h-full lg:w-[20%]
          ${isRTL ? "right-0" : "left-0"} 
          ${isSidebarOpen ? "translate-x-0" : isRTL ? "translate-x-full" : "-translate-x-full"}
        `}
      >
        <Sidebar onLinkClick={() => setIsSidebarOpen(false)} />
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div
        className={`flex-1 flex flex-col ${isRTL ? "lg:mr-[20%]" : "lg:ml-[20%]"
          }`}
      >
        <Navbar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="md:p-6 px-2 py-6">{children}</main>
      </div>
    </div>
  );
}
