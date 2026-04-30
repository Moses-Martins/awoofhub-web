"use client";
import Spinner from "@/components/loading/Loading";
import { Seo } from "@/components/seo/Seo";
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EmailVerifiedPage() {
    const router = useRouter();
    const [step, setStep] = useState<"loading" | "verified">("verified");

    // Step 1 → Step 2 after 2.5s
    useEffect(() => {
        const t = setTimeout(() => setStep("loading"), 2500);
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

            <div className="flex justify-center">
                <Image
                    src="/emailSuccess.png"
                    alt="Success"
                    width={500}
                    height={500}
                    priority
                    className="w-40 h-auto flex justify-center"
                />
            </div>

            <div className="space-y-2">
                <h1 className="text-2xl font-bold text-gray-900">Email Verified!</h1>
                <p className="text-base text-gray-400">
                    Your account has been created <br /> successfully.
                </p>
            </div>
        </div>
    );
}




