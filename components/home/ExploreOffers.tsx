import { useRandomOffers } from "@/features/offers/useRandomOffers";
import Link from "next/link";
import { ErrorBoundary } from "react-error-boundary";
import { FiArrowRight } from "react-icons/fi";
import { OfferError } from "../offers/OfferError";
import OfferList from "../offers/OfferList";
import OfferListSkeleton from "../offers/OfferListSkeleton";

export default function ExploreOffers() {

    const { data, isFetching, isFetched } = useRandomOffers({ page: 1, limit: 8 })

    return (
        <section className="bg-gray-50">
            <div className="pb-16 px-6 md:px-12 max-w-[1440px] mx-auto">
                <div className="flex justify-between items-baseline mb-6">
                    <h3 className="text-xl md:text-2xl font-bold mt-3 sm:mt-5">
                        Explore Offers
                    </h3>

                    <Link
                        href={`/offers/`}
                        className="group inline-flex items-center gap-2 text-orange-600 font-medium hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                    >
                        <span className="text-xs sm:text-sm font-bold">View all</span>
                        <FiArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                </div>

                <ErrorBoundary fallback={<OfferError />}>
                    {isFetching && <OfferListSkeleton number={4} />}
                    {!isFetching && data.length === 0 && (
                        <p className="text-gray-500">No offers available.</p>
                    )}
                    {isFetched && data.length > 0 && <OfferList offers={data} />}
                </ErrorBoundary>

            </div>

        </section>
    );
}



