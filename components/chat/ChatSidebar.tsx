import { useUser } from "@/features/user/useUser";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ChannelList, ChannelPreviewMessenger, ChannelPreviewUIComponentProps, useChatContext } from "stream-chat-react";


export default function ChatSidebar() {
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
        <div className="size-full flex flex-col border-0 md:w-72">
            <ChannelList
                filters={{
                    type: 'messaging',
                    members: { $in: [user.id] },
                    last_message_at: { $exists: true }
                }}
                showChannelSearch
                Preview={CustomPreview}
                setActiveChannelOnMount={false}
            />

        </div>
    )
}