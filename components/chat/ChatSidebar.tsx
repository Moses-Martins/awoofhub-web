import { useUser } from "@/features/user/useUser";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ChannelList, ChannelPreviewMessenger, ChannelPreviewUIComponentProps, InfiniteScroll, useChatContext } from "stream-chat-react";

interface ChatSidebarProps {
    open: boolean;
}

export default function ChatSidebar({ open }: ChatSidebarProps) {
    const router = useRouter();
    const { data: user } = useUser();
    if (!user?.id) return null;

    const { setActiveChannel } = useChatContext();

    useEffect(() => {
        setActiveChannel(undefined);
    }, [setActiveChannel]);


    const CustomPreview = (props: ChannelPreviewUIComponentProps) => {
        const { channel, onSelect } = props;
        const { client } = useChatContext();

        const members = Object.values(channel.state.members);
        const targetMember = members.find((m) => m.user?.id !== client.userID);

        const targetId = targetMember?.user?.id;

        const handleNavigation = (e: React.MouseEvent) => {
            onSelect?.(e);
            router.push(`/message/${targetId}`);
        };

        return (
            <div onClick={handleNavigation}>
                <ChannelPreviewMessenger {...props} />
            </div>
        );
    };

    return (
        <div className={cn("size-full flex-col border-0 md:flex md:w-72",
            open ? "flex" : "hidden"
        )}>
            <span className="hidden md:flex bg-white font-semibold text-lg p-3">Chats</span>
            <ChannelList
                filters={{
                    type: 'messaging',
                    members: { $in: [user.id] },
                    last_message_at: { $exists: true }
                }}
                Preview={CustomPreview}
                Paginator={InfiniteScroll}
                setActiveChannelOnMount={false}
            />
        </div>
    )
}
