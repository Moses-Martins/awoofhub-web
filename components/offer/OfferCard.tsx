import { Offer } from "@/types/offer";
import Rating from '@mui/material/Rating';
import { Heart } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';


interface Props {
  offer: Offer;
}

export default function OfferCard({ offer }: Props) {
  return (
    <Link href={`/offers/${offer.id}`}>
      <div key={offer.id} className="bg-white w-[300px] h-[450px] rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col group hover:shadow-md transition-shadow">

        {/* Card Image & Wishlist */}
        <div className="relative mb-6 mt-5 flex justify-center items-center h-48 bg-white">
          <button className="absolute top-[-25] right-0 p-1 text-gray-400 hover:text-red-500 transition-colors">
            <Heart size={27} />
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
          <h4 className="font-bold text-gray-900 text-md mb-2 leading-snug">
            {offer.title}
          </h4>
          <p className="text-gray-500 text-sm mb-4 line-clamp-2">
            {offer.highlight}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-4">
            <Rating
              name="readonly"
              value={3}
              readOnly
              sx={{
                '& .MuiRating-icon': {
                  marginRight: '-7px', // tighter spacing
                },
                '& .MuiRating-iconFilled': {
                  color: '#FFC000', // filled stars
                },
                '& .MuiRating-iconEmpty': {
                  color: '#ccc', // empty stars
                },
              }}
            />
            <span className="text-[12px] text-gray-400 ml-1">(54)</span>
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full bg-orange-600 text-white py-2.5 rounded-sm font-bold text-md hover:bg-orange-700 active:scale-95 transition-all">
          View More
        </button>
      </div>
    </Link>
  );
};

