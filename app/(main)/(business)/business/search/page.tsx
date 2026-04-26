"use client";

import BusinessOfferInfiniteList from "@/components/offers/business/BusinessOfferInfiniteList";
import { OfferError } from "@/components/offers/OfferError";
import OfferListSkeleton from "@/components/offers/OfferListSkeleton";
import { useSearchBusinessOffers } from "@/features/offers/useSearchBusinessOffer";
import { Spinner } from "@chakra-ui/react";
import { Suspense, use, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

interface SearchProps {
    searchParams: Promise<{ q: string | undefined }>;
}

function SearchResults({ searchParams }: SearchProps) {
    const { q } = use(searchParams) ?? { q: "" };

    const [page, setPage] = useState(1);

    const { data, isFetching, isError, error } = useSearchBusinessOffers({ query: q ?? "", page, limit: 5 });

   const offers = data?.data ?? [];

    return (
        <section className="pt-6 px-6 mb-15 lg:mb-0 bg-white min-h-screen">
            <div className="overflow-x-auto min-h-[300px]">
                {isFetching && !data ? (
                    <OfferListSkeleton number={4} />
                ) : isError ? (
                    <div>{error?.message}</div>
                ) : offers.length === 0 ? (
                    <p className="text-center text-gray-500">No offers found.</p>
                ) : (
                    <BusinessOfferInfiniteList data={data} page={page} setPage={setPage} />
                )}
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