import OfferService from '@/services/offer-service';
import { ApiResponse } from '@/types/api-response';
import { Offer } from '@/types/offer';
import { useInfiniteQuery } from '@tanstack/react-query';


type GetOffersOptions = {
    page?: number,
    limit?: number,
};

export const getOffers = ({ page = 1, limit = 8 }: GetOffersOptions): Promise<ApiResponse<Offer[]>> => {
    return OfferService.getAllOffers(page, limit);
};

export const useOffers = ({ limit }: GetOffersOptions) => {
    const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } = useInfiniteQuery({
        queryKey: ['offers'],
        queryFn: ({ pageParam = 1 }) => getOffers({ page: pageParam, limit }),

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
        isFetching,
        isFetchingNextPage
    };
};

