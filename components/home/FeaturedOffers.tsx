import { Category } from "@/types/category";
import CategorizedOffers from "./CategorizedOffers";
import CategoryLinks from "./CategoryLinks";

interface Props {
  categories: Category[];
}

export default function FeaturedOffers({ categories }: Props) {

  return (
    <div className="bg-gray-50 min-h-screen p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <CategoryLinks categories={categories} />
        <CategorizedOffers categories={categories} />
      </div>
    </div>
  );
}

