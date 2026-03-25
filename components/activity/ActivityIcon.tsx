import { Bell } from 'lucide-react';

function OfferCreatedNotificationIcon() {
    return (
        <div className="bg-orange-50 p-3 rounded-full">
            <Bell className="w-6 h-6 text-orange-600" />
        </div>
    );
}
function LikeNotificationIcon() {
    return (
         <div className="bg-orange-50 p-3 rounded-full">
            <Bell className="w-6 h-6 text-orange-600" />
        </div>
    );
}

const ActivityIcons = {
    OFFER_CREATED: () => <OfferCreatedNotificationIcon />,
    POST_LIKE: () => <LikeNotificationIcon />,
};

export type ActivityType = keyof typeof ActivityIcons;

export function ActivityIcon({ type }: { type: ActivityType }) {
    return <>{ActivityIcons[type]()}</>;
}