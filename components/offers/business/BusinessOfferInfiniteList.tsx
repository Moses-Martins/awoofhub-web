import PaginationButtons from "@/components/button/PaginationButtons";
import { ApiResponse } from "@/types/api-response";
import { Offer } from "@/types/offer";
import OfferRow from "./OfferRow";
import TableHeader from "./TableHeader";

interface Props {
  data?: ApiResponse<Offer[]>;
  page: number;
  setPage: (page: number) => void;
}

export default function BusinessOfferInfiniteList({ data, page, setPage }: Props) {
  const offers = data?.data ?? [];
  const total = data?.meta?.totalPages ?? 0;

  return (
    <>
      <div className="overflow-x-auto min-h-[455px] rounded-lg">
        <table className="w-full min-w-[1283px] text-left shadow-sm">
          <TableHeader />
          <tbody>
            {offers.map((offer) => (
              <OfferRow key={offer.id} offer={offer} />
            ))}
          </tbody>
        </table>
      </div>
      <PaginationButtons totalPages={total} currentPage={page} onPageChange={setPage} />
    </>
  );
}