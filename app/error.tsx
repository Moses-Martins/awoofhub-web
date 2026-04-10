"use client";

import Image from "next/image";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="bg-[#FAFAFA]">
    <div className="flex p-4 flex-col items-center justify-center min-h-screen ">
      <Image
        src="/networkError.png"
        width={200}
        height={200}
        alt="Network error"
        className="w-[120px] h-[120px] md:w-[170px] md:h-[170px] mb-4 lg:mb-6"
      />
      <h1 className="text-base md:text-2xl lg:text-3xl font-bold text-[#202020]">
        Something went wrong
      </h1>
      <p className="text-sm mt-1 md:text-lg lg:text-xl text-[#7E8492]">
        Try refreshing the page
      </p>
      <button
        onClick={reset}
        className="cursor-pointer text-sm md:text-lg w-full rounded-sm md:w-120 mt-8 lg:mt-16 px-6 py-2 font-baloo bg-[#FE4F04] text-white font-bold hover:bg-orange-600 text-center"
      >
        Refresh page
      </button>
    </div>
    </div>
  );
}
