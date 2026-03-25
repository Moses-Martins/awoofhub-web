'use client'

import ChatSidebar from "@/components/chat/ChatSidebar";
import { use, useEffect } from "react";
import { Channel, ChannelHeader, MessageInput, MessageList, useChatContext, Window } from "stream-chat-react";


interface Props {
    params: Promise<{ targetUserId: string }>;
}

export default function ChatConversation({ params }: Props) {
    const { client, setActiveChannel } = useChatContext();
    const { targetUserId } = use(params);

    useEffect(() => {
        const initChannel = async () => {
            if (!client?.userID || !targetUserId) return;

            const channel = client.channel("messaging", {
                members: [client.userID, targetUserId],
            });

            await channel.watch();
            setActiveChannel(channel);
        };

        initChannel();
    }, [client, targetUserId, setActiveChannel]);


    return (
        <main className="relative w-full overflow-hidden rounded-2xl bg-primary shadow-sm h-[calc(100vh-80px)]">
            <div className="absolute bottom-0 top-0 flex w-full">
                <ChatSidebar />
                <div className="w-full">
                    <Channel>
                        <Window>
                            <ChannelHeader />
                            <MessageList />
                            <MessageInput />
                        </Window>
                    </Channel>
                </div>
            </div>
        </main>
    )
};



