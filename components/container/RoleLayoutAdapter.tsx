"use client"
import { useUser } from '@/features/user/useUser';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export type Props = {
    children: ReactNode;
};

export default function RoleLayoutAdapter({ children }: Props) {
    const { data: User } = useUser();


    return (
        <div className={cn(User?.role === "business" ? "lg:ml-13" : "" )}>
            {children}
        </div>
    );
};