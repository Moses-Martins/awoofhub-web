"use client";

import BusinessOfferList from "@/components/offers/business/BusinessOfferList";
import { OfferError } from "@/components/offers/OfferError";
import OfferListSkeleton from "@/components/offers/OfferListSkeleton";
import { useBusinessCategory } from "@/features/category/useBusinessCategory";
import { useBusinessOffersByCategorySlug } from "@/features/offers/useBusinessOffersByCategorySlug";
import { Spinner } from "@chakra-ui/react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { notFound, useRouter } from "next/navigation";
import { use, useEffect, useMemo, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useInView } from "react-intersection-observer";


interface Props {
    params: Promise<{ slug: string }>;
}

export default function CollectionPage({ params }: Props) {
    const { slug } = use(params);

    const router = useRouter();

    const [ref, inView] = useInView();

    const { data: categories } = useBusinessCategory();

    const { data, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage, isError, error } = useBusinessOffersByCategorySlug({
        categorySlug: slug, limit: 8,
    });

    if ((error as any)?.response?.status === 404) {
        return notFound();
    }

    const allOffers = useMemo(() => {
        return data?.pages.flatMap((page) => page.data) ?? [];
    }, [data]);

    useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, fetchNextPage, isFetchingNextPage]);


    const [currentSlug, setCurrentSlug] = useState(slug);

    const handleCategoryChange = (newSlug: string) => {
        if (newSlug === currentSlug) return;

        setCurrentSlug(newSlug);
        router.push(`business/categories/${newSlug}`);
    };

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
