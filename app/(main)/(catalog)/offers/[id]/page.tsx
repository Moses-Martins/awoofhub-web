"use client"
import SingleOffer from "@/components/offer/SingleOffer";
import SingleOfferSkeleton from "@/components/offer/SingleOfferSkeleton";
import { useOffer } from "@/features/offers/useOffer";
import { ChevronRight, Share2 } from "lucide-react";
import Link from 'next/link';
import { use } from "react";

interface Props {
  params: Promise<{ id: string }>;
}

export default function OffersPage({ params }: Props) {
  const { id } = use(params);
  const { data: offer, isLoading } = useOffer({ id });

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
    <section className="p-8 mx-auto max-w-[1440px] bg-white text-gray-800 pb-10">
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
  );
};

