import Image from 'next/image';
export default function Banner() {

    return (
        <section className="relative  bg-primary h-[200px] flex items-center px-6 py-12 md:px-16 lg:px-24">
            {/* Content Container */}
            <div className="container max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between">

                {/* Left Side: Text and Button */}
                <div className="z-10 max-w-xl text-white">
                    <h1 className="text-md md:text-3xl font-bold leading-tight mb-5">
                        Everyday is <span className="text-black">Black friday</span>
                        <br />
                        in Awoof<span className="text-black">Hub!</span>
                    </h1>

                    <button
                        className="bg-white text-black font-semibold py-3 px-10 rounded-md shadow-lg hover:bg-gray-100 transition-all duration-300"
                    >
                        Browse Active Deal
                    </button>
                </div>

                {/* Right Side: Image */}
                <div className="relative mt-8 md:mt-0">
                    {/* Subtle gradient glow behind image if desired */}
                    <div className="absolute inset-0 bg-white opacity-60 blur-3xl rounded-full"></div>


                    <Image
                        src="/BannerImage.png"
                        alt="Banner Image"
                        width={500}
                        height={500}
                        priority
                        className="w-[200px] h-auto"
                    />
                </div>
            </div>
        </section>
    );
};

