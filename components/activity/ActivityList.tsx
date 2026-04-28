import { ActivityData } from "@/types/activity";
import Activity from "./Activity";


interface Props {
    activities: ActivityData[];
}

export default function ActivityList({activities}: Props) {

    return (
        <div className="flex flex-col gap-2">
            {activities.map((act) => (
                <Activity prop={act} key={act.id} />
            ))}
        </div>
    )
}


