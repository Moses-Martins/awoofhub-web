interface Props {
  number: number;
}

export default function ActivityListSkeleton({ number }: Props) {
  return (
    <div className="flex flex-col gap-4 w-full max-w-3xl">
      {[...Array(number)].map((_, i) => (
        <div
          key={i}
          className="bg-white w-full rounded-2xl shadow-sm border border-gray-100 p-4 flex items-center gap-4 animate-pulse"
        >
          {/* Left: Circular Icon Placeholder */}
          <div className="flex-shrink-0 w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center" />
          
          {/* Right: Content Area */}
          <div className="flex-grow">
            <div className="flex justify-between items-start mb-2">
              <div className="h-5 w-24 bg-gray-200 rounded-md" />
              <div className="h-4 w-20 bg-orange-100 rounded-md" />
            </div>
            <div className="h-4 w-48 bg-gray-100 rounded-md" />
          </div>
        </div>
      ))}
    </div>
  );
}