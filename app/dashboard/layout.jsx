// app/dashboard/layout.jsx
"use client";
import Sidebar from "../_components/dashboard/common/Sidebar";
import Navbar from "../_components/dashboard/common/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#F2EDE9]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
