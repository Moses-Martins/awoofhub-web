import { BadgeCheck, Handshake, LucideIcon, RotateCcw } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

const features: Feature[] = [
  {
    title: "Verified Deals Only",
    description: "Every deal is reviewed before it goes live, so users don't waste time on fake or expired offers.",
    icon: BadgeCheck,
  },
  {
    title: "Deals That Matter",
    description: "Find promos, discounts, and freebies from businesses that actually want customers.",
    icon: Handshake,
  },
  {
    title: "Always Fresh",
    description: "Deals expire automatically, so what you see is active, relevant, and up to date.",
    icon: RotateCcw,
  },
];


export default function WhyAwoofHub() {
  return (
    <section className="py-16 px-10 max-w-[1400px] mx-auto text-center">
        <h2 className="text-2xl sm:text-4xl font-medium text-slate-900 mb-1 sm:mb-4">
          Why AwoofHUB?
        </h2>
        <p className="text-sm sm:text-lg text-slate-600 mb-8 sm:mb-16 max-w-2xl mx-auto">
          Curated discounts, promos, and freebies from verified businesses.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              
              <div className="mb-6 flex items-center justify-center">
                <feature.icon 
                  strokeWidth={1.5} 
                  className="w-10 h-10 sm:w-16 sm:h-16 text-[#FF5C00]" />
              </div>
              
              <h3 className="text-base sm:text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed max-w-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
    </section>
  );
}