'use client'
import OfferService from '@/services/offer-service';
import { ApiResponse } from '@/types/api-response';
import { Offer } from '@/types/offer';
import { useInfiniteQuery } from '@tanstack/react-query';


type GetOffersByCategoryOptions = {
    categorySlug: string,
    page?: number,
    limit: number,
};

export const getOffersByCategorySlug = ({ categorySlug, page = 1, limit }: GetOffersByCategoryOptions): Promise<ApiResponse<Offer[]>> => {
    return OfferService.getOffersByCategorySlug(categorySlug, page, limit);
};

export const useOffersByCategorySlug = ({ categorySlug, limit = 8 }: GetOffersByCategoryOptions) => {

    const { data, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage, isError, error } = useInfiniteQuery({
        queryKey: ['offers', categorySlug, limit],
        queryFn: ({ pageParam = 1 }) => getOffersByCategorySlug({ categorySlug, page: pageParam, limit }),

        getNextPageParam: (lastPage) => {
            if (!lastPage.meta) return undefined;

            const currentPage = Number(lastPage.meta.page);
            const totalPages = Number(lastPage.meta.totalPages);

            return currentPage < totalPages ? currentPage + 1 : undefined;
        },
        initialPageParam: 1,
        enabled: !!categorySlug,

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

