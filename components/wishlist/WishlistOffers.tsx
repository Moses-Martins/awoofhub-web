"use client";
import { useWishlist } from "@/features/wishlist/useWishlist";
import Image from "next/image";
import Link from "next/link";
import OfferList from "../offers/OfferList";

export default function WishlistOffers() {
  const { data } = useWishlist();

  return (
    <>
      {data && data.length > 0 ? (
        <section className="pt-2 pb-24 md:pb-10 px-3 sm:px-6">
          <OfferList offers={data.map((w) => w.offer)} />
        </section>
      ) : (
        <section className="flex flex-col items-center justify-center text-center px-4 min-h-screen">
          <Image
            src="/wishlist.png"
            alt="wishlist-img"
            width={50}
            height={50}
            className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] mb-4"
          />
          <h1 className="mb-2 text-lg md:text-2xl font-bold">
            Your wishlist is empty
          </h1>
          <p className="mb-6 leading-5 md:leading-6 text-xs md:text-base text-muted max-w-140">
            When you have added something to your wishlist, it will appear here.
            Want to get started?
          </p>
          <Link
            className="flex font-medium items-center bg-primary text-white justify-center text-xs md:text-base w-[160px] py-3 rounded-sm transition-all hover:bg-orange-700 active:scale-95"
            href="/"
          >
            + Add to Wishlist
          </Link>
        </section>
      )}
    </>
  );
}
