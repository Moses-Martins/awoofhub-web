'use client';

import { User } from '@/types/user';
import { usePathname } from 'next/navigation';
import { TabButton } from '../tabButton/TabButton';


interface Props {
    user: User;
}

export default function Tabs({user}: Props) {
  const pathname = usePathname();

  const segments = pathname.split('/').filter(Boolean);

  const basePath = `/${segments[0]}/${segments[1]}`;

  const allTabs = [
    { title: 'Offers', href: `${basePath}/offers`, businessHidden: true },
    { title: 'About', href: basePath, businessHidden: false },
  ];

  const visibleTabs = allTabs.filter(tab => {
    if (user.role === 'business' && tab.businessHidden) {
      return false;
    }
    return true;
  });

  return (
    <div className="mt-4 inline-flex gap-6 overflow-x-auto">
      {visibleTabs.map((item) => {
        const isActive = pathname === item.href;

        return (
          <TabButton
            key={item.href}
            title={item.title}
            isActive={isActive}
            href={item.href}
          />
        );
      })}
    </div>
  );
}