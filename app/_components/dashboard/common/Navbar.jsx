// app/components/dashboard/Navbar.jsx
"use client";
import { Bell, Menu } from "lucide-react";

export default function Navbar({ onMenuClick }) {
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
