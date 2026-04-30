"use client"
import Loading from "@/components/loading/Loading";
import SingleBusinessOffer from "@/components/offer/business/SingleBusinessOffer";
import ShareModal from "@/components/share/ShareModal";
import { useOffer } from "@/features/offers/useOffer";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { use } from "react";

interface Props {
  params: Promise<{ id: string }>;
}

export default function Page({ params }: Props) {
  const { id } = use(params);

  const { data: offer, isLoading } = useOffer({ id });

  if (isLoading) {
    return <Loading />
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
      <section className="p-4 sm:p-8 mx-auto max-w-[1440px] bg-white text-gray-800 border-b border-gray-300 pb-30">
        <div className="mx-auto flex justify-between items-center mb-7 md:mb-10">
          <nav className="flex items-center text-sm text-gray-500 gap-2">
            <Link href={`/categories/${offer.category.slug}`}>{offer.category.name}</Link> <ChevronRight size={14} />
            <span className="font-semibold text-[10px] xs:text-sm text-gray-900">{offer.id}</span>
          </nav>
          <ShareModal offerId={offer.id} />
        </div>
        <SingleBusinessOffer offer={offer} />
      </section>

    </>
  );
}