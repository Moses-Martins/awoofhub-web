"use client"
import { useUser } from '@/features/user/useUser';
import { usePathname, useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';
import Loading from '../loading/Loading';

export type ProtectedProps = {
    role?: "user" | "business";
    children: ReactNode;
};

export default function Protected({ role, children }: ProtectedProps) {
    const router = useRouter();
    const pathname = usePathname();
    const user = useUser();

    useEffect(() => {
        if (!user.isLoading) {
            if (!user.data) {
                router.replace(`/login?redirect=${pathname}`);
            }
            else if (role && user.data.role !== role) {
                router.replace('/unauthorized');
            }
        }
    }, [user.data, user.isLoading, pathname, router, role]);

    if (user.isLoading) {
        return <Loading />;
    }

    const canAccess = user.data && (!role || user.data.role === role);

    if (!canAccess) {
        return null;
    }

    return <>{children}</>;
};