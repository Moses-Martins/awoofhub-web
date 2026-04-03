'use client'
import { useCategory } from "@/features/category/useCategories";
import { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import CategorizedOffers from "./CategorizedOffers";
import CategoryLinks from "./CategoryLinks";

export default function FeaturedOffers() {
  const { data, isFetching, isFetched } = useCategory()
  const [activeId, setActiveId] = useState("")

  useEffect(() => {
    if (!data || data.length === 0) return

    const observers: IntersectionObserver[] = []

    data.forEach((cat) => {
      const el = document.getElementById(cat.id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(cat.id)
          }
        },
        { threshold: 0.3 } // triggers when 30% of section is visible
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [data])

  return (
    <>
      {isFetching && <Loading />}
      {isFetched && data && data.length > 0 && (
        <div className="bg-gray-50 pt-6 md:pt-12">
          <div className="max-w-[1440px] mx-auto">
            <CategoryLinks categories={data} activeId={activeId} />
            <CategorizedOffers categories={data} />
          </div>
        </div>
      )}
      {isFetched && (!data || data.length === 0) && (
        <p className="text-center pb-10 text-gray-500">No offers available.</p>
      )}
    </>
  );
}