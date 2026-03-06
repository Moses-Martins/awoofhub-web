import { Category } from "@/types/category";
import CategorySection from "./CategorySection";

interface Props {
    categories: Category[];
}

export default function CategorizedOffers({ categories }: Props) {
    return  <>
            {categories.map((category) => (
                <CategorySection key={category.id} category={category} />
            ))}
        </>
}
