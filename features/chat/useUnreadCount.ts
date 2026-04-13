import { getMessagesCountService } from "@/services/chat-service";
import { useQuery } from "@tanstack/react-query";

export const getMessagesCount = async (): Promise<number> => {
    const result = await getMessagesCountService();
    return result.data.unreadCount;
};


export const useMessageCount = () => {
    const { data, isFetching, isFetched } = useQuery({
        queryKey: ['messages', 'count'],
        queryFn: () => getMessagesCount(),
        refetchInterval: 5000,
    });

    return {
        data,
        isFetching,
        isFetched
    };
};
