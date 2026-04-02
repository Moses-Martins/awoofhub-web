import Image from "next/image";
export default function Banner() {
  return (
    <section className="relative  bg-primary h-[200px] flex items-center px-4  md:px-12 lg:px-16 ">
      {/* Content Container */}
      <div className="container max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Left Side: Text and Button */}
        <div className="z-10 max-w-xl my-4 text-white">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight mb-5">
            Everyday is <span className="text-black">Black friday</span>
            <br />
            in Awoof<span className="text-black">Hub!</span>
          </h1>

          <button className="bg-white text-sm md:text-xl text-black font-bold py-3 px-2 md:px-8 rounded-md shadow-lg hover:bg-gray-100 transition-all duration-300">
            Browse Active Deal
          </button>
        </div>

        {/* Right Side: Image */}
        <div className="absolute right-4 md:right-12 lg:right-16 bottom-0 h-full flex items-end overflow-hidden">
          <div className="absolute inset-0 bg-white opacity-30 blur-2xl rounded-full"></div>
          <Image
            src="/BannerImage.png"
            alt="Banner Image"
            width={500}
            height={500}
            priority
            className="w-[150px] md:w-[300px] h-full object-cover object-bottom "
          />
        </div>
      </div>
    </section>
  );
}
