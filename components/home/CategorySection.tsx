'use client'
import { useOffersByCategory } from "@/features/offers/useOffersByCategory";
import { Category } from "@/types/category";
import Link from 'next/link';
import { ErrorBoundary } from "react-error-boundary";
import { OfferError } from "../offer/OfferError";
import OfferList from "../offer/OfferList";
import OfferListSkeleton from "../offer/OfferListSkeleton";

interface Props {
    category: Category;
}

export default function CategorySection({ category }: Props) {

    const { data, isFetching, isFetched } = useOffersByCategory({
        categoryId: category.id, page: 1, limit: 4
    });

    return (
        <section id={category.id} className="mb-16 px-6 md:px-12">
            <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold mb-6">
                    {category.name}
                </h3>

                <Link
                    href={`/categories/${category.slug}`}
                    className="text-orange-600 font-medium flex items-center hover:underline"
                >
                    View all
                </Link>
            </div>

            <ErrorBoundary fallback={<OfferError />}>
                {isFetching && <OfferListSkeleton number={4} />}
                {!isFetching && data.length === 0 && (
                    <p className="text-gray-500">No offers available.</p>
                )}
                {isFetched && data.length > 0 && <OfferList offers={data} />}
            </ErrorBoundary>

        </section>

    );
}

