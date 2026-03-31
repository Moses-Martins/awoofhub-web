"use client";

import { Seo } from "@/components/seo/Seo";
import Spinner from "@/components/loading/Loading";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EmailVerifiedPage() {
    const router = useRouter();
    const [step, setStep] = useState<"loading" | "verified">("loading");

    // Step 1 → Step 2 after 2.5s
    useEffect(() => {
        const t = setTimeout(() => setStep("verified"), 2500);
        return () => clearTimeout(t);
    }, []);

    // Step 2 → redirect home after another 2.5s
    useEffect(() => {
        if (step !== "verified") return;
        const t = setTimeout(() => router.push("/"), 2500);
        return () => clearTimeout(t);
    }, [step, router]);

    if (step === "loading") {
        return <LoadingScreen />;
    }

    return <VerifiedScreen />;
}

/* ─── Step 1: Great job! ────────────────────────────────────────────── */
function LoadingScreen() {
    return (
        <div className="text-center space-y-6 py-6">
            <Seo title="Welcome to AwoofHub!" />

            <div className="space-y-2">
                <h1 className="text-2xl font-bold text-gray-900">Great job!</h1>
                <p className="text-sm text-gray-500 leading-relaxed">
                    You&apos;re all set up and ready! We welcome you onboard!
                </p>
            </div>

            <Spinner />

            <p className="text-sm font-semibold text-[#FF5700]">
                Loading up your Awoof space...
            </p>
        </div>
    );
}

/* ─── Step 2: Email Verified! ───────────────────────────────────────── */
function VerifiedScreen() {
    return (
        <div className="text-center space-y-6 py-4">
            <Seo title="Email Verified!" />

            {/* Phone illustration with checkmark */}
            <div className="flex justify-center">
                <div className="relative">
                    <span className="absolute -top-3 -left-4 text-green-300 text-lg">✦</span>
                    <span className="absolute top-0 -right-5 text-green-200 text-sm">✦</span>
                    <span className="absolute bottom-2 -left-5 text-green-200 text-xs">✦</span>
                    <span className="absolute -bottom-1 right-0 text-green-300 text-sm">✦</span>

                    {/* Phone/card shape */}
                    <div className="w-24 h-32 bg-gray-100 rounded-2xl flex items-end justify-center pb-3 shadow-sm border border-gray-200">
                        <div className="space-y-1.5 w-14">
                            <div className="h-1.5 bg-gray-200 rounded-full" />
                            <div className="h-1.5 bg-gray-200 rounded-full w-10" />
                        </div>
                    </div>

                    {/* Green checkmark circle */}
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-md">
                        <Check size={24} className="text-white" strokeWidth={3} />
                    </div>
                </div>
            </div>

            <div className="space-y-2">
                <h1 className="text-2xl font-bold text-gray-900">Email Verified!</h1>
                <p className="text-sm text-gray-400">
                    Your account has been created successfully.
                </p>
            </div>
        </div>
    );
}




