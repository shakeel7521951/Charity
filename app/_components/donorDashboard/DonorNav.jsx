import React from "react";
import { FaBell, FaHome } from "react-icons/fa";

const DonorNav = () => {
  return (
    <div className="flex justify-between items-center bg-white shadow-md px-6 py-4 rounded-lg">
      {/* Search Bar */}
      <div className="flex items-center w-full max-w-sm">
        <input
          type="text"
          placeholder="Search campaigns..."
          className="w-full px-4 py-2 border border-gray-300 rounded-full 
          focus:outline-none focus:ring-2 focus:ring-[#922D4C] transition duration-200"
        />
      </div>

   {/* Profile */}
        <div className="flex gap-4 items-center  border-gray-700">
          <FaBell className="mr-20"/> 
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500">
            <img
              src="https://media.istockphoto.com/id/2151737526/photo/studio-portrait-of-elegant-man-dark-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=HMdSi8qNYm6hJogQvEtJq6_8X9MEPXPaMBuy1LqRsn4="
              className="w-full h-full object-cover"
              alt="Profile"
            />
          </div>
          
        </div>
    </div>
  );
};

export default DonorNav;
