import { Bell } from 'lucide-react';

function OfferCreatedNotificationIcon() {
    return (
            <Bell className="w-6 h-6 text-orange-600" />
    );
}
function LikeNotificationIcon() {
    return (
        <Bell className="w-6 h-6 text-orange-600" />
    );
}

const ActivityIcons = {
    OFFER_CREATED: () => <OfferCreatedNotificationIcon />,
    POST_LIKE: () => <LikeNotificationIcon />,
};

export type ActivityType = keyof typeof ActivityIcons;

export function ActivityIcon({ type }: { type: ActivityType }) {
    return <>
        <div className="bg-orange-50 rounded-full">
            {ActivityIcons[type]()}
        </div>
    </>;
}