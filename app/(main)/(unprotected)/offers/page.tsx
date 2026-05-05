"use client";

import { OfferError } from "@/components/offers/OfferError";
import OfferInfiniteList from "@/components/offers/OfferInfiniteList";
import OfferListSkeleton from "@/components/offers/OfferListSkeleton";
import { useCategory } from "@/features/category/useCategory";
import { useFilter } from '@/features/offers/useFilter';
import { useOffers } from "@/features/offers/useOffers";
import { Spinner } from "@chakra-ui/react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Suspense, use, useMemo } from "react";
import { ErrorBoundary } from "react-error-boundary";

type FilterParams = {
    search?: string;
    category?: string;
    minRating?: number;
    createdFrom?: string;
    createdTo?: string;
};

interface FilterProps {
    searchParams: Promise<FilterParams>;
}

function FilterResults({ searchParams }: FilterProps) {

    const params = use(searchParams);
    const { search, category, minRating, createdFrom, createdTo } = params;
    const { data: categories } = useCategory();
    const updateFilter = useFilter("/offers");


    const { data, isFetching, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage, isError, error } = useOffers({ search: search ?? "", category: category ?? "", minRating: minRating ?? 0, createdFrom: createdFrom ?? "", createdTo: createdTo ?? "", limit: 8 });

    const allOffers = useMemo(
        () => data?.pages.flatMap((page) => page.data) ?? [],
        [data]
    );

    return (
        <section className="p-6 mb-15 lg:mb-0">
            <FormControl className="w-50 h-20">
                <InputLabel>Category</InputLabel>

                <Select
                    value={category ?? ""}
                    label="Category"
                    onChange={(e) => updateFilter('category', e.target.value)}
                >
                    {categories?.map((category) => (
                        <MenuItem key={category.id} value={category.slug}>
                            {category.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
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

export default function Filter(props: FilterProps) {
    return (
        <Suspense fallback={<section className="pt-14 flex justify-center"><Spinner size="xl" /></section>}>
            <ErrorBoundary fallback={<OfferError />}>
                <FilterResults searchParams={props.searchParams} />
            </ErrorBoundary>
        </Suspense>
    );
}