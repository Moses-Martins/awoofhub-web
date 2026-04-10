import Image from 'next/image';
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaFacebook, FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    help: ["Return & Order", "Cancellations", "FAQ", "How it works", "Contact Us", "Support Center"],
    quickLinks: ["Privacy Policy", "Terms & Conditions", "Business Registration", "Advertise with us", "Become an Affiliate"],
    forBusiness: ["Post a Deal", "Pricing", "Business Registration"],
    company: ["Contact Us", "About Us", "Careers"]
  };

  return (
    <footer className="bg-black text-white py-10 px-6 md:px-12 lg:px-10 font-sans">
      <div className="max-w-[1440px] mx-auto m-[60px] lg:m-[0]">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-14 gap-8 mb-16">

          {/* Brand Column */}
          <div className="lg:col-span-3">
            <Image
              src="/LogoWhite.png"
              alt="Logo"
              width={500}
              height={500}
              priority
              className="w-40 h-auto"
            />
            <p className="text-gray-400 text-sm mt-2 mb-6 max-w-xs">
              The marketplace where deals find customers
            </p>
            <div className="flex gap-5">
              <FaTwitter className="w-5 h-5 cursor-pointer hover:text-gray-400 transition-colors" />
              <FaFacebook className="w-5 h-5 cursor-pointer hover:text-gray-400 transition-colors" />
              <FaLinkedinIn className="w-5 h-5 cursor-pointer hover:text-gray-400 transition-colors" />
              <RiInstagramFill className="w-5 h-5 cursor-pointer hover:text-gray-400 transition-colors" />
              <FaYoutube className="w-5 h-5 cursor-pointer hover:text-gray-400 transition-colors" />
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold mb-6">Help</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              {footerLinks.help.map(link => <li key={link} className="hover:text-white cursor-pointer">{link}</li>)}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-semibold mb-6">Quick Link</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              {footerLinks.quickLinks.map(link => <li key={link} className="hover:text-white cursor-pointer">{link}</li>)}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-semibold mb-6">For Business</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              {footerLinks.forBusiness.map(link => <li key={link} className="hover:text-white cursor-pointer">{link}</li>)}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-semibold mb-6">Company</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              {footerLinks.company.map(link => <li key={link} className="hover:text-white cursor-pointer">{link}</li>)}
            </ul>
          </div>

          {/* App Download Column */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-semibold mb-2">Download App</h3>
            <p className="text-xs text-gray-400 mb-4">More discounts for New App User Only</p>
            <div className="flex items-start gap-3">
              {/* QR Code Placeholder */}
              <Image
                src="/QrCode.png"
                alt="QrCode"
                width={500}
                height={500}
                className="w-20 h-20"
              />
              <div className="flex flex-col gap-2">
                <Image
                  src="/getPlayStore.png"
                  alt="PlayStore"
                  width={500}
                  height={500}
                  className="w-30 h-9"
                />
                <Image
                  src="/getAppStore.png"
                  alt="AppStore"
                  width={500}
                  height={500}
                  className="w-30 h-9"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-xs text-gray-400">
            All right reserved &copy;{currentYear} AwoofHub.com.
          </p>
        </div>
      </div>
    </footer>
  );
};

