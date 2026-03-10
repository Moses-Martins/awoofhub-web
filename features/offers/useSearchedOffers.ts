import OfferService from '@/services/offer-service';
import { ApiResponse } from '@/types/api-response';
import { Offer } from '@/types/offer';
import { useInfiniteQuery } from '@tanstack/react-query';


type GetSearchOffersOptions = {
    query: string,
    page?: number,
    limit: number,
};

export const getSearchedOffers = ({ query, page = 1, limit }: GetSearchOffersOptions): Promise<ApiResponse<Offer[]>> => {
    return OfferService.searchOffers(query, page, limit);
};

export const useSearchedOffers = ({ query, limit = 8 }: GetSearchOffersOptions) => {
    const {  data, isFetchingNextPage, fetchNextPage, hasNextPage, isError, error } = useInfiniteQuery({
        queryKey: ['offers', query, limit],
        queryFn: ({ pageParam = 1 }) => getSearchedOffers({ query, page: pageParam, limit }),

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
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isError, 
        error
    };
};

