import { cn } from "@/lib/utils";
import { formatTimeAgo } from "@/utils/formatTimeAgo";
import { ComponentProps } from "react";
import { ActivityIcon, ActivityType } from "./ActivityIcon";


interface ActivityCardProps extends ComponentProps<'div'> {
    title: string;
    type: ActivityType;
    message: string;
    isRead: boolean;
    createdAt: string;
}

export default function ActivityCard({ type, title, isRead, createdAt, message, ...rest }: ActivityCardProps) {

    return (
        <div
            className={cn(
                "max-w-4xl mx-auto border border-gray-100 rounded-2xl p-6 shadow-sm flex items-start gap-4 transition-colors",
                !isRead ? "bg-orange-50" : "bg-white"
            )}
            {...rest}>

            {/* Icon Section */}
            <div className="flex-shrink-0">
                <div className="bg-orange-50 p-3 rounded-full">
                    <ActivityIcon type={type} />
                </div>
            </div>

            <div className="flex-grow">
                <div className="flex justify-between items-start mb-1">
                    <h2 className="text-xl font-semibold text-gray-800 leading-tight">
                        {title}
                    </h2>
                    <span className="text-orange-500 text-sm font-semibold whitespace-nowrap">
                        {formatTimeAgo(createdAt)}
                    </span>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                    {message}
                </p>
            </div>
        </div>

    )
}