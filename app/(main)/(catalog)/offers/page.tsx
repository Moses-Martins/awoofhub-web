import { Bell, CheckCircle2, ChevronRight, MapPin, Send, Share2, Star } from 'lucide-react';

const CouponDetail = () => {

    const ratingStats = [
    { label: '5 star', percentage: 41 },
    { label: '4 star', percentage: 15 },
    { label: '3 star', percentage: 10 },
    { label: '2 star', percentage: 6 }, // Corrected from the image's duplicate '3 star'
    { label: '1 star', percentage: 27 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans text-gray-800">
      {/* Breadcrumbs & Actions */}
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-6">
        <nav className="flex items-center text-sm text-gray-500 gap-2">
          <span>Home</span> <ChevronRight size={14} />
          <span>Coupons</span> <ChevronRight size={14} />
          <span className="font-medium text-gray-900">127797004</span>
        </nav>
        <div className="flex gap-4 text-sm text-gray-600">
          <button className="flex items-center gap-1 hover:text-blue-500 transition-colors">
            <Share2 size={18} /> Share
          </button>
        </div>
      </div>

      {/* Main Content Card */}
      <main className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Side: Image Section */}
          <div className="bg-gray-50 p-8 flex flex-col items-center justify-center border-r border-gray-100">
            <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
              <img 
                src="/api/placeholder/400/400" 
                alt="iPhone 15" 
                className="object-contain mix-blend-multiply"
              />
            </div>
            
            <div className="w-full mt-12 space-y-3">
              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all">
                Message Seller
              </button>
              <button className="w-full border border-red-200 text-red-500 text-sm font-medium py-2 rounded-lg hover:bg-red-50 transition-colors">
                Report this offer
              </button>
            </div>
          </div>

          {/* Right Side: Details Section */}
          <div className="p-8 space-y-6">
            <header className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-bold text-xs">
                    TZ
                  </div>
                  <span className="text-orange-500 font-medium hover:underline cursor-pointer flex items-center">
                    TechZone Store <ChevronRight size={16} />
                  </span>
                </div>
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">
                  In Stock
                </span>
              </div>

              <h1 className="text-3xl font-bold">
                <span className="text-red-600">$100 Off</span> iPhone 15
              </h1>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1 text-orange-400">
                  {[...Array(4)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  <Star size={16} className="text-gray-300" />
                  <span className="text-gray-400 text-sm ml-2">(250+ Reviews)</span>
                </div>
                <div className="flex items-center text-gray-400 text-xs gap-1">
                  <MapPin size={14} /> Ikeja, Lagos.
                </div>
              </div>
            </header>

            <section className="text-sm leading-relaxed text-gray-600 space-y-4">
              <h3 className="font-bold text-gray-900">Details</h3>
              <p>
                Upgrade to the power of the iPhone 15 and save big! Whether you're looking for the 
                advanced 48MP main camera or the lightning-fast A16 Bionic chip...
              </p>
              
              <p><strong>Key Highlights:</strong> Valid on 128GB, 256GB, and 512GB models.</p>
              
              <p>
                <strong>How to Use:</strong> Enter the promo code 
                <span className="bg-gray-100 px-2 py-1 rounded mx-1 font-mono text-gray-900">SAVE100</span> 
                at the TechZone checkout screen.
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-3 text-gray-700 italic">
                <strong>Pro Tip:</strong> This is a high-demand offer; we recommend checking out quickly!
              </div>

              <div className="inline-block bg-red-50 text-red-600 text-sm font-bold px-4 py-1 rounded-full border border-red-100">
                20% Off
              </div>
            </section>

            <hr className="border-gray-100" />

            <section className="space-y-2">
              <h3 className="font-bold text-xs uppercase tracking-wider text-gray-400">Terms & conditions</h3>
              <ul className="text-xs text-gray-500 list-disc pl-4 space-y-1">
                <li>Offer valid only on iPhone 15 models with 128GB storage or higher.</li>
                <li>Must apply promo code SAVE100 at checkout to redeem.</li>
                <li>Limited to one redemption per customer account.</li>
                <li>Offer valid until March 31, 2026, or while supplies last.</li>
              </ul>
            </section>
          </div>
        </div>

         <div className="max-w-6xl mx-auto bg-white p-8 space-y-12 font-sans">
      
      {/* Top Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start border-b border-gray-100 pb-10">
        {/* Store Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-bold">
              3C
            </div>
            <span className="text-orange-500 font-semibold flex items-center">
              3C HUB Electronics <ChevronRight size={18} />
            </span>
          </div>
          <button className="w-full bg-orange-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 font-bold hover:bg-orange-700 transition-colors">
            <Bell size={18} /> Set Alert to this Store
          </button>
        </div>

        {/* Leave a Rating */}
        <div className="text-center space-y-4 border-x border-gray-100 px-4">
          <h3 className="font-bold text-gray-800">Leave a Rating</h3>
          <p className="text-gray-400 text-xs">Rate your experience about this offer</p>
          <div className="flex justify-center gap-1 text-orange-400">
            {[...Array(5)].map((_, i) => <Star key={i} size={28} fill="currentColor" />)}
          </div>
        </div>

        {/* Safety Tips */}
        <div className="space-y-3">
          <h3 className="font-bold text-gray-800">Safety Tips</h3>
          <div className="space-y-2 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-green-500" />
              <span>86% positive ratings from 100K+ customers</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-green-500" />
              <span>10K+ recent orders from this brand</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-green-500" />
              <span>2+ years on AwoofHub</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Feedback Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Left: Ratings Bars */}
        <div className="md:col-span-4 space-y-6">
          <div>
            <h2 className="text-xl font-bold mb-2">All Ratings</h2>
            <div className="flex items-center gap-2">
              <div className="flex text-orange-400">
                {[...Array(3)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                <Star size={18} className="text-gray-300" />
                <Star size={18} className="text-gray-300" />
              </div>
              <span className="font-bold text-gray-900">3.5 out of 5</span>
            </div>
            <p className="text-sm text-gray-500 mt-1 font-bold">2,381 global ratings</p>
          </div>

          <div className="space-y-3">
            {ratingStats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-4 text-sm">
                <span className="w-12 text-gray-500">{stat.label}</span>
                <div className="flex-1 h-6 bg-gray-100 rounded-md overflow-hidden border border-gray-200">
                  <div 
                    className="h-full bg-orange-400 transition-all duration-500" 
                    style={{ width: `${stat.percentage}%` }}
                  />
                </div>
                <span className="w-8 text-right text-gray-400">{stat.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Comments Section */}
        <div className="md:col-span-8 space-y-8">
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Leave a Comment</h3>
            <p className="text-gray-400 text-sm">Share your thoughts about this offer with others</p>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Comments"
                className="w-full p-3 pr-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-600 text-white p-2 rounded-md hover:bg-orange-700">
                <Send size={16} />
              </button>
            </div>
          </div>

          <hr className="border-gray-100" />


          <hr className="border-gray-100" />

          {/* Individual Review */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img src="/api/placeholder/40/40" alt="Avatar" className="w-10 h-10 rounded-full object-cover" />
              <div>
                <p className="font-bold text-gray-900 leading-none">Moses Monday</p>
                <span className="text-[10px] text-gray-400 uppercase tracking-wide">22 March 2026, 12pm</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
      </div>
    </div>
      </main>
    </div>
  );
};

export default CouponDetail;