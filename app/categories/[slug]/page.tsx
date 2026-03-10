"use client";

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

    const { data, isFetchingNextPage, fetchNextPage, hasNextPage, isError, error } = useOffersByCategorySlug({
        categorySlug: slug,
    });

    const allOffers = useMemo(() => {
            return data?.pages.flatMap((page) => page.data) ?? [];
        }, [data]);


    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, fetchNextPage]);


    const [currentSlug, setCurrentSlug] = useState(slug);

    const handleCategoryChange = (newSlug: string) => {
        if (newSlug === currentSlug) return;

        setCurrentSlug(newSlug);
        router.push(`/categories/${newSlug}`);
    };

    return (
        <ErrorBoundary fallback={<OfferErrorComponent />}>
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


                {/* Pagination */}
                {/* Offers List */}
                <div>
                    {isError ? (
                        <div>{error?.message}</div>
                    ) : (
                      <OfferList offers={allOffers} />
                    )}
                </div>

                {/* Infinite Scroll Trigger */}
                <div ref={ref} className="h-10 flex items-center justify-center mt-6">
                    {isFetchingNextPage && <Spinner className="p-6 w-25 h-25 text-primary" data-testid="loading" />}
                    {!hasNextPage && <p>No more offers</p>}
                </div>

            </section>
        </ErrorBoundary>
    );
}

export function OfferErrorComponent() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh]">
            <h2 className="text-xl font-bold">Oops! Something went wrong</h2>
            <p className="mt-2 text-gray-600">
                We couldn&apos;t load the offers. Please try again later.
            </p>
        </div>
    );
}