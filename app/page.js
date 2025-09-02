import FAQs from "./_components/home/FAQs";
import FeaturedCampaignsSection from "./_components/home/FeaturedCampaignsSection";
import HeroSection from "./_components/home/HeroSection";
import HowItWorksSection from "./_components/home/HowItWorksSection";
import ImpactShowcase from "./_components/home/ImpactShowcase";
import PlatformForEveryone from "./_components/home/PlatformForEveryone";
import TrustIndicatorBar from "./_components/home/TrustIndicatorBar";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <TrustIndicatorBar />
      <HowItWorksSection />
      <FeaturedCampaignsSection />
      <PlatformForEveryone />
      <ImpactShowcase />
      <FAQs />
    </div>
  );
}
