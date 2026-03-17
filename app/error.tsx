"use client";

import { Button } from "@/components/button/Button";
import { Cloud } from "lucide-react";
import Image from "next/image";

export default function Error({ reset }: { reset: () => void }) {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col p-6">
            <div className="mb-8">
                <Image src="/Logo.png" alt="AwoofHub" width={140} height={40} priority />
            </div>

            <div className="flex flex-1 items-center justify-center">
                <div className="text-center space-y-6 max-w-sm">

                    {/* Illustration */}
                    <div className="flex justify-center">
                        <div className="relative">
                            <span className="absolute -top-3 -left-4 text-gray-300 text-lg">✦</span>
                            <span className="absolute top-0 -right-5 text-gray-200 text-sm">✦</span>
                            <span className="absolute -bottom-1 right-0 text-gray-300 text-sm">✦</span>

                            <div className="w-28 h-20 bg-blue-50 rounded-3xl flex items-center justify-center shadow-sm border border-gray-200">
                                <Cloud size={44} className="text-gray-300" />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h1 className="text-2xl font-bold text-gray-900">Something went wrong</h1>
                        <p className="text-sm text-gray-500">Try refreshing the page</p>
                    </div>

                    <Button type="button" onClick={reset}>
                        Refresh page
                    </Button>
                </div>
            </div>
        </div>
    );
}
