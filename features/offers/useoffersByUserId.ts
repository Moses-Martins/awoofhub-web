'use client'
import OfferService from '@/services/offer-service';
import { ApiResponse } from '@/types/api-response';
import { Offer } from '@/types/offer';
import { useInfiniteQuery } from '@tanstack/react-query';


type GetOffersByUserId = {
    userId: string,
    page?: number,
    limit: number,
};

export const getOffersByUserId = ({ userId, page = 1, limit }: GetOffersByUserId): Promise<ApiResponse<Offer[]>> => {
    return OfferService.getOffersByUserId(userId, page, limit);
};

export const useOffersByUserId = ({ userId, limit = 8 }: GetOffersByUserId) => {

    const { data, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage, isError, error } = useInfiniteQuery({
        queryKey: ['offers', "userId", userId, limit],
        queryFn: ({ pageParam = 1 }) => getOffersByUserId({ userId, page: pageParam, limit }),

        getNextPageParam: (lastPage) => {
            if (!lastPage.meta) return undefined;

            const currentPage = Number(lastPage.meta.page);
            const totalPages = Number(lastPage.meta.totalPages);

            return currentPage < totalPages ? currentPage + 1 : undefined;
        },
        initialPageParam: 1,
        enabled: !!userId,

    });

    return {
        data,
        isFetching,
        fetchNextPage,
        hasNextPage,
        isError,
        error,
        isFetchingNextPage
    };
};

