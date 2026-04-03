'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

const heroImages = [
  { src: "/HeroImage.png", alt: "Happy shoppers with bags" },
  { src: "/HeroImage2.jpg", alt: "Exclusive deals" },
  { src: "/HeroImage3.jpg", alt: "Save money on offers" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 3000); // changes every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-6 py-6 sm:py-12 md:px-14 lg:py-24">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start gap-12">
        
        {/* Left Content Side */}
        <div className="w-full md:w-1/2 space-y-3 sm:space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-2 py-1 xs:px-3 xs:py-2 bg-gray-50 border border-gray-100 rounded-full shadow-sm">
            <span className="w-2 h-2 xs:w-3 xs:h-3 bg-orange-600 rounded-full animate-pulse"></span>
            <span className="text-[10px] xs:text-xs md:text-[10px] lg:text-xs font-semibold text-orange-600 uppercase tracking-wide">
              The Marketplace Where Deals Find You
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0C0C0C] leading-tight">
            Discover the best deals in your city!
          </h1>

          {/* Description */}
          <p className="text-base lg:text-lg font-medium text-muted max-w-lg leading-relaxed">
            Find exclusive discounts on food, services, and entertainment near
            you. Save money on things you love.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="w-full md:w-40 py-3 border-1 border-orange-600 text-orange-600 text-sm sm:text-base font-bold rounded-sm hover:bg-orange-50 transition-colors">
              Post an Offer
            </button>
            <button className="w-full md:w-56 py-3 bg-orange-600 text-white font-bold rounded-sm text-sm sm:text-base hover:bg-orange-700 transition-shadow shadow-orange-200">
              Browse Active Offers
            </button>
          </div>
        </div>

        {/* Right Image Carousel */}
        <div className="w-full md:w-1/2 relative flex justify-center">
          <div className="relative h-[170px] w-full md:w-[500px] md:h-[400px] lg:w-[742px] lg:h-[400px]">
            {heroImages.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                width={742}
                height={514}
                priority={index === 0}
                className={`absolute inset-0 w-full h-full object-cover rounded-2xl transition-opacity duration-700
                  ${index === current ? "opacity-100" : "opacity-0"}`}
              />
            ))}
          </div>

          {/* Dot Indicators */}
          <div className="absolute bottom-4 flex gap-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors
                  ${index === current ? "bg-orange-600" : "bg-gray-300"}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}