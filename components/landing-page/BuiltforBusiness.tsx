import { Store } from 'lucide-react';

interface BusinessFeature {
  description: string;
}

const businessFeatures: BusinessFeature[] = [
  { description: "Create and publish multiple deals in minutes. No complex approval process - just fill the form and submit." },
  { description: "See how many users viewed and clicked your deals. Measure interest and optimize your offers." },
  { description: "Connect with users actively looking for deals. No algorithm battles, just high-intent audiences." },
  { description: "All deals are manually reviewed to maintain trust and quality in the marketplace." },
];

export default function BuiltForBusiness() {
  return (
    <section className="bg-[#41210B] py-20 px-6 max-w-[1400px] mx-auto text-center">

        {/* Header Section */}
        <h2 className="text-4xl font-semibold text-white mb-4">
          Built for Businesses
        </h2>
        <p className="text-slate-300 mb-16 max-w-2xl mx-auto">
          Everything you need to promote your deals effectively
        </p>

        {/* Responsive Grid: 1 col (mobile), 2 cols (tablet), 4 cols (desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {businessFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 flex flex-col items-start text-left shadow-lg hover:shadow-xl transition-all border border-transparent hover:border-[#FF5C00]/20"
            >
              {/* Shop/Store Icon */}
              <div className="bg-[#FF5C00]/10 p-3 rounded-lg mb-6">
                <Store className="text-[#FF5C00]" size={28} />
              </div>
              
              {/* Feature Text */}
              <p className="text-[#FF5C00] text-lg leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
    </section>
  );
}