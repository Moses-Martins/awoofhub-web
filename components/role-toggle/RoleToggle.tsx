import { useState } from "react";

type Tab = 'Deal Seekers' | 'Business';

export default function RoleToggle() {
  const [activeTab, setActiveTab] = useState<Tab>('Deal Seekers');

  return (
    <div className="flex items-center justify-center md:hidden">
      {/* Container */}
      <div className="relative flex w-80 h-14 p-1 bg-[#FF5A00] rounded-md items-center cursor-pointer border-[#FF5A00]">
        
        {/* Sliding Background Indicator */}
        <div
          className={`absolute h-[calc(100%-8px)] w-[calc(50%-4px)] bg-white rounded-md transition-all duration-300 ease-in-out shadow-sm ${
            activeTab === 'Business' ? 'translate-x-full' : 'translate-x-0'
          }`}
        />

        {/* Tab 1: Deal Seekers */}
        <button
          onClick={() => setActiveTab('Deal Seekers')}
          className={`relative z-10 flex-1 text-center font-semibold transition-colors duration-300 ${
            activeTab === 'Deal Seekers' ? 'text-black' : 'text-white'
          }`}
        >
          Deal Seekers
        </button>

        {/* Tab 2: Business */}
        <button
          onClick={() => setActiveTab('Business')}
          className={`relative z-10 flex-1 text-center font-semibold transition-colors duration-300 ${
            activeTab === 'Business' ? 'text-black' : 'text-white'
          }`}
        >
          Business
        </button>
      </div>
    </div>
  );
};

