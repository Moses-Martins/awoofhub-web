'use client';
import { Notifications } from '@/components/notifications/Notifications';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import ReactQueryProvider from './react-query-provider';

export default function AppProvider({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const isAuthRoute = AUTH_PATHS.some((path) => pathname?.startsWith(path));

    return (
        <>
            <Notifications />
            <ReactQueryProvider>
                <ReactQueryDevtools initialIsOpen={false} />
                    {children}
            </ReactQueryProvider>
        </>
    );
} 