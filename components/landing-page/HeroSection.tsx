
export default function HeroSection() {

    return (
        <section className="relative pt-20 pb-12 px-6 text-center overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-100/50 blur-[120px] rounded-full -z-10" />


            <div className="inline-flex items-center gap-2 px-3 py-1 md:p-4 rounded-xl bg-white text-[#FE4F04] text-xs md:text-base font-semibold mb-6  tracking-wider">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                The Marketplace Where Deals Find Customers
            </div>

            <h1 className="text-2xl sm:text-5xl md:text-5xl tracking-tight mb-6 leading-[1.1]">
                Publish Your <span className="text-[#B05D38]">Deals</span>, Reach <span className="text-[#FE4F04]">Deal Seekers</span>.
            </h1>

            <p className="font-normal text-base sm:text-lg md:text-xl text-slate-600 mb-10 max-w-4xl mx-auto text-justify leading-relaxed">
               AwoofHub is a centralized marketplace where businesses publish promotions and users actively browse for deals. No algorithms. No social media noise. Just direct access to your target audience.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 font-normal">
                <button className="w-[230px] px-8 py-4 bg-orange-600 text-white rounded-sm shadow-lg hover:bg-orange-700 hover:scale-[1.02] transition-all">
                    List Your Business
                </button>
                <button className="w-[230px] px-8 py-4 border border-orange-500 text-orange-600 rounded-sm hover:bg-orange-100 transition-all">
                    Browse Active Deals
                </button>
            </div>

        </section>
    );
};



