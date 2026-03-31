"use client"
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
    targetUserId: string;
    children: React.ReactNode;
}

export default function ChatWrapper({ targetUserId, children }: Props) {
    const router = useRouter();

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault(); 
        router.push(`/message/${targetUserId}`);
    };

    return (
        <div onClick={handleClick} className="cursor-pointer">
            {children}
        </div>
    );
}