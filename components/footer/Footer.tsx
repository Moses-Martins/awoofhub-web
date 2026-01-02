import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Logo and Tagline */}
        <div className="flex flex-col gap-4">
          <Image
            src="/Logo.png"
            alt="Company Logo"
            width={500}
            height={500}
            priority
            className="w-40 h-auto"
          />
          <p className="text-slate-400 text-sm max-w-[200px]">
            The marketplace where deals find customers.
          </p>
        </div>

        {/* For Business Column */}
        <div>
          <h4 className="font-bold mb-4">For Business</h4>
          <ul className="flex flex-col gap-4 text-slate-400 text-sm">
            <li className="hover:text-[#FF5C00] cursor-pointer transition-colors">Post a Deal</li>
            <li className="hover:text-[#FF5C00] cursor-pointer transition-colors">Pricing</li>
            <li className="hover:text-[#FF5C00] cursor-pointer transition-colors">Analytics</li>
          </ul>
        </div>

        {/* For Users Column */}
        <div>
          <h4 className="font-bold mb-4">For Users</h4>
          <ul className="flex flex-col gap-4 text-slate-400 text-sm">
            <li className="hover:text-[#FF5C00] cursor-pointer transition-colors">Browse Deals</li>
            <li className="hover:text-[#FF5C00] cursor-pointer transition-colors">Categories</li>
            <li className="hover:text-[#FF5C00] cursor-pointer transition-colors">How it Works</li>
          </ul>
        </div>

        {/* Company Column */}
        <div>
          <h4 className="font-bold mb-4">Company</h4>
          <ul className="flex flex-col gap-4 text-slate-400 text-sm">
            <li className="hover:text-[#FF5C00] cursor-pointer transition-colors">About Us</li>
            <li className="hover:text-[#FF5C00] cursor-pointer transition-colors">Contact</li>
            <li className="hover:text-[#FF5C00] cursor-pointer transition-colors">Terms of Service</li>
            <li className="hover:text-[#FF5C00] cursor-pointer transition-colors">Privacy Policy</li>
          </ul>
        </div>

      </div>
    </footer>
  );
}