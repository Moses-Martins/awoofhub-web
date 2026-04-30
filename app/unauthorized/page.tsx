import Image from "next/image";
import Link from "next/link";

export default function Unauthorized() {
    return (
        <div className="bg-[#FAFAFA]">
            <div className="flex flex-col text-center max-w-full md:max-w-160 p-4 mx-auto items-center justify-center min-h-screen ">
                <Image
                    src="/accessDenied.png"
                    width={200}
                    height={200}
                    alt="Not found"
                    className="w-[120px] h-[120px] sm:w-[170px] sm:h-[170px] mb-4 md:mb-6"
                />
                <h1 className="text-base sm:text-2xl lg:text-3xl font-bold text-[#202020]">
                    Oops... Access denied
                </h1>
                <p className="text-sm mt-1 sm:text-lg lg:text-xl text-[#7E8492]">
                    Sorry, looks like you don't have access to the page you are
                    trying to reach.
                </p>
                <Link
                    href="/"
                    className="cursor-pointer text-sm sm:text-lg w-80 sm:w-100 rounded-sm md:w-120 mt-8 lg:mt-16 px-6 py-2 font-baloo bg-[#FE4F04] text-white font-bold hover:bg-orange-600 text-center"
                >
                    Return to homepage
                </Link>
            </div>
        </div>
    );
}
