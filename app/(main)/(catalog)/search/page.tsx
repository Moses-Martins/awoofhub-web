"use client";

import { Spinner } from "@chakra-ui/react";
import { Suspense, use, useEffect, useMemo } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useInView } from "react-intersection-observer";

import { OfferError } from "@/components/offers/OfferError";
import OfferList from "@/components/offers/OfferList";
import OfferListSkeleton from "@/components/offers/OfferListSkeleton";
import { useSearchedOffers } from "@/features/offers/useSearchedOffers";

interface SearchProps {
    searchParams: Promise<{ q: string | undefined }>;
}

function SearchResults({ searchParams }: SearchProps) {
    const { q } = use(searchParams) ?? { q: "" };

    const { data, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage, isError, error } = useSearchedOffers({ query: q ?? "", limit: 8 });

    const [ref, inView] = useInView();

    const allOffers = useMemo(
        () => data?.pages.flatMap((page) => page.data) ?? [],
        [data]
    );

    // Trigger next page load when in view
    useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, fetchNextPage, isFetchingNextPage]);

    // Early returns make JSX cleaner
    if (isFetching && allOffers.length === 0) {
        return (
            <section className="pt-14 px-6">
                <OfferListSkeleton number={4} />
            </section>
        );
    }

    if (isError) {
        return <div>{error?.message}</div>
    }

    if (!allOffers.length) {
        return (
            <section className="pt-14 px-6">
                <p className="text-center text-gray-500">No offers found.</p>
            </section>
        );
    }

    return (
        <section className="pt-14 px-6">
            {/* Offers List */}
            <OfferList offers={allOffers} />

            {/* Infinite Scroll Trigger */}
            <div ref={ref} className="h-10 flex items-center justify-center mt-6">
                {isFetchingNextPage && (
                    <Spinner className="mt-5 w-17 h-17 text-primary" data-testid="loading" />
                )}
                {!hasNextPage && allOffers.length > 0 && <p className="text-center">No more offers</p>}
            </div>
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