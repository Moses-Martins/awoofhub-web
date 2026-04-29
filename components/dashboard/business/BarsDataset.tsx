"use client"
import { OffersByMonthData } from '@/types/offer';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';


interface Props {
  data: OffersByMonthData[];
}

export default function BarsDataset({ data }: Props) {

  const categories = data.length > 0
    ? Object.keys(data[0]).filter((key) => key !== 'month')
    : [];




  const colors = ['#ef4444', '#3b82f6', '#22c55e', '#f59e0b', '#64748b', '#ec4899', '#06b6d4', '#8b5cf6', '#713f12', '#0f172a'];

  return (
    <div className="bg-white p-5 rounded-2xl flex flex-col border border-gray-100 shadow-sm flex-1 min-w-[300px] flex justify-center">

      <h3 className="text-sm font-semibold text-center text-gray-700">
        Monthly Offer Distribution
      </h3>

      <ResponsiveContainer height={300} className="w-full">
        <BarChart
          data={data}
          margin={{ top: 20, right: 10, left: -20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />

          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend
            align="center"
            wrapperStyle={{ paddingLeft: 20 }}
          />

          {categories.map((category, index) => (
            <Bar
              key={category}
              dataKey={category}
              fill={colors[index % colors.length]}
              radius={[4, 4, 0, 0]}
              name={category}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
