"use client"

import { OfferError } from "@/components/offers/OfferError";
import OfferInfiniteList from "@/components/offers/OfferInfiniteList";
import OfferListSkeleton from "@/components/offers/OfferListSkeleton";
import { useRandomInfiniteOffers } from "@/features/offers/useRandomInfiniteOffers";
import { useMemo } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default function RandomOffersPage() {
    const { data, isFetching, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage, isError, error } = useRandomInfiniteOffers({
        limit: 4,
    });

    const allOffers = useMemo(() => {
        return data?.pages.flatMap((page) => page.data) ?? [];
    }, [data]);

    return (
        <ErrorBoundary fallback={<OfferError />}>
            <section className="p-6 mb-15 lg:mb-0">
                {isLoading && <OfferListSkeleton number={4} />}
                {!isLoading && !isFetching && allOffers.length === 0 && (
                    <p className="text-gray-500 text-center">No offers available.</p>
                )}
                {isError && <div>{error?.message}</div>}
                {!isLoading && allOffers.length > 0 &&
                    <OfferInfiniteList
                        offers={allOffers}
                        hasNextPage={hasNextPage}
                        isFetchingNextPage={isFetchingNextPage}
                        fetchNextPage={fetchNextPage}
                    />
                }
            </section>
        </ErrorBoundary>
    );

}