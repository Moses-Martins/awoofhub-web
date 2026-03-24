import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col text-center max-w-170 p-4 mx-auto items-center justify-center min-h-screen bg-white">
      <Image src="/notFound.png" width={200} height={200} alt="Not found" className="mb-4 lg:mb-6"/>
      <h1 className="text-[28px] md:text-[32px] font-bold text-[#202020]">Page isn't available</h1>
      <p className="text-[22px] md:text-[24px] text-[#7E8492]">The link may be broken, or doesn't exist. Let's take you back to the homepage.</p>
      <Link href="/" className="cursor-pointer text-lg md:text-xl w-64 md:w-120 lg:w-150 mt-14 lg:mt-20 px-6 py-3 font-baloo bg-[#FE4F04] text-white font-bold hover:bg-orange-600 text-center">
        Return to homepage
      </Link>
    </div>
  )
}