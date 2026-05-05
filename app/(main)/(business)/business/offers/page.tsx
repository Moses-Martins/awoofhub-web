"use client";

import BusinessOfferPaginatedList from "@/components/offers/business/BusinessOfferPaginatedList";
import BusinessOfferPaginatedListSkeleton from "@/components/offers/business/BusinessOfferPaginatedListSkeleton";
import { OfferError } from "@/components/offers/OfferError";
import { useBusinessCategory } from "@/features/category/useBusinessCategory";
import { useFilter } from "@/features/offers/useFilter";
import { useOffersByBusiness } from "@/features/offers/useOffersByBusiness";
import { useUser } from "@/features/user/useUser";
import { Spinner } from "@chakra-ui/react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Suspense, use, useState } from "react";
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
    const { data: user } = useUser();
    const { data: categories } = useBusinessCategory();

    const params = use(searchParams);
    const { search, category, minRating, createdFrom, createdTo } = params;

    const updateFilter = useFilter("/business/offers");

    const [page, setPage] = useState(1);

    const { data, isFetching, isError, error } = useOffersByBusiness({
        businessId: user?.id ?? "", search: search ?? "", category: category ?? "", minRating: minRating ?? 0, createdFrom: createdFrom ?? "", createdTo: createdTo ?? "", page, limit: 5
    });

    const offers = data?.data ?? [];

    return (
        <section className="pt-6 px-6 mb-15 lg:mb-0 bg-white min-h-screen">
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