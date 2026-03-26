import { Category } from "@/types/category";
import Link from "next/link";

export default function CategoryLinks({ categories }: { categories: Category[] }) {
  return (
    <div className="flex justify-between align-center items-center bg-white mb-10 border-b border-gray-200 py-3 px-6 md:px-12">
      <h2 className="text-orange-600 font-bold text-xl p-2">
        Categories
      </h2>

      <div className="flex gap-2 overflow-x-auto">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`#${cat.id}`}
            className="px-5 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200"
          >
            {cat.name}
          </Link>
        ))}
      </div>
    </div>
  );
}