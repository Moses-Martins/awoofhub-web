"use client"

import BusinessOfferList from "@/components/offers/business/BusinessOfferList";
import { OfferError } from "@/components/offers/OfferError";
import OfferListSkeleton from "@/components/offers/OfferListSkeleton";
import { useBusinessCategory } from "@/features/category/useBusinessCategory";
import { useOffersByUserId } from "@/features/offers/useoffersByUserId";
import { useUser } from "@/features/user/useUser";
import { Spinner } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useMemo } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useInView } from "react-intersection-observer";

export default function BusinessOffersPage() {

    const [ref, inView] = useInView();

    const { data: user } = useUser();

    const { data: Categories, isLoading: isCategoryLoading } = useBusinessCategory()


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
                <div className="flex flex-col gap-2 items-center mb-8">
                    <h2 className="text-primary font-bold text-2xl py-2 mb-2 md:mb-0">
                        Categories
                    </h2>

                    <div className="flex gap-4 lg:gap-6 overflow-x-auto scrollbar-hide">
                        {isCategoryLoading ? (
                            Array.from({ length: 6 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="px-5 py-2 rounded-full bg-gray-200 animate-pulse w-20 h-8"
                                />
                            ))
                        ) : Categories && Categories.length > 0 ? (
                            Categories.map((cat) => (
                                <Link
                                    key={cat.id}
                                    href={`/business/categories/${cat.slug}`}
                                    className="px-5 py-1.5 font-semibold rounded-full text-sm whitespace-nowrap transition-colors bg-secondary text-white hover:text-gray-700 hover:bg-gray-200"
                                >
                                    {cat.name}
                                </Link>
                            ))
                        ) : (
                            <p className="text-sm text-gray-500">No categories available</p>
                        )}
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <BusinessOfferList offers={allOffers} />
                </div>
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