export default function FinalCTA() {
  return (
    <section className="max-w-[1400px] mx-auto bg-[#41210B] py-12 px-6 text-center">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-medium text-white mb-2 sm:mb-6">
          Ready to Reach More Customers
        </h2>
        <p className="text-sm sm:text-lg text-slate-300 mb-10">
          Join businesses already using AwoofHub to promote their deals to thousands of active deal seekers
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-[198px] bg-[#FF5C00] hover:bg-[#FF5C00]/50 text-white p-4.5 rounded-sm font-bold transition-colors">
            Start Posting Deals
          </button>
          <button className="w-[198px] border-2 border-[#FF5C00] text-[#FF5C00] hover:bg-[#FF5C00]/50 hover:text-white p-4 rounded-sm font-bold transition-all">
            Browse Marketplace
          </button>
        </div>
    </section>
  );
}