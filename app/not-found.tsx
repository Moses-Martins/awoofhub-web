import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="flex flex-col text-center max-w-full md:max-w-160 p-4 mx-auto items-center justify-center min-h-screen ">
        <Image
          src="/notFound.png"
          width={200}
          height={200}
          alt="Not found"
          className="w-[120px] h-[120px] md:w-[170px] md:h-[170px] mb-4 md:mb-6"
        />
        <h1 className="text-base md:text-2xl lg:text-3xl font-bold text-[#202020]">
          Page isn't available
        </h1>
        <p className="text-sm mt-1 md:text-lg lg:text-xl text-[#7E8492]">
          The link may be broken, or doesn't exist. Let's take you back to the
          homepage.
        </p>
        <Link
          href="/"
          className="cursor-pointer text-sm md:text-lg w-full rounded-sm md:w-120 mt-8 lg:mt-16 px-6 py-2 font-baloo bg-[#FE4F04] text-white font-bold hover:bg-orange-600 text-center"
        >
          Return to homepage
        </Link>
      </div>
    </div>
  );
}
