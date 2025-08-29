"use client";
import { FaHandsHelping } from "react-icons/fa";

export default function CampaignHeader() {
  return (
    <div className="relative w-full h-[600px] md:h-[90vh] overflow-hidden shadow-lg">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1400&q=80"
        alt="Charity Campaign"
        className="absolute w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute w-full h-full bg-[#723134]/80 flex items-center justify-center">
        <div className="text-center text-white px-6">
          <div data-aos="zoom-in" data-aos-duration="1000">
            <FaHandsHelping className="text-5xl md:text-6xl mx-auto mb-4 text-[#F2EDE9]" />
          </div>

          <h1
            className="text-3xl md:text-5xl font-bold"
            data-aos="fade-down"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            Start Your Charity Campaign
          </h1>

          <p
            className="mt-3 text-lg md:text-xl text-[#F2EDE9] max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            Share your story, raise awareness, and inspire people to make a
            difference through collective support.
          </p>
        </div>
      </div>
    </div>
  );
}
