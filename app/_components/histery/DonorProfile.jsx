"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail, MdVerified } from "react-icons/md";

const DonorProfile = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="xl:w-1/3 p-2"
    >
      <div className="relative bg-gradient-to-br from-white to-[#f9eef1] sticky top-10 border border-[#d6a5b3] shadow-lg rounded-2xl p-6 text-center overflow-hidden">
        
        {/* Background Decorative Circles */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#e8c8d1] rounded-full opacity-40"></div>
        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#e8c8d1] rounded-full opacity-40"></div>
        
        {/* Profile Image */}
        <div className="relative flex justify-center mb-6 z-10">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1755147047179-76e345776a1e?w=500&auto=format&fit=crop&q=60"
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
            />
            <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-md">
              <MdVerified className="text-green-500 text-lg" />
            </div>
          </div>
        </div>

        {/* Name & Badge */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#922d4c] mb-2">Muhammad Umair</h1>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#f2d9df] text-[#922d4c]">
            Regular Donor
          </span>
        </div>

        {/* Contact Information */}
        <div className="space-y-4 mb-6">
          <div className="flex items-center justify-center gap-3 text-gray-700 p-2 bg-[#f9eef1] rounded-lg">
            <FaPhone className="text-[#922d4c] text-sm" />
            <span className="text-sm">0327-87334</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-gray-700 p-2 bg-[#f9eef1] rounded-lg">
            <MdEmail className="text-[#922d4c] text-lg" />
            <span className="text-sm truncate">muhamdmdmdiere@gmail.com</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-gray-700 p-2 bg-[#f9eef1] rounded-lg">
            <FaMapMarkerAlt className="text-[#922d4c] text-sm" />
            <span className="text-sm">Bahawalpur, Punjab</span>
          </div>
        </div>

        {/* Donor ID */}
        <div className="bg-[#f2d9df] p-3 rounded-xl mb-4">
          <p className="text-xs text-[#922d4c] font-medium">Donor ID</p>
          <p className="text-sm font-semibold text-[#922d4c]">3120233232323</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mt-6 border-t border-[#e8c8d1] pt-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-[#922d4c]">12</p>
            <p className="text-xs text-gray-500">Donations</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-[#922d4c]">4</p>
            <p className="text-xs text-gray-500">Years</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DonorProfile;
