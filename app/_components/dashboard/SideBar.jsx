import React from "react";
import { FaHome, FaDonate, FaChartLine, FaWallet, FaFileAlt, FaCog, FaUser } from "react-icons/fa";

const pgAry = [
  { id: 1, icon: <FaHome />, name: "Dashboard", path: "#" },
  { id: 2, icon: <FaDonate />, name: "My Donation", path: "#" },
  { id: 3, icon: <FaChartLine />, name: "Campaigns", path: "#" },
  { id: 4, icon: <FaWallet />, name: "Wallet", path: "#" },
  { id: 5, icon: <FaFileAlt />, name: "Report", path: "#" },
  { id: 6, icon: <FaCog />, name: "Settings", path: "#" },
  { id: 7, icon: <FaUser />, name: "My Profile", path: "#" },
];

const SideBar = () => {
  return (
    <div className="w-64 min-h-screen bg-gray-900 text-white flex flex-col justify-between shadow-xl">
      {/* Top Section */}
      <div>
        <div>
            <h1 className="text-xl text-center font-semibold shadow-lg mt-5">
                Qatar Charity
            </h1>
        </div>

        {/* Navigation */}
        <nav className="mt-6">
          {pgAry.map((item) => (
            <a
              key={item.id}
              href={item.path}
              className="flex items-center gap-3 px-5 py-3 text-gray-300 hover:bg-blue-600 hover:text-white transition-all rounded-lg mx-3 mb-2"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Footer */}
      <div className="p-4 text-center border-t border-gray-700 text-gray-400 text-sm">
        © 2025 Donor Dashboard
      </div>
    </div>
  );
};

export default SideBar;
