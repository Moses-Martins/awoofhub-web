import { useQuery } from '@tanstack/react-query';

import { getUserService } from '@/services/auth-service';
import { UserData } from '@/types/user';


export const getAuthUser = (): Promise<UserData> => {
    return getUserService();
}; 

export const useUser = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['auth-user'],
        queryFn: () => getAuthUser(),
    });
    
 
    return { data, isLoading };
};