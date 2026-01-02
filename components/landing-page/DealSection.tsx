import Image from "next/image";

export default function DealSection() {

    return (

        <section className="max-w-[1400px] bg-white mx-auto px-6 py-12">
            <div className="mb-4">
                <h2 className="text-2xl font-medium">Featured Deals Today</h2>
            </div>

            {/* Placeholder for Deal Images */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
                {[1, 2, 3, 4].map((i) => (
                    <Image
                        key={i}
                        src={`/explore-image-${i}.png`}
                        alt="Product image"
                        width={500}
                        height={500}
                        priority
                        className="sm:w-90 h-auto hover:shadow-xl transition-all cursor-pointer"
                    />

                ))}
            </div>

        </section>

    );
};



