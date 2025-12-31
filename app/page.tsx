import DealSection from "@/components/DealSection";
import Header from "@/components/header/Header";
import HeroSection from "@/components/HeroSection";

export default function Home() {

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Header />
      <HeroSection />
      <DealSection /> 
    </div>
  );
};



