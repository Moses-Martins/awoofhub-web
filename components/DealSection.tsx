import Image from "next/image";

export default function DealSection() {

    return (

        <section className="max-w-7xl mx-auto px-6 py-12">
            <div className="mb-8">
                <h2 className="text-2xl font-bold">Featured Deals Today</h2>
                <p className="text-slate-500">Hand-picked offers updated hourly</p>
            </div>

            {/* Placeholder for Deal Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((i) => (
                    <Image
                        key={i}
                        src={`/explore-image-${i}.png`}
                        alt="Product image"

                        width={500}
                        height={500}
                        priority
                        className="w-90 h-auto hover:shadow-xl transition-all cursor-pointer"
                    />

                ))}
            </div>

        </section>

    );
};



