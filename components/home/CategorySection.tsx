'use client'
import { useOffersByCategory } from "@/features/offers/useOffersByCategory";
import { Category } from "@/types/category";
import Link from 'next/link';
import { ErrorBoundary } from "react-error-boundary";
import OfferList from "../offer/OfferList";
import OfferListSkeleton from "../offer/OfferListSkeleton";

interface Props {
    category: Category;
}

export default function CategorySection({ category }: Props) {

    const { data, isFetching, isFetched } = useOffersByCategory({
        categoryId: category.id,
    });

    return (
        <section id={category.id} className="mb-16">
            <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold mb-6">
                    {category.name}
                </h3>

                <Link
                    href={`/categories/${category.name}`}
                    className="text-orange-600 font-medium flex items-center hover:underline"
                >
                    View all
                </Link>
            </div>

            <ErrorBoundary fallback={<ErrorComponent />}>
                {isFetching && <OfferListSkeleton number={4} />}
                {!isFetching && data.length === 0 && (
                    <p className="text-gray-500">No offers available.</p>
                )}
                {isFetched && data.length > 0 && <OfferList offers={data} />}
            </ErrorBoundary>

        </section>

    );
}


function ErrorComponent() {

    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh]">
            <h2 className="text-xl font-bold">Oops! Something went wrong</h2>
            <p className="mt-2 text-gray-600">
                We couldn&apos;t load the offers. Please try again later.
            </p>
        </div>
    );
};