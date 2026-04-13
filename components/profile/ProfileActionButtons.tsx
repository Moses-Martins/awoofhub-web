'use client';

import AlertButton from "../alert/Alert";
import ChatWrapper from "../chat/ChatButton";


interface Props {
    targetUserId: string;
}


export default function ProfileActionButtons({ targetUserId }: Props) {
    return (
        <>
            <AlertButton businessId={targetUserId} />

            <div className="bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                <ChatWrapper targetUserId={targetUserId}>
                    Message
                </ChatWrapper>
            </div>
        </>
    );
}