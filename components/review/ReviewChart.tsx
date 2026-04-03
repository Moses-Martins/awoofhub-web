"use client"
import { Offer } from "@/types/offer";
import Rating from "@mui/material/Rating";
import { Bar, BarChart, LabelList, Tooltip, XAxis, YAxis } from "recharts";


interface Props {
    offer: Offer;
}

export default function ReviewChart({ offer }: Props) {
    const { ratingDistribution, avgRating, reviewCount } = offer;
    const chartData = Object.keys(ratingDistribution)
        .reverse()
        .map((key) => {
            const count = ratingDistribution[key as keyof typeof ratingDistribution] || 0;
            const percentage = reviewCount > 0 ? (count / reviewCount) * 100 : 0;

            return {
                rating: `${key} star`,
                value: Math.round(percentage),
            };
        });


    return (
        <>
            {/* Header Section */}
            <div>
                <h2 className="text-xl font-bold mb-2">Average Rating</h2>
                <div className="flex items-center gap-2">
                    <div className="flex ml-[-5px] text-orange-400">
                        <Rating
                            name="readonly"
                            value={offer.avgRating}
                            precision={0.1}
                            readOnly
                            sx={{
                                '& .MuiRating-icon': {
                                    marginRight: '-7px', // tighter spacing
                                },
                                '& .MuiRating-iconFilled': {
                                    color: '#FFC000', // filled stars
                                },
                                '& .MuiRating-iconEmpty': {
                                    color: '#ccc', // empty stars
                                },
                            }}
                        />
                    </div>
                    <span className="font-bold text-gray-900">{avgRating} out of 5</span>
                </div>
                <p className="text-sm text-gray-500 mt-1 font-bold">
                    {reviewCount.toLocaleString()} total rating
                </p>
            </div>

            <BarChart className="border border-gray-200 rounded-lg" width={300} height={250} data={chartData} layout="vertical" margin={{ right: 50 }}>
                <XAxis type="number" hide />
                <YAxis dataKey="rating" type="category" tickLine={false} axisLine={false} />
                <Tooltip />
                <Bar dataKey="value" fill="#FFA41C" radius={6}>
                    <LabelList dataKey="value" position="right" fontSize={12} fill="#302f2f" stroke="#302f2f" strokeWidth={0.5} formatter={(label: any) => (label != null ? `${label}%` : "")} />
                </Bar>
            </BarChart>
        </>
    );
}






