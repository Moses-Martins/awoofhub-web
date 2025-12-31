
export default function HeroSection() {

    return (
        <section className="relative pt-20 pb-12 px-6 text-center overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-100/50 blur-[120px] rounded-full -z-10" />


            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-xs font-bold mb-6 uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                The Marketplace Where Deals Find Customers
            </div>

            <h1 className="text-5xl md:text-5xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                Publish Your <span className="text-orange-600">Deals</span>, Reach <span className="text-orange-600">Deal Seekers</span>.
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                A centralized marketplace for businesses to cut through the social media noise.
                No algorithms. Just direct access to your target audience.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="w-full sm:w-auto px-8 py-4 bg-orange-600 text-white font-bold rounded-xl shadow-lg hover:bg-orange-700 hover:scale-[1.02] transition-all">
                    List Your Business
                </button>
                <button className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all">
                    Browse Active Deals
                </button>
            </div>

        </section>
    );
};



