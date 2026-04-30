"use client"
import BarsDataset from '@/components/dashboard/business/BarsDataset';
import DonutChart from '@/components/dashboard/business/DonutChart';
import HorizontalBarChart from '@/components/dashboard/business/HorizontalBarChart';
import StatsCard from '@/components/dashboard/business/StatsCard';
import Loading from '@/components/loading/Loading';
import BusinessOfferList from '@/components/offers/business/BusinessOfferList';
import { useBusinessDashboard } from '@/features/offers/useBusinessDashboard';
import {
  Box,
  RotateCcw,
  TrendingUp,
  Users,
  XCircle
} from 'lucide-react';
import Link from "next/link";


export default function BusinessDashboard() {
  const { data, isLoading } = useBusinessDashboard()

  if (isLoading) {
    return <Loading />
  }

  if (!data) {
    return (
      <section className="pt-14 px-6">
        <p className="text-center text-gray-500">No data.</p>
      </section>
    );
  }

  return (
    <>
      <section className="max-w-[1440px] mx-auto py-8 px-4 text-gray-900 mb-[60px] lg:mb-[0]">
        <div className="flex flex-wrap gap-4 mb-6">
          <StatsCard label="Total Ads" value={data.stats.totalAds} icon={Box} iconBg="bg-indigo-100" />
          <StatsCard label="Active Ads" value={data.stats.activeAds} icon={TrendingUp} iconBg="bg-green-100" />
          <StatsCard label="Pending Ads" value={data.stats.pendingAds} icon={Users} iconBg="bg-yellow-100" />
          <StatsCard label="Rejected Ads" value={data.stats.rejectedAds} icon={XCircle} iconBg="bg-red-100" />
          <StatsCard label="Expired Ads" value={data.stats.expiredAds} icon={RotateCcw} iconBg="bg-gray-200" />
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden mb-8">
          <div className="p-6 flex justify-between items-center border-b border-gray-50">
            <h2 className="text-lg font-bold">Top Rated Offers</h2>
            <div className="flex items-center gap-4">
              <Link href="/business/offers/" className="text-[#FF5C00] text-sm font-bold underline underline-offset-4">View all</Link>
            </div>
          </div>
          <div className="overflow-x-auto">
            <BusinessOfferList offers={data.topOffers} />
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <DonutChart data={data.charts.categoryPie} />
          <BarsDataset data={data.charts.offersByMonth} />
          <HorizontalBarChart data={data.charts.expiringOffers} />
        </div>
      </section>
    </>
  );
}