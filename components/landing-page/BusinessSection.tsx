import { CheckCircle2, MoveRight } from 'lucide-react';
import Image from 'next/image';

export default function BusinessSection() {
  const benefits = [
    "Publish unlimited deals",
    "See real-time views and clicks",
    "No monthly fees for MVP users",
    "Reach local and nationwide audiences"
  ];

  return (
    <section className="max-w-[1400px] bg-white mx-auto px-6 py-10 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Column: Content */}
        <div className="flex flex-col items-start text-left">
          <span className="font-baloo text-xl sm:text-2xl bg-[#FFC27A] text-[#FF5C00] px-6 py-2 rounded-full sm:rounded-xl font-medium mb-8">
            For Business
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-5xl text-[#FF5C00] font-medium leading-tight mb-6">
            Stop Fighting Algorithms. <br className="block sm:hidden lg:block" />
            Start Reaching Customers.
          </h2>

          <p className="text-lg text-slate-600 mb-8 max-w-xl">
            Your promotions deserve to be seen by people actually looking for deals.
            AwoofHub puts your offers in front of high-intent buyers.
          </p>

          {/* Checklist */}
          <ul className="space-y-4 mb-10">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-center gap-3 text-slate-700 text-lg">
                <CheckCircle2 className="text-[#65D01E]" size={24} fill="#65D01E" fillOpacity={0.1} />
                {benefit}
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button className="font-baloo bg-gradient-to-r from-[#FE4F04] to-[#FF9501] hover:bg-[#e65200] text-white text-lg p-3 rounded-sm font-semibold flex items-center gap-2 transition-all">
            Get Started - It's free
            <MoveRight size={20} />
          </button>
        </div>

        {/* Right Column: Image */}
        
          <Image
            src="/for-business-image.png"
            alt="Local market with yellow and red umbrellas"
            width={500}
            height={500}
            className="w-full h-[500px] hidden lg:block shadow-sm"
          />
        </div>

      
    </section>
  );
}