import { useCategory } from "@/features/category/useCategories";
import Loading from "../loading/Loading";
import CategorizedOffers from "./CategorizedOffers";
import CategoryLinks from "./CategoryLinks";

export default function FeaturedOffers() {
  const { data, isFetching, isFetched } = useCategory()
  
  return (
    <>
      {isFetching && <Loading />}
      {
        isFetched && data && data.length > 0 && (
          <div className="bg-gray-50 pt-6 md:pt-12">
            <div className="max-w-[1440px] mx-auto">
              <CategoryLinks categories={data} />
              <CategorizedOffers categories={data} />
            </div>
          </div>
        )
      }
      {
        isFetched && (!data || data.length === 0) && (
          <p className="text-center pb-10 text-gray-500">No offers available.</p>
        )
      }
    </>
  );
}



