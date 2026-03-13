import { Category } from "@/types/category";
import CategorizedOffers from "./CategorizedOffers";
import CategoryLinks from "./CategoryLinks";

interface Props {
  categories: Category[];
}

export default function FeaturedOffers({ categories }: Props) {

  return (
    <div className="bg-gray-50 min-h-screen pt-6 md:pt-12">
      <div className="max-w-[1440px] mx-auto">
        <CategoryLinks categories={categories} />
        <CategorizedOffers categories={categories} />
      </div>
    </div>
  );
}

