'use client';
import { Notifications } from '@/components/notifications/Notifications';
import { RoleProvider } from '@/context/RoleContext';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode } from 'react';
import ErrorBoundaryProvider from './core/error-boundary-provider';
import ReactQueryProvider from './core/react-query-provider';

export default function AppProvider({ children }: { children: ReactNode }) {
    return (
        <>
            <Notifications />
            <ErrorBoundaryProvider>
                <ReactQueryProvider>
                    <ReactQueryDevtools initialIsOpen={false} />
                    <RoleProvider>
                        {children}
                    </RoleProvider>
                </ReactQueryProvider>
            </ErrorBoundaryProvider>
        </>

    );
}