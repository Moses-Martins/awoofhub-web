"use client"

import ChatChannel from "./ChatChannel"
import ChatSidebar from "./ChatSidebar"

export default function Chat() {
    return (
        <main className="relative w-full overflow-hidden rounded-2xl bg-primary shadow-sm h-[calc(100vh-80px)]">
            <div className="absolute bottom-0 top-0 flex w-full">
                <ChatSidebar />
                <ChatChannel />
            </div>
        </main>
    )
}