import { Offer } from "@/types/offer";
import OfferCard from "./OfferCard";

interface Props {
  offers: Offer[];
}

export default function OfferList({ offers }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {offers.map((offer) => (
        <OfferCard offer={offer} key={offer.id} />
      ))}
    </div>
  );
};




