'use client'
import OfferService from '@/services/offer-service';
import { Offer } from '@/types/offer';
import { useQuery } from '@tanstack/react-query';


type GetOffersByCategoryOptions = {
    categoryId: string;
};

export const getOffersByCategory = async ({ categoryId }: GetOffersByCategoryOptions): Promise<Offer[]> => {
    const result = await OfferService.getOffersByCategory(categoryId);
    return result.data;
};

export const useOffersByCategory = ({ categoryId }: GetOffersByCategoryOptions) => {
    const { data, isFetching, isFetched } = useQuery({
        queryKey: ["offers", categoryId],
        queryFn: () => getOffersByCategory({categoryId}),
        initialData: []
    });

    return {
        data,
        isFetching,
        isFetched
    };
};

