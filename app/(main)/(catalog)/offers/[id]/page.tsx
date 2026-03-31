"use client"
import SingleOffer from "@/components/offer/SingleOffer";
import SingleOfferSkeleton from "@/components/offer/SingleOfferSkeleton";
import OfferList from "@/components/offers/OfferList";
import OfferListSkeleton from "@/components/offers/OfferListSkeleton";
import { useOffer } from "@/features/offers/useOffer";
import { useOffersByCategorySlug } from "@/features/offers/useOffersByCategorySlug";
import { Spinner } from "@chakra-ui/react";
import { ChevronRight, Share2 } from "lucide-react";
import Link from 'next/link';
import { use, useEffect, useMemo } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  params: Promise<{ id: string }>;
}

export default function OfferPage({ params }: Props) {
  const { id } = use(params);
  const [ref, inView] = useInView();
  const { data: offer, isLoading } = useOffer({ id });


  const { data, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage, isError, error } = useOffersByCategorySlug({
    categorySlug: offer?.category?.slug ?? "", limit: 8,
  });

  const allOffers = useMemo(() => {
    return data?.pages.flatMap((page) => page.data) ?? [];
  }, [data]);


  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage, isFetchingNextPage]);

  // Early returns make JSX cleaner
  if (isLoading) {
    return (
      <section className="pt-14 px-6">
        <SingleOfferSkeleton />
      </section>
    );
  }

  if (!offer) {
    return (
      <section className="pt-14 px-6">
        <p className="text-center text-gray-500">Offer not found.</p>
      </section>
    );
  }



  return (
    <>
      <section className="p-8 mx-auto max-w-[1440px] bg-white text-gray-800 border-b border-gray-300 pb-30">
        <div className="mx-auto flex justify-between items-center mb-10">
          <nav className="flex items-center text-sm text-gray-500 gap-2">
            <Link href={`/categories/${offer.category.slug}`}>{offer.category.name}</Link> <ChevronRight size={14} />
            <span className="font-semibold text-gray-900">{offer.id}</span>
          </nav>
          <div className="flex gap-4 text-sm text-gray-600">
            <button className="flex items-center gap-1 hover:text-blue-500 transition-colors">
              <Share2 size={18} /> Share
            </button>
          </div>
        </div>

        <SingleOffer offer={offer} />
      </section>
      <section className="p-8 mx-auto max-w-[1440px] pb-10 mb-15 lg:mb-0">
        <h3 className="text-2xl font-bold mb-6">
          Explore more offers like this
        </h3>

        {isFetching && allOffers.length === 0 ? (
          <section className="pt-14 px-6">
            <OfferListSkeleton number={4} />
          </section>
        ) : isError ? (
          <div>{error?.message}</div>
        ) : (
          <>
            <OfferList offers={allOffers} />

            <div
              ref={ref}
              className="h-10 flex items-center justify-center mt-6"
            >
              {isFetchingNextPage && (
                <Spinner
                  className="mt-5 w-17 h-17 text-primary"
                  data-testid="loading"
                />
              )}

              {!hasNextPage && allOffers.length > 0 && (
                <p className="text-center">No more offers</p>
              )}
            </div>
          </>
        )}
      </section>
    </>
  );
};

