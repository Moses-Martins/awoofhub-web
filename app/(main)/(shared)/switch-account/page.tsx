'use client'
import { Button } from '@/components/button/Button';
import SwitchAccountModal from '@/components/modals/SwitchAccountModal';
import { useUser } from '@/features/user/useUser';
import { BarChart3, Check, Megaphone, PenLine, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  individual: boolean;
  business: boolean;
}

const features: Feature[] = [
  {
    icon: <PenLine size={18} />,
    title: 'Discover Verified Deals',
    description: 'Find trusted discounts, giveaways and offers in one place',
    individual: true,
    business: false,
  },
  {
    icon: <Megaphone size={18} />,
    title: 'Promote Your Offers',
    description: 'Reach students and young professionals with your deals',
    individual: false,
    business: true,
  },
  {
    icon: <BarChart3 size={18} />,
    title: 'Insights & Performance',
    description: 'Track engagement and performance of your promotions',
    individual: false,
    business: true,
  },
  {
    icon: <Sparkles size={18} />,
    title: 'Curated & Trusted Content',
    description: 'All deals are verified to avoid spam and scams',
    individual: true,
    business: true,
  },
];

export default function SwitchAccountPage() {
  const { data: currentUser } = useUser();
  const router = useRouter();

  const isBusiness = currentUser?.role === 'business';
  const targetRole = isBusiness ? 'user' : 'business';

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4 font-sans text-gray-900 mb-[80px] lg:mb-[30px]">

      {/* Header */}
      <div className="text-center max-w-lg mb-8">
        <h1 className="text-xl sm:text-3xl font-bold mb-2">
          {isBusiness ? 'Switch to a Personal Account' : 'Switch to a Business Account'}
        </h1>

        <p className="text-gray-600 text-sm sm:text-base leading-snug">
          {isBusiness
            ? 'Switch to a personal account for a simpler experience. You will lose access to business tools like promotions and analytics, but your profile and saved deals will remain the same.'
            : 'Switch to a business account to promote deals, reach more people, and access insights. Your profile and saved deals will remain the same.'}
        </p>
      </div>

      {/* Comparison */}
      <div className="w-full max-w-2xl bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden p-3 sm:p-8">

        <div className="grid grid-cols-12 mb-4">
          <div className="col-span-6"></div>
          <div className="col-span-3 text-center font-bold text-sm sm:text-lg">Individual</div>
          <div className="col-span-3 text-center font-bold text-sm sm:text-lg">Business</div>
        </div>

        {features.map((feature, index) => (
          <div key={index} className="grid grid-cols-12 py-5 border-t border-gray-100 items-center">

            <div className="col-span-6 pr-4">
              <div className="flex items-center gap-2 mb-1">
                {feature.icon}
                <h3 className="font-bold text-base">{feature.title}</h3>
              </div>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>

            <div className="col-span-3 flex justify-center">
              {feature.individual && <Check size={20} />}
            </div>

            <div className="col-span-3 flex justify-center">
              {feature.business && <Check size={20} />}
            </div>
          </div>
        ))}
      </div>

  
      <div className="flex gap-3 mt-8 w-80 sm:w-100 justify-center">
        <Button
          onClick={() => router.push('/')}
          className="!bg-gray-200 !text-black !rounded-2xl"
        >
          Cancel
        </Button>

        <SwitchAccountModal targetRole={targetRole} />
      </div>
    </div>
  );
}