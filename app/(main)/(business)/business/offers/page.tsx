"use client"

import BusinessOfferPaginatedList from "@/components/offers/business/BusinessOfferPaginatedList";
import BusinessOfferPaginatedListSkeleton from "@/components/offers/business/BusinessOfferPaginatedListSkeleton";
import { OfferError } from "@/components/offers/OfferError";
import { useBusinessCategory } from "@/features/category/useBusinessCategory";
import { useOffersByBusinessId } from "@/features/offers/useOffersByBusinessId";
import { useUser } from "@/features/user/useUser";
import Link from "next/link";
import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default function BusinessOffersPage() {

    const [page, setPage] = useState(1);

    const { data: user } = useUser();

    const { data: Categories, isLoading: isCategoryLoading } = useBusinessCategory()


    const { data, isFetching, isError, error } = useOffersByBusinessId({
        businessId: user?.id ?? "", page, limit: 5,
    });

    const offers = data?.data ?? [];

    return (
        <ErrorBoundary fallback={<OfferError />}>
            <section className="p-6 pt-4 mb-15 lg:mb-0 bg-white min-h-screen max-w-[1440px] mx-auto">
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
                <div className="overflow-x-auto min-h-[300px]">
                    {isFetching && !data ? (
                        <BusinessOfferPaginatedListSkeleton />
                    ) : isError ? (
                        <div>{error?.message}</div>
                    ) : offers.length === 0 ? (
                        <p className="text-center text-gray-500">No offers found.</p>
                    ) : (
                        <BusinessOfferPaginatedList data={data} page={page} setPage={setPage} />
                    )}
                </div>
            </section>
        </ErrorBoundary>
    );

}