'use client';
import useInitializeChatClient from "@/features/chat/useInitializeChatClient";
import { ReactNode } from 'react';
import { Chat as StreamChat } from "stream-chat-react";

export default function ChatProvider({ children }: { children: ReactNode }) {
    const chatClient = useInitializeChatClient();

    if (!chatClient) {
        return <div>Loading chat...</div>;
    }

    return (
        <StreamChat client={chatClient}>
            {children}
        </StreamChat>
    );
}