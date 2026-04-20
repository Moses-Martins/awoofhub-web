import { CategoryData } from '@/types/offer';
import { Legend, Pie, PieChart, Sector, Tooltip } from 'recharts';

interface Props {
  data: CategoryData[];
}

export default function PieChartWithPaddingAngle({ data }: Props) {

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#64748b', '#ec4899', '#06b6d4', '#8b5cf6', '#713f12', '#0f172a'];

  const chartData = data.map((item, index) => ({
    ...item,
    fill: COLORS[index % COLORS.length],
  }));

  return (
    <div className="bg-white p-2 rounded-2xl flex min-w-80">
      <PieChart style={{ width: '100%', aspectRatio: 1 }}>
        <Pie
          data={chartData}
          innerRadius="80%"
          outerRadius="100%"
          cornerRadius="50%"
          paddingAngle={5}
          dataKey="value"
          shape={(props: any) => {
            return <Sector {...props} fill={props.payload.fill} />;
          }}
        />

        <Tooltip />
        <Legend
          layout="vertical"
          align="right"
          verticalAlign="middle"
          wrapperStyle={{ fontSize: 14, paddingLeft: 20 }}
        />
      </PieChart>
    </div>
  );
}
