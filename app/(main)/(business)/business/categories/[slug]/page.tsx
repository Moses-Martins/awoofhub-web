"use client";

import BusinessOfferPaginatedList from "@/components/offers/business/BusinessOfferPaginatedList";
import BusinessOfferPaginatedListSkeleton from "@/components/offers/business/BusinessOfferPaginatedListSkeleton";
import { OfferError } from "@/components/offers/OfferError";
import { useBusinessCategory } from "@/features/category/useBusinessCategory";
import { useBusinessOffersByCategorySlug } from "@/features/offers/useBusinessOffersByCategorySlug";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { notFound, useRouter } from "next/navigation";
import { use, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";


interface Props {
    params: Promise<{ slug: string }>;
}

export default function CollectionPage({ params }: Props) {
    const { slug } = use(params);

    const [page, setPage] = useState(1);

    const router = useRouter();


    const { data: categories } = useBusinessCategory();

    const { data, isFetching, isError, error } = useBusinessOffersByCategorySlug({
        categorySlug: slug, page, limit: 5,
    });

    const offers = data?.data ?? [];

    if ((error as any)?.response?.status === 404) {
        return notFound();
    }

    const [currentSlug, setCurrentSlug] = useState(slug);

    const handleCategoryChange = (newSlug: string) => {
        if (newSlug === currentSlug) return;

        setCurrentSlug(newSlug);
        router.push(newSlug);
    };


    return (
        <ErrorBoundary fallback={<OfferError />}>
            <section className="p-6 mb-15 lg:mb-0 bg-white min-h-screen">
                <FormControl className="w-50 h-20">
                    <InputLabel>Category</InputLabel>

                    <Select
                        value={currentSlug}
                        label="Category"
                        onChange={(e) => handleCategoryChange(e.target.value)}
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
        </ErrorBoundary>
    );
}
