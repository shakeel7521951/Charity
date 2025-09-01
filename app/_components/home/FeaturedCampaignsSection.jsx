const FeaturedCampaignsSection = () => {
  // Campaign data from requirements
  const campaigns = [
    {
      category: "Health",
      title: "Medical Support for Families",
      charity: "Qatar Red Crescent",
      description: "Provide essential medical care and medication for low-income families across Qatar",
      raised: 450000,
      goal: 750000,
      donors: 1245,
      daysLeft: 12,
      verified: true,
      image: "https://media.gettyimages.com/id/2120554524/photo/hospital-holding-hands-and-kid-in-bed-with-love-support-and-care-in-clinic-after-surgery.jpg?s=612x612&w=0&k=20&c=VSnDhLLZI1j4UdxTbGlyZOzMGCSo3w2Yj1CvaJsLmUA="
    },
    {
      category: "Education",
      title: "Digital Learning for Students",
      charity: "Education Above All",
      description: "Supply tablets and internet access for students in need to continue their education",
      raised: 285000,
      goal: 500000,
      donors: 892,
      daysLeft: 21,
      verified: true,
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    },
    {
      category: "Relief",
      title: "Winter Aid Package Distribution",
      charity: "Qatar Charity",
      description: "Provide warm clothing, blankets and heating equipment for families during winter months",
      raised: 620000,
      goal: 800000,
      donors: 1567,
      daysLeft: 5,
      verified: true,
      image: "https://media.gettyimages.com/id/530930529/photo/little-girl-trying-on-coat-at-winter-clothing-donation-drive.jpg?s=612x612&w=0&k=20&c=bFskyDKmdlt2JLs7uZ6m2rss4VZRkijhdkUs_CFVn-s="
    }
  ];

  // Format currency for Qatari Riyal
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-QA', { style: 'currency', currency: 'QAR', maximumFractionDigits: 0 }).format(amount);
  };

  // Calculate percentage
  const calculatePercentage = (raised, goal) => {
    return Math.min(100, Math.round((raised / goal) * 100));
  };

  return (
    <section className="mb-6 bg-gradient-to-b from-[#f8f5f2] to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 bg-[#8a1538]/10 rounded-full text-[#8a1538] font-medium text-sm mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Verified Campaigns
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#543D2E] mb-4">Make a Difference Today</h2>
          <p className="text-lg text-[#543D2E]/80">
            Support RACA-approved campaigns from trusted charities in Qatar. All campaigns are integrated with Sandi for transparent impact.
          </p>
        </div>
        
        {/* Campaigns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-[#e5ddd5] group">
              {/* Campaign Image with Overlay */}
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={campaign.image} 
                  alt={campaign.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                    campaign.category === "Health" ? "bg-red-100 text-red-800" :
                    campaign.category === "Education" ? "bg-blue-100 text-blue-800" :
                    "bg-amber-100 text-amber-800"
                  }`}>
                    {campaign.category}
                  </span>
                </div>
                
                {campaign.verified && (
                  <div className="absolute top-4 right-4 bg-white rounded-full p-1.5 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#8a1538]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
                
                {/* Charity Logo Placeholder */}
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#543D2E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
              
              {/* Campaign Content */}
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="text-sm font-medium text-[#543D2E]">{campaign.charity}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-[#543D2E] mb-3 leading-tight">{campaign.title}</h3>
                <p className="text-[#543D2E]/80 mb-5">{campaign.description}</p>
                
                {/* Progress Bar */}
                <div className="mb-5">
                  <div className="flex justify-between text-sm text-[#543D2E] mb-2">
                    <span className="font-medium">{calculatePercentage(campaign.raised, campaign.goal)}% funded</span>
                    <span className="font-medium">{formatCurrency(campaign.raised)}</span>
                  </div>
                  <div className="w-full bg-[#e5ddd5] rounded-full h-2.5">
                    <div 
                      className="h-2.5 rounded-full" 
                      style={{ 
                        width: `${calculatePercentage(campaign.raised, campaign.goal)}%`,
                        background: `linear-gradient(to right, #8a1538, #543D2E)`
                      }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-[#543D2E]/70 mt-1">
                    <span>Raised</span>
                    <span>Goal: {formatCurrency(campaign.goal)}</span>
                  </div>
                </div>
                
                {/* Campaign Stats */}
                <div className="flex justify-between text-sm text-[#543D2E] mb-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-[#f8f5f2] rounded-full flex items-center justify-center mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#8a1538]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <span>{campaign.donors.toLocaleString()} donors</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-[#f8f5f2] rounded-full flex items-center justify-center mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#8a1538]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span>{campaign.daysLeft} days left</span>
                  </div>
                </div>
                
                {/* CTA Button */}
                <button className="w-full bg-[#8a1538] hover:bg-[#6c102c] text-white font-semibold py-2.5 px-4 rounded-lg transition duration-300 shadow-md hover:shadow-lg">
                  Donate Now
                </button>
                
                {/* Sandi Integration Badge */}
                <div className="mt-4 flex items-center justify-center text-xs text-[#543D2E]/70">
                  <div className="w-4 h-4 bg-[#8a1538]/10 rounded-full flex items-center justify-center mr-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-[#8a1538]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Integrated with Sandi to prevent duplication</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All CTA */}
        <div className="text-center mt-12">
          <button className="bg-white hover:bg-[#f8f5f2] text-[#8a1538] font-semibold py-2.5 px-10 rounded-lg border-2 border-[#8a1538] transition duration-300 shadow-md hover:shadow-lg">
            View All Campaigns
          </button>
          <p className="text-sm text-[#543D2E]/70 mt-4">All campaigns are RACA-approved and Sandi-integrated</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCampaignsSection;