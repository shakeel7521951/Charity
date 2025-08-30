"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-[#821435] to-[#B62F5E] p-2 rounded-lg mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <span className={`text-xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Qatar Charity</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link href="/" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-700 hover:text-[#821435]' : 'text-white hover:text-gray-200'}`}>
                Home
              </Link>
              <Link href="campaign" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-700 hover:text-[#821435]' : 'text-white hover:text-gray-200'}`}>
                Campaigns
              </Link>
              <Link href="/about" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-700 hover:text-[#821435]' : 'text-white hover:text-gray-200'}`}>
                About
              </Link>
              <Link href="/donor" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-700 hover:text-[#821435]' : 'text-white hover:text-gray-200'}`}>
                Donor
              </Link>
              <Link href="/contact" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-700 hover:text-[#821435]' : 'text-white hover:text-gray-200'}`}>
                Contact
              </Link>
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/login" className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${isScrolled ? 'text-[#821435] hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}>
              Log in
            </Link>
            <Link href="#" className="px-4 py-2 bg-gradient-to-r from-[#821435] to-[#B62F5E] text-white text-sm font-medium rounded-md shadow-md hover:opacity-90 transition-opacity duration-300">
              Donate Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <Link href="#" className="mr-4 px-3 py-1 bg-gradient-to-r from-[#821435] to-[#B62F5E] text-white text-sm font-medium rounded-md shadow-md">
              Donate
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              <svg
                className={`h-6 w-6 ${isOpen ? 'hidden' : 'block'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`h-6 w-6 ${isOpen ? 'block' : 'hidden'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${isScrolled ? 'bg-white' : 'bg-gray-800'}`}>
          <Link href="/" className={`block px-3 py-2 rounded-md text-base font-medium ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-gray-700'}`}>
            Home
          </Link>
          <Link href="/campaign" className={`block px-3 py-2 rounded-md text-base font-medium ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-gray-700'}`}>
            Campaigns
          </Link>
          <Link href="/about" className={`block px-3 py-2 rounded-md text-base font-medium ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-gray-700'}`}>
            About
          </Link>
          <Link href="/donor" className={`block px-3 py-2 rounded-md text-base font-medium ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-gray-700'}`}>
            Donor
          </Link>
          <Link href="/contact" className={`block px-3 py-2 rounded-md text-base font-medium ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-gray-700'}`}>
            Contact
          </Link>
          <Link href="/login" className={`block px-3 py-2 rounded-md text-base font-medium ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-gray-700'}`}>
            Log in
          </Link>
          {/* <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium bg-gradient-to-r from-[#821435] to-[#B62F5E] text-white">
            Donate Now
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;