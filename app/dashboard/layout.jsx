"use client";
import { useState } from "react";
import Sidebar from "../_components/dashboard/common/Sidebar";
import Navbar from "../_components/dashboard/common/Navbar";

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F2EDE9] w-full">
      {/* Sidebar */}
      <div
        className={`fixed  top-0 inset-y-0 left-0 transform lg:translate-x-0 transition-transform duration-300 ease-in-out z-40 w-64 h-full  lg:w-[20%] ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar onLinkClick={() => setIsSidebarOpen(false)} />
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30  lg:hidden"
          onClick={() => setIsSidebarOpen(false)} 
        />
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col lg:ml-[20%]">
        <Navbar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="md:p-6 p-2">{children}</main>
      </div>
    </div>
  );
}
