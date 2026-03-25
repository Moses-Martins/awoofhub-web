import ActivityService from "@/services/activity-service";
import { useQuery } from "@tanstack/react-query";

export const getActivityCount = async (): Promise<number> => {
    const result = await ActivityService.getActivityCount();
    return result.data;
};


export const useActivityCount = () => {
    const { data, isFetching, isFetched } = useQuery({
        queryKey: ['notifications', 'count'],
        queryFn: () => getActivityCount(),
        refetchInterval: 5000,
    });

    return {
        data,
        isFetching,
        isFetched
    };
};
