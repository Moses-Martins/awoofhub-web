import { Offer } from "@/types/offer";
import { Heart, Star } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';


interface Props {
  offer: Offer;
}

export default function OfferCard({ offer }: Props) {
  return (
    <Link href={`/offers/${offer.id}`}>
      <div key={offer.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col group hover:shadow-md transition-shadow">

        {/* Card Image & Wishlist */}
        <div className="relative mb-6 flex justify-center items-center h-48 bg-white">
          <button className="absolute top-0 right-0 p-1 text-gray-400 hover:text-red-500 transition-colors">
            <Heart size={24} />
          </button>
          <Image
            src={offer.imageUrl}
            alt={offer.title}
            width={500}
            height={500}
            className="max-h-full object-contain group-hover:scale-105 transition-transform"
          />
        </div>

        {/* Card Content */}
        <div className="flex-grow">
          <h4 className="font-bold text-gray-900 text-sm mb-2 leading-snug">
            <span className="text-red-600">{offer.highlight}</span> {offer.title.replace(offer.highlight, '')}
          </h4>
          <p className="text-gray-500 text-xs mb-4 line-clamp-2">
            {offer.description}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-[10px] text-gray-400 ml-1">(54)</span>
          </div>
        </div>

        {/* import {RatingGroup} from "@chakra-ui/react"


        <RatingGroup.Root count={5} defaultValue={3} size="sm">
          <RatingGroup.HiddenInput />
          <RatingGroup.Control />
        </RatingGroup.Root> */}


        {/* Action Button */}
        <button className="w-full bg-orange-600 text-white py-2.5 rounded-lg font-bold text-sm hover:bg-orange-700 active:scale-95 transition-all">
          View More
        </button>
      </div>
    </Link>
  );
};

