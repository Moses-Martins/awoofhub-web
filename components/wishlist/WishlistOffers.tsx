"use client"
import { useWishlist } from "@/features/wishlist/useWishlist";
import Link from 'next/link';
import OfferList from "../offers/OfferList";


export default function WishlistOffers() {
    const { data } = useWishlist()

    if (data && data.length > 0) {

        return (
            <section className="pt-5 sm:pt-14 px-3 sm:px-6">
                <OfferList offers={data.map(w => w.offer)} />
            </section>
        );
    }

    return (
        <section className="pt-14 px-6">
            <h1 className="mb-6 text-4xl font-bold">YOUR WISHLIST IS EMPTY</h1>
            <p className="mb-4 text-lg">
                When you have added something to your wishlist, it will appear here.
                Want to get started?
            </p>
            <Link
                className="flex font-medium items-center bg-white justify-center text-sm min-w-[160px] max-w-[160px] h-[40px] px-[10px] rounded-md border border-solid border-[#2E2E2E] transition-all hover:bg-background-tertiary hover:border-[#454545]"
                href="/"
            >
                Start
            </Link>
        </section>
    );

}