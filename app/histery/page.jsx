import React from 'react';
import DonorProfile from '../_components/histery/DonorProfile';
import DonorDonation from '../_components/histery/DonorDonation';

const Page = () => {
  return (
    <div className="min-h-screen pt-18 pb-10  md:pt-20 px-4">
      <div className="xl:max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        <DonorProfile />
        <DonorDonation />
      </div>
    </div>
  );
};

export default Page;
