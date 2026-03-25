"use client"
import ChatButton from "@/components/chat/ChatButton";
import { useUserById } from "@/features/user/useUserById";
import { use } from "react";


interface Props {
    params: Promise<{ userId: string }>;
}

export default function ProfilePage({ params }: Props) {
    const { userId } = use(params);

    const { data: user } = useUserById({ id: userId });

    if (!user) {
        return (
            <section className="pt-14 px-6">
                <p className="text-center text-gray-500">User not found.</p>
            </section>
        );
    }

    return (
        <section className="w-200 h-200 bg-gray-200">
            <ChatButton targetUserId={user.id} />
        </section>
    )
}