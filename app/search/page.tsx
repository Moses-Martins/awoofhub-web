"use client"
import { Suspense, use, useEffect, useMemo } from "react";

import OfferList from "@/components/offer/OfferList";
import { useSearchedOffers } from "@/features/offers/useSearchedOffers";
import { Spinner } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";


interface SearchProps {
    searchParams: Promise<{ q: string | undefined }>;
}

function SearchResults({ searchParams }: SearchProps) {

    const { q } = use(searchParams) ?? {};
    const { data, isFetchingNextPage, fetchNextPage, hasNextPage, isError, error } = useSearchedOffers({ query: q ?? "", limit: 8 });

    const [ref, inView] = useInView();

    const allOffers = useMemo(() => {
        return data?.pages.flatMap((page) => page.data) ?? [];
    }, [data]);

    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, fetchNextPage]);


    return (
        <section className="pt-14 px-6">
            {/* Pagination */}
            {/* Offers List */}
            <div>
                {isError ? (
                    <div>{error?.message}</div>
                ) : (
                    <OfferList offers={allOffers} />
                )}
            </div>

            {/* Infinite Scroll Trigger */}
            <div ref={ref} className="h-10 flex items-center justify-center mt-6">
                {isFetchingNextPage && <Spinner className="mt-5 w-17 h-17 text-primary" data-testid="loading" />}
                {!hasNextPage && <p>No more offers</p>}
            </div>
        </section>
    );
}



export default function Search(props: SearchProps) {
    return (
        <Suspense fallback={<section className="pt-14" />}>
            <SearchResults searchParams={props.searchParams} />
        </Suspense>
    );
}