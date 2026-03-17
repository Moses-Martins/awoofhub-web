"use client";

import { Button } from "@/components/button/Button";
import { AlertCircle } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();

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
                            <span className="absolute -bottom-2 -left-3 text-gray-200 text-xs">✦</span>
                            <span className="absolute -bottom-1 right-0 text-gray-300 text-sm">✦</span>

                            <div className="w-24 h-28 bg-white rounded-2xl flex flex-col items-center justify-center shadow-sm border border-gray-200 gap-3">
                                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                                    <AlertCircle size={22} className="text-gray-400" />
                                </div>
                                <div className="space-y-1.5 w-14">
                                    <div className="h-1.5 bg-gray-200 rounded-full" />
                                    <div className="h-1.5 bg-gray-200 rounded-full w-10" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h1 className="text-2xl font-bold text-gray-900">Page isn&apos;t available</h1>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            The link may be broken, or doesn&apos;t exist. Let&apos;s take you back to the homepage.
                        </p>
                    </div>

                    <Button type="button" onClick={() => router.push("/")}>
                        Return to homepage
                    </Button>
                </div>
            </div>
        </div>
    );
}
