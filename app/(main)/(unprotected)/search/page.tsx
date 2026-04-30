"use client";

import { OfferError } from "@/components/offers/OfferError";
import OfferInfiniteList from "@/components/offers/OfferInfiniteList";
import OfferListSkeleton from "@/components/offers/OfferListSkeleton";
import { useSearchOffers } from "@/features/offers/useSearchOffers";
import { Spinner } from "@chakra-ui/react";
import { Suspense, use, useMemo } from "react";
import { ErrorBoundary } from "react-error-boundary";

interface SearchProps {
    searchParams: Promise<{ q: string | undefined }>;
}

function SearchResults({ searchParams }: SearchProps) {
    const { q } = use(searchParams) ?? { q: "" };

    const { data, isFetching, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage, isError, error } = useSearchOffers({ query: q ?? "", limit: 8 });

    const allOffers = useMemo(
        () => data?.pages.flatMap((page) => page.data) ?? [],
        [data]
    );

    return (
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
    );
}

export default function Search(props: SearchProps) {
    return (
        <Suspense fallback={<section className="pt-14 flex justify-center"><Spinner size="xl" /></section>}>
            <ErrorBoundary fallback={<OfferError />}>
                <SearchResults searchParams={props.searchParams} />
            </ErrorBoundary>
        </Suspense>
    );
}