import { MessageSquareIcon } from "lucide-react";
import { Channel, ChannelHeader, MessageInput, MessageList, useChatContext, Window } from "stream-chat-react";

export default function ChatChannel() {
    
    const { channel } = useChatContext();
    if (!channel) {
        return (
            <div className="flex flex-col items-center justify-center size-full bg-gray-50 text-gray-400">
                <MessageSquareIcon size={48} />
                <h2 className="mt-4 text-xl font-semibold">Your Messages</h2>
                <p>Select a conversation from the list or search to start typing.</p>
            </div>
        );
    }

    return (
        <div className="w-full">
            <Channel>
                <Window>
                    <ChannelHeader />
                    <MessageList />
                    <MessageInput />
                </Window>
            </Channel>
        </div>
    )
}