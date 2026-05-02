"use client"
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
    targetUserId: string;
    children: React.ReactNode;
}

export default function ChatButton({ targetUserId, children }: Props) {
    const router = useRouter();

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault(); 
        router.push(`/message/${targetUserId}`);
    };

    return (
        <button onClick={handleClick} className="cursor-pointer contents">
            {children}
        </button>
    );
}