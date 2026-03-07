'use client'
import Footer from "@/components/footer/Footer";
import FeaturedOffers from "@/components/home/FeaturedOffers";
import Hero from "@/components/home/Hero";
import Loading from "@/components/loading/Loading";
import { useCategory } from "@/features/category/useCategories";

export default function Home() {
  
  const {data, isFetching, isFetched } = useCategory()

  return (
    <>
      <Hero />
      {isFetching && <Loading />}
      {isFetched && <FeaturedOffers categories={data} />}
      <Footer />
    </>
  );
};



