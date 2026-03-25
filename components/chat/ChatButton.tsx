"use client"
import { useRouter } from "next/navigation";

interface Props {
    targetUserId: string;
}

export default function ChatButton({ targetUserId }: Props) {
    const router = useRouter();

    const handleMessage = async () => {
        router.push(`/message/${targetUserId}`);
    };

    return (
        <button className="bg-primary" onClick={handleMessage}>
            Message
        </button>
    );
}