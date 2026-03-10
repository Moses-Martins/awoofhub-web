'use client'
import OfferService from '@/services/offer-service';
import { Offer } from '@/types/offer';
import { useQuery } from '@tanstack/react-query';


type GetOffersByCategoryOptions = {
    categoryId: string;
    page: number,
    limit: number,
};

export const getOffersByCategory = async ({ categoryId, page, limit }: GetOffersByCategoryOptions): Promise<Offer[]> => {
    const result = await OfferService.getOffersByCategory(categoryId, page, limit);
    return result.data;
};

export const useOffersByCategory = ({ categoryId, page = 1, limit = 8 }: GetOffersByCategoryOptions) => {
    const { data, isFetching, isFetched } = useQuery({
        queryKey: ["offers", categoryId],
        queryFn: () => getOffersByCategory({categoryId, page, limit}),
        initialData: []
    });

    return {
        data,
        isFetching,
        isFetched
    };
};

