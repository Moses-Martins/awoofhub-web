interface Props {
  number: number;
}

export default function OfferListSkeleton({ number }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[...Array(number)].map((_, i) => (
        <div
          key={i}
          className="bg-white w-[300px] h-[450px] rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col"
        >
          <div className="mb-6 mt-5 flex justify-center items-center h-48 bg-[#E0E0E0] animate-pulse rounded-md" />
          <div className="flex-grow flex flex-col gap-3">
            <div className="h-5 w-full bg-[#E0E0E0] animate-pulse rounded-md" />
            <div className="h-4 w-[85%] bg-[#E0E0E0] animate-pulse rounded-md" />
            <div className="h-4 w-[65%] bg-[#E0E0E0] animate-pulse rounded-md" />
            <div className="h-5 w-[40%] bg-[#E0E0E0] animate-pulse rounded-md mt-2" />
          </div>

          <div className="h-[42px] w-full bg-[#E0E0E0] animate-pulse rounded-sm mt-4" />
        </div>
      ))}
    </div>
  );
}