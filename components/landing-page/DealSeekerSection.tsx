import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function DealSeekerSection() {
  const seekerBenefits = [
    "Discover verified local discounts",
    "Find exclusive limited-time promos",
    "Zero ads, just real deals",
    "Filter by category and location"
  ];

  return (
    <section className="max-w-[1400px] bg-white  mx-auto px-6 py-20 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <Image
          src="/for-business-image.png"
          alt="Local market with yellow and red umbrellas"
          width={500}
          height={500}
          className="w-full h-[500px] hidden lg:block shadow-sm"
        />

        {/* Right Column: Content (Ordered second on desktop) */}
        <div className="flex flex-col items-start text-left order-1 lg:order-2">
          <span className="font-baloo text-xl sm:text-2xl bg-[#41210B] text-white px-6 py-2 rounded-full sm:rounded-xl font-medium mb-8">
            For Deal Seekers
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            All Deals. One Place. <br />
            <span className="text-[#FF5C00]">Zero Hassle.</span>
          </h2>

          <p className="text-lg text-slate-600 mb-8 max-w-xl">
            Stop hunting through expired social media posts. AwoofHub brings
            the best deals from verified businesses directly to your screen.
          </p>

          {/* Checklist */}
          <ul className="space-y-4 mb-10">
            {seekerBenefits.map((benefit, idx) => (
              <li key={idx} className="flex items-center gap-3 text-slate-700 text-lg">
                <CheckCircle2 className="text-[#65D01E]" size={24} fill="#65D01E" fillOpacity={0.1} />
                {benefit}
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button className="font-baloo bg-gradient-to-r from-[#FE4F04] to-[#FF9501] hover:bg-[#e65200] text-white text-lg p-3 rounded-sm font-semibold flex items-center gap-2 transition-all">
            Start Browsing Deals
            <ArrowRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
}