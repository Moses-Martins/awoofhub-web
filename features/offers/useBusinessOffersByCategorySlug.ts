'use client'
import OfferService from '@/services/offer-service';
import { ApiResponse } from '@/types/api-response';
import { Offer } from '@/types/offer';
import { useQuery } from '@tanstack/react-query';


type GetOffersByCategoryOptions = {
    categorySlug: string,
    page: number,
    limit: number,
};

export const getBusinessOffersByCategorySlug = ({ categorySlug, page, limit }: GetOffersByCategoryOptions): Promise<ApiResponse<Offer[]>> => {
    return OfferService.getBusinessOffersByCategorySlug(categorySlug, page, limit);
};

export const useBusinessOffersByCategorySlug = ({ categorySlug, page, limit = 10 }: GetOffersByCategoryOptions) => {

    const { data, isFetching, isError, error } = useQuery({
        queryKey: ["business", 'offers', categorySlug, page, limit],
        queryFn: () => getBusinessOffersByCategorySlug({ categorySlug, page, limit }),
        enabled: !!categorySlug,
    });

    return {
        data,
        isFetching,
        isError,
        error
    };

};

