import OfferService from '@/services/offer-service';
import { ApiResponse } from '@/types/api-response';
import { Offer } from '@/types/offer';
import { useQuery } from '@tanstack/react-query';


type GetSearchBusinessOffersOptions = {
    query: string,
    page: number,
    limit: number,
};

export const getSearchBusinessOffers = ({ query, page, limit }: GetSearchBusinessOffersOptions): Promise<ApiResponse<Offer[]>> => {
    return OfferService.searchBusinessOffers(query, page, limit);
};

export const useSearchBusinessOffers = ({ query, page, limit = 10 }: GetSearchBusinessOffersOptions) => {
     const { data, isFetching, isError, error } = useQuery({
        queryKey: ['offers', query, page, limit],
        queryFn: () => getSearchBusinessOffers({ query, page, limit }),
    });

    return {
        data,
        isFetching,
        isError,
        error
    };
};

