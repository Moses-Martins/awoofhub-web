"use client";

import { OfferError } from "@/components/offers/OfferError";
import OfferInfiniteList from "@/components/offers/OfferInfiniteList";
import OfferListSkeleton from "@/components/offers/OfferListSkeleton";
import { useCategory } from "@/features/category/useCategory";
import { useOffersByCategorySlug } from "@/features/offers/useOffersByCategorySlug";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { notFound, useRouter } from "next/navigation";
import { use, useMemo, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

interface Props {
    params: Promise<{ slug: string }>;
}

export default function CollectionPage({ params }: Props) {
    const { slug } = use(params);

    const router = useRouter();

    const { data: categories } = useCategory();

    const { data, isFetching, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage, isError, error } = useOffersByCategorySlug({
        categorySlug: slug, limit: 8,
    });

    if ((error as any)?.response?.status === 404) {
        return notFound();
    }

    const allOffers = useMemo(() => {
        return data?.pages.flatMap((page) => page.data) ?? [];
    }, [data]);
  
    const [currentSlug, setCurrentSlug] = useState(slug);

    const handleCategoryChange = (newSlug: string) => {
        if (newSlug === currentSlug) return;

        setCurrentSlug(newSlug);
        router.push(`/categories/${newSlug}`);
    };

    return (
        <ErrorBoundary fallback={<OfferError />}>
            <section className="p-6 mb-15 lg:mb-0">
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
        </ErrorBoundary>
    );
}
