"use client";

import { OfferError } from "@/components/offer/OfferError";
import OfferList from "@/components/offer/OfferList";
import { useCategory } from "@/features/category/useCategories";
import { useOffersByCategorySlug } from "@/features/offers/useOffersByCategorySlug";
import { Spinner } from "@chakra-ui/react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useRouter } from "next/navigation";
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

    const { data: categories } = useCategory();

    const { data, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage, isError, error } = useOffersByCategorySlug({
        categorySlug: slug, limit: 8,
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


    const [currentSlug, setCurrentSlug] = useState(slug);

    const handleCategoryChange = (newSlug: string) => {
        if (newSlug === currentSlug) return;

        setCurrentSlug(newSlug);
        router.push(`/categories/${newSlug}`);
    };

    // Early returns make JSX cleaner
    if (isFetching && allOffers.length === 0) {
        return (
            <section className="pt-14 flex justify-center">
                <Spinner className="mt-5 w-17 h-17 text-primary" />
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
            <section className="p-6">
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

                {/* Offers List */}
                <OfferList offers={allOffers} />
                <div ref={ref} className="h-10 flex items-center justify-center mt-6">
                    {isFetchingNextPage && (
                        <Spinner className="mt-5 w-17 h-17 text-primary" data-testid="loading" />
                    )}
                    {!hasNextPage && allOffers.length > 0 && <p className="text-center">No more offers</p>}
                </div>
            </section>
        </ErrorBoundary>
    );
}
