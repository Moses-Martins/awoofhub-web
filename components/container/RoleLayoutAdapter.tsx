"use client"
import { useUser } from '@/features/user/useUser';
import clsx from 'clsx';
import { ReactNode } from 'react';

export type Props = {
    children: ReactNode;
};

export default function RoleLayoutAdapter({ children }: Props) {
    const { data: User } = useUser();


    return (
        <div className={clsx(User?.role === "business" ? "lg:ml-13" : "" )}>
            {children}
        </div>
    );
};