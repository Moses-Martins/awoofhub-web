import OfferService from '@/services/offer-service';
import { ApiResponse } from '@/types/api-response';
import { Offer } from '@/types/offer';
import { useInfiniteQuery } from '@tanstack/react-query';


type GetSearchBusinessOffersOptions = {
    query: string,
    page?: number,
    limit: number,
};

export const getSearchBusinessOffers = ({ query, page = 1, limit }: GetSearchBusinessOffersOptions): Promise<ApiResponse<Offer[]>> => {
    return OfferService.searchBusinessOffers(query, page, limit);
};

export const useSearchBusinessOffers = ({ query, limit = 8 }: GetSearchBusinessOffersOptions) => {
    const {  data, isFetchingNextPage, isFetching, fetchNextPage, hasNextPage, isError, error } = useInfiniteQuery({
        queryKey: ['offers', query, limit],
        queryFn: ({ pageParam = 1 }) => getSearchBusinessOffers({ query, page: pageParam, limit }),

        getNextPageParam: (lastPage) => {
            if (!lastPage.meta) return undefined;

            const currentPage = Number(lastPage.meta.page);
            const totalPages = Number(lastPage.meta.totalPages);

            return currentPage < totalPages ? currentPage + 1 : undefined;
        },
        initialPageParam: 1,

    });

    return {
        data,
        isFetching,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isError, 
        error
    };
};

