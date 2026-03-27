"use client"

import Image from "next/image"

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <Image src="/networkError.png" width={200} height={200} alt="Network error" className="mb-4 lg:mb-6"/>
      <h1 className="text-[28px] md:text-[32px] font-bold text-[#202020]">Something went wrong</h1>
      <p className="text-[22px] md:text-[24px] text-[#7E8492]">Try refreshing the page</p>
      <button onClick={reset} className="cursor-pointer w-64  md:w-120 lg:w-150 text-lg md:text-xl mt-14 lg:mt-20 px-6 py-3 font-baloo bg-[#FE4F04] text-white font-bold hover:bg-orange-600">
        Refresh page
      </button>
    </div>
  )
}