'use client';
import { Notifications } from '@/components/notifications/Notifications';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { ChatProvider } from './core/chat-provider';
import ErrorBoundaryProvider from './core/error-boundary-provider';
import ReactQueryProvider from './core/react-query-provider';

const AUTH_PATHS = [
    '/login', '/signup', '/signin',
    '/verify-email', '/email-verified', '/verify-email-error',
    '/forgot-password', '/reset-password',
];

export default function AppProvider({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const isAuthRoute = AUTH_PATHS.some((path) => pathname?.startsWith(path));

    return (
        <>
            <Notifications />
            <ErrorBoundaryProvider>
                <ReactQueryProvider>
                    <ReactQueryDevtools initialIsOpen={false} />
                    <ChatProvider>
                        {children} 
                    </ChatProvider>
                </ReactQueryProvider>
            </ErrorBoundaryProvider>
        </>
    );
} 