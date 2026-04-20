"use client"

import BusinessOfferList from "@/components/offers/business/BusinessOfferList";
import { OfferError } from "@/components/offers/OfferError";
import OfferListSkeleton from "@/components/offers/OfferListSkeleton";
import { useOffersByUserId } from "@/features/offers/useoffersByUserId";
import { useUser } from "@/features/user/useUser";
import { Spinner } from "@chakra-ui/react";
import { useEffect, useMemo } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useInView } from "react-intersection-observer";

export default function BusinessOffersPage() {

    const [ref, inView] = useInView();

    const { data: user } = useUser();
    

    const { data, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage, isError, error } = useOffersByUserId({
        userId: user?.id ?? "", limit: 8,
    });


    const allOffers = useMemo(() => {
        return data?.pages.flatMap((page) => page.data) ?? [];
    }, [data]);


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
        <ErrorBoundary fallback={<OfferError />}>
            <section className="p-6 pt-4 mb-15 lg:mb-0 bg-white">
                <BusinessOfferList offers={allOffers} />
                <div ref={ref} className="h-10 flex items-center justify-center mt-6">
                    {isFetchingNextPage && (
                        <Spinner className="mt-5 w-17 h-17 text-primary" data-testid="loading" />
                    )}
                    {!hasNextPage && allOffers.length > 0 && <p className="text-center text-[14px] sm:text-[16px]">No more offers</p>}
                </div>
            </section>
        </ErrorBoundary>
    );

}