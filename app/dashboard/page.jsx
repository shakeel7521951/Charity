import React from "react";
import SideBar from "../_components/dashboard/SideBar";
import DonorNav from "../_components/dashboard/DonorNav";
import Dashboard from "../_components/dashboard/dashboard_inner/Dashboard";

const Page = () => {
  return (
    <div className="flex h-full lg:h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="hidden lg:block w-64 bg-gray-900 shadow-lg">
        <SideBar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <div className="sticky top-0 z-20 bg-white shadow-md">
          <DonorNav />
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default Page;
