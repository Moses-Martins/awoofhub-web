import { Offer } from "@/types/offer";
import Image from 'next/image';
import Link from "next/link";
import Comment from "../comment/Comment";
import ReviewChart from "../review/ReviewChart";
import BusinessLink from "./BusinessLink";
import OfferInfo from "./OfferInfo";
import TrustSection from "./TrustSection";

interface Props {
    offer: Offer;
}

export default function SingleOffer({ offer }: Props) {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-9 gap-10 pb-10">
                <div className="md:col-span-4 flex flex-col items-center justify-center">
                    <div className="bg-gray-100 rounded-2xl">
                        <Image
                            src={offer.imageUrl}
                            alt="Logo"
                            width={500}
                            height={500}
                            priority
                            className="w-full h-auto"
                        />
                    </div>

                    <div className="w-full mt-12 space-y-3">
                        <Link href="/message" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all">
                            Message Seller
                        </Link>
                        <Link href="/report" className="w-full border border-red-500 text-red-500 text-sm font-bold py-3 rounded-lg flex items-center justify-center hover:text-white hover:bg-red-500 transition-colors">
                            Report this offer
                        </Link>
                    </div>
                </div>

                <div className="md:col-span-5">
                    <div className="flex justify-between items-center mb-6">
                        <BusinessLink offer={offer} />
                        <span className="bg-green-100 text-green-700 text-xs animate-pulse font-bold px-2 py-1 rounded">
                            Available
                        </span>
                    </div>

                    <OfferInfo offer={offer} />

                </div>

            </div>
            <TrustSection offer={offer} />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-12">
                <div className="md:col-span-4 space-y-6">
                    <ReviewChart offer={offer} />
                </div>


                <div className="md:col-start-6 md:col-span-6 space-y-8">
                    <Comment offer={offer} />
                </div>
            </div>

        </>
    );
}