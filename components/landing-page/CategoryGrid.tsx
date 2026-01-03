interface Category {
  name: string;
  image: string;
}

const categories: Category[] = [
  { name: "Food and Drinks", image: "/category/one.jpg" },
  { name: "Fashion", image: "/category/two.jpg" },
  { name: "Electronics", image: "/category/three.jpg" },
  { name: "Beauty", image: "/category/four.jpg" },
  { name: "Travel", image: "/category/five.jpg" },
  { name: "Tech Events", image: "/category/six.jpg" },
 
];

export default function CategoryGrid() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-semibold text-slate-900 mb-2">
          Choose a Category to find what you need
        </h2>
        <p className="text-slate-500">
          Find deals across multiple industries
        </p>
      </div>

      {/* Grid: 3 columns on mobile, 4 on large screens */}
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-6">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className="group cursor-pointer overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Image Container */}
            <div className="relative aspect-square md:aspect-video lg:aspect-[4/3] overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            
            {/* Label - Orange Background */}
            <div className="bg-[#FF5C00] py-2 md:py-3 text-center">
              <span className="font-baloo text-white font-semibold text-sm sm:text-xl whitespace-nowrap">
                {category.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}