"use client"
import { useUser } from '@/features/auth/useUser';
import { usePathname, useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';
import Loading from '../loading/Loading';


export type ProtectedProps = {
    children: ReactNode;
};

export default function Protected({ children }: ProtectedProps) {
    const router = useRouter();
    const pathname = usePathname();
    const user = useUser();

    useEffect(() => {
        if (!user.data && !user.isLoading) {
            router.replace(`/signin?redirect=${pathname}`);
        }
    }, [user, pathname, router]);

    if (user.isLoading) {
        return (
                <Loading />
        );
    }

    if (!user.data && !user.isLoading) return null;

    return <>{children}</>;
};