import { ExpiringOffers } from "@/types/offer";
import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";

interface Props {
    data: ExpiringOffers;
}

export default function HorizontalBarChart({ data }: Props) {
    const chartData = Object.entries(data).map(([key, value]) => ({
        name: key,
        value: value,
    }));

    return (
        <div className="bg-white rounded-2xl">
            <BarChart
                width={320}
                height={300}
                data={chartData}
                layout="vertical"
                margin={{ left: 5, right: 10 }}
            >
                <XAxis type="number" hide />
                <YAxis
                    dataKey="name"
                    type="category"
                    tickLine={false}
                    axisLine={false}
                    fontSize={16}
                    width={80}
                />

                <Bar dataKey="value" fill="#3b82f6" radius={6}>
                    <LabelList
                        dataKey="value"
                        position="center"
                        style={{ fontSize: 18, fontWeight: 600, fill: '#ffffff' }}
                    />
                </Bar>
            </BarChart>
        </div>
    );
}