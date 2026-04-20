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
    <div className="bg-white rounded-2xl">
      <ResponsiveContainer width={600} height={300}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 10, left: -20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          
          <XAxis dataKey="month" /> 
          <YAxis />
          <Tooltip />
          <Legend />

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
