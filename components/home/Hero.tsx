import Image from 'next/image';

export default function Hero() {

  return (
    <section className="bg-white px-6 py-12 md:px-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Content Side */}
        <div className="w-full md:w-1/2 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-100 rounded-full shadow-sm">
            <span className="w-3 h-3 bg-orange-600 rounded-full animate-pulse"></span>
            <span className="text-xs font-semibold text-orange-600 uppercase tracking-wide">
              The Marketplace Where Deals Find Customers
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Discover the best deals in your city!
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
            Find exclusive discounts on food, services, and entertainment near you. 
            Save money on things you love.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-8 py-3 border-2 border-orange-600 text-orange-600 font-bold rounded-lg hover:bg-orange-50 transition-colors">
              Post an Offer
            </button>
            <button className="px-8 py-3 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-shadow shadow-lg shadow-orange-200">
              Browse Active Offers
            </button>
          </div>
        </div>

        {/* Right Image Side */}
        <div className="w-full md:w-1/2 relative">
         <Image
            src="/HeroImage.png"
            alt="Happy shoppers with bags"
            width={500}
            height={500}
            priority
            className="w-[742px] h-[514px] h-auto object-cover rounded-2xl"
          />
         
        </div>

      </div>
    </section>
  );
};

