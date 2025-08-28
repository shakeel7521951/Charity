const TrustIndicatorBar = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#f8f5f2] to-[#f0ebe6] py-12 md:py-16 border-t border-b border-[#e5ddd5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#543D2E] mb-3">Trusted by Qatar's Charitable Community</h2>
          <p className="text-[#8a1538] font-medium">Fully integrated with Sandi for transparent, regulated charitable giving</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          {/* Official Partnerships */}
          <div className="bg-white rounded-xl p-6 shadow-md border border-[#e5ddd5] flex flex-col items-center">
            <div className="text-center mb-5">
              <h3 className="font-semibold text-[#543D2E] mb-2">Official Partnerships</h3>
              <div className="h-1 w-12 bg-[#8a1538] mx-auto mb-4"></div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#8a1538] to-[#6c102c] rounded-xl flex items-center justify-center text-white font-bold text-xs shadow-md">
                  RACA
                </div>
                <span className="text-xs text-[#543D2E] mt-2 font-medium">Regulatory Body</span>
              </div>
              
              <div className="h-12 w-px bg-[#e5ddd5] hidden md:block"></div>
              <div className="w-12 h-px bg-[#e5ddd5] md:hidden"></div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#543D2E] to-[#3e2c21] rounded-xl flex items-center justify-center text-white font-bold text-xs text-center shadow-md">
                  SANDI
                </div>
                <span className="text-xs text-[#543D2E] mt-2 font-medium">National Platform</span>
              </div>
            </div>
          </div>
          
          {/* Impact Statistics */}
          <div className="bg-white rounded-xl p-6 shadow-md border border-[#e5ddd5]">
            <div className="text-center mb-5">
              <h3 className="font-semibold text-[#543D2E] mb-2">Our Impact</h3>
              <div className="h-1 w-12 bg-[#8a1538] mx-auto mb-4"></div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#8a1538]">42+</div>
                <div className="text-xs text-[#543D2E] mt-1 font-medium">Verified Charities</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl md:text-2xl font-bold text-[#8a1538] mt-1">12.4M+</div>
                <div className="text-xs text-[#543D2E] mt-1 font-medium">Donations Raised</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl md:text-2xl font-bold text-[#8a1538]">5,241+</div>
                <div className="text-xs text-[#543D2E] mt-1 font-medium">Families Helped</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl md:text-2xl font-bold text-[#8a1538]">100%</div>
                <div className="text-xs text-[#543D2E] mt-1 font-medium">Compliance</div>
              </div>
            </div>
          </div>
          
          {/* Security & Trust */}
          <div className="bg-white rounded-xl p-6 shadow-md border border-[#e5ddd5]">
            <div className="text-center mb-5">
              <h3 className="font-semibold text-[#543D2E] mb-2">Security & Trust</h3>
              <div className="h-1 w-12 bg-[#8a1538] mx-auto mb-4"></div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-[#f8f5f2] rounded-full flex items-center justify-center border border-[#e5ddd5]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8a1538]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-xs text-[#543D2E] mt-2 font-medium text-center">Secure</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-[#f8f5f2] rounded-full flex items-center justify-center border border-[#e5ddd5]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8a1538]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-xs text-[#543D2E] mt-2 font-medium text-center">Verified</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-[#f8f5f2] rounded-full flex items-center justify-center border border-[#e5ddd5]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8a1538]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-xs text-[#543D2E] mt-2 font-medium text-center">Transparent</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-[#f8f5f2] rounded-full flex items-center justify-center border border-[#e5ddd5]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8a1538]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-xs text-[#543D2E] mt-2 font-medium text-center">Compliant</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Trust Elements */}
        <div className="mt-10 pt-8 border-t border-[#e5ddd5] flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-sm text-[#543D2E] font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#8a1538]" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>100% compliant with Qatari charitable regulations</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-[#f8f5f2] px-3 py-1 rounded-lg border border-[#e5ddd5]">
              <div className="w-5 h-5 bg-[#543D2E] rounded flex items-center justify-center">
                <span className="text-xs font-bold text-white">SSL</span>
              </div>
              <span className="text-xs text-[#543D2E]">Secure Encryption</span>
            </div>
            
            <div className="h-6 w-px bg-[#e5ddd5]"></div>
            
            <div className="flex items-center space-x-2 bg-[#f8f5f2] px-3 py-1 rounded-lg border border-[#e5ddd5]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#8a1538]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.2 6.5 10.266a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
              </svg>
              <span className="text-xs text-[#543D2E]">Blockchain Verified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustIndicatorBar;