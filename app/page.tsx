import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import BuiltForBusiness from "@/components/landing-page/BuiltforBusiness";
import BusinessSection from "@/components/landing-page/BusinessSection";
import CategoryGrid from "@/components/landing-page/CategoryGrid";
import FinalCTA from "@/components/landing-page/Cta";
import DealSection from "@/components/landing-page/DealSection";
import DealSeekerSection from "@/components/landing-page/DealSeekerSection";
import HeroSection from "@/components/landing-page/HeroSection";
import HowItWorks from "@/components/landing-page/HowItWorks";
import WhyAwoofHub from "@/components/landing-page/WhySection";

export default function Home() {

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Header />
      <HeroSection />
      <DealSection /> 
      <WhyAwoofHub />
      <BusinessSection />
      <DealSeekerSection />
      <CategoryGrid />
      <BuiltForBusiness />
      <HowItWorks />
      <FinalCTA />
      <Footer />
    </div>
  );
};



