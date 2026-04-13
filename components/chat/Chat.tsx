"use client"

import ChatChannel from "./ChatChannel";
import ChatSidebar from "./ChatSidebar";

interface ChatProps {
    open: boolean;
    openSidebar: () => void;
}

export default function Chat({open, openSidebar}: ChatProps) {
    return (
        <main className="relative w-full overflow-hidden shadow-sm h-[calc(100dvh-137px)] md:h-[calc(100dvh-80px)]">
            <div className="absolute bottom-0 top-0 flex w-full">
                
                <ChatSidebar
                    open={open}
                />
                <ChatChannel
                    open={!open}
                    openSidebar={openSidebar}
                />
            </div>
        </main>
    )
}