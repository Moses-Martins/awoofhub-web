'use client'
import Footer from "@/components/footer/Footer";
import FeaturedOffers from "@/components/home/FeaturedOffers";
import Hero from "@/components/home/Hero";
import Loading from "@/components/loading/Loading";
import { useCategory } from "@/features/category/useCategories";

export default function Home() {

  const { data, isFetching, isFetched } = useCategory()

  return (
    <>
      <Hero />
      {isFetching && <Loading />}
      {isFetched && data && data.length > 0 && (
        <FeaturedOffers categories={data} />
      )}
      {isFetched && (!data || data.length === 0) && (
        <p className="text-center pb-10 text-gray-500">No offers available.</p>
      )}
      <Footer />
    </>
  );
};



