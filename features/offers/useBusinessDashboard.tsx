import OfferService from '@/services/offer-service';
import { BusinessDashboard } from '@/types/offer';
import { useQuery } from '@tanstack/react-query';

export const getBusinessDashboard = async (): Promise<BusinessDashboard> => {
    const result = await OfferService.getBusinessDashboard()
    return result.data;
};

export const useBusinessDashboard = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['dashboard'],
        queryFn: () => getBusinessDashboard(),
        refetchInterval: 180000,
        staleTime: 60000,
    });

    return { data, isLoading };
};