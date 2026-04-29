import { ExpiringOffers } from "@/types/offer";
import { Bar, BarChart, LabelList, ResponsiveContainer, XAxis, YAxis } from "recharts";

interface Props {
    data: ExpiringOffers;
}

export default function HorizontalBarChart({ data }: Props) {
    const chartData = Object.entries(data).map(([key, value]) => ({
        name: key,
        value: value,
    }));

    return (
        <div className="bg-white p-5 rounded-2xl flex flex-col border border-gray-100 shadow-sm flex-1 min-w-[300px] flex justify-center">
            <h3 className="text-sm font-semibold text-center text-gray-700">
                Offers by Expiry Status
            </h3>
            <ResponsiveContainer height={300} className="w-full">
                <BarChart
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
            </ResponsiveContainer>
        </div>
    );
}