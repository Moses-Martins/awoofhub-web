"use client"
import { useActivityReadStatus } from "@/features/activity/useActivityReadStatus";
import { ActivityData } from '@/types/activity';
import { useRouter } from "next/navigation";
import ActivityCard from "./ActivityCard";


interface Props {
  prop: ActivityData;
}

export default function Activity({ prop }: Props) {
    const router = useRouter();
    const { markAsRead } = useActivityReadStatus({ id: prop.id });


    const navigate = (href: string) => () => {
        router.push(href);

        // Set the notification as read
        if (prop.isRead) return;
        markAsRead();
    };

    if (prop.type === 'OFFER_CREATED') {
        return (
            <ActivityCard
                title={prop.title}
                createdAt={prop.createdAt}
                isRead={prop.isRead}
                message={prop.message}
                type={prop.type}
                onClick={navigate(`/offers/${prop.entityId}`)}
            />
        );
    }

    return null;
}