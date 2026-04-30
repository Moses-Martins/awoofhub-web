'use client'
import OfferService from '@/services/offer-service';
import { ApiResponse } from '@/types/api-response';
import { Offer } from '@/types/offer';
import { useQuery } from '@tanstack/react-query';


type GetOffersByBusinessId = {
    businessId: string,
    page: number,
    limit: number,
};

export const getOffersByBusinessId = ({ businessId, page, limit }: GetOffersByBusinessId): Promise<ApiResponse<Offer[]>> => {
    return OfferService.getOffersByUserId(businessId, page, limit);
};

export const useOffersByBusinessId = ({ businessId, page, limit = 10 }: GetOffersByBusinessId) => {

    const { data, isFetching, isError, error } = useQuery({
        queryKey: ['offers', "businessId", businessId, page, limit],
        queryFn: () => getOffersByBusinessId({ businessId, page, limit }),
        enabled: !!businessId,
    });

    return {
        data,
        isFetching,
        isError,
        error
    };
};

