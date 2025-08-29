"use client";
import { FaLock, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-32 bg-[#8A1538]">
      {/* Luxury Card */}
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-lg overflow-hidden border border-gray-900">
        
        {/* Gold Header */}
        <div className="bg-[#8214351d] py-6 px-4 sm:px-8 text-center">
          <h1
            className="text-gray-900 font-serif text-2xl sm:text-3xl font-bold"
            data-aos="zoom-out-up"
          >
            Join The Movement
          </h1>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8">
          {/* Email Field */}
          <div className="mb-4">
            <label
              className="block text-gray-900 font-semibold mb-2"
              data-aos="zoom-in-up"
            >
              Email Address
            </label>
            <div className="relative">
              <FaEnvelope
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-900"
                size={18}
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-2 border border-gray-900 rounded-lg focus:ring-1 focus:ring-[#494c52] transition-all duration-200 outline-none"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label
              className="block text-gray-900 font-semibold mb-2"
              data-aos="zoom-in-up"
            >
              Password
            </label>
            <div className="relative">
              <FaLock
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-900"
                size={18}
              />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full pl-10 pr-10 py-2 border border-gray-900 outline-none rounded-lg focus:ring-1 focus:ring-[#494c52] transition-all duration-200"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#0D1B2A]"
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right mb-6">
            <Link
              href="/forgot-password"
              className="text-gray-900 hover:text-[#8A1538] hover:underline text-sm"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button className="w-full bg-gradient-to-r from-[#8A1538] to-[#6A0F2A] text-white font-bold py-2 px-4 rounded transform hover:scale-101 transition-all duration-300 shadow-lg hover:shadow-xl">
            Login
          </button>

          {/* Signup Link */}
          <div className="mt-6 text-center text-gray-900"
           >
            <span>Don't have an account? </span>
            <Link
              href="/signup"
              className="text-gray-900 hover:text-[#8A1538] hover:underline font-medium"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
