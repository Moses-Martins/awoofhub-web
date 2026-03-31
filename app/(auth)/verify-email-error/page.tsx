"use client";

import { Button } from "@/components/button/Button";
import { Seo } from "@/components/seo/Seo";
import { XCircle } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function VerifyEmailErrorContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const email = searchParams.get("email") ?? "you@example.com";

    return (
        <div className="text-center space-y-6 py-4">
            <Seo title="Email Verification Failed" />

            <div className="flex justify-center">
                <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
                    <XCircle size={48} className="text-red-500" />
                </div>
            </div>

            <div className="space-y-2">
                <h1 className="text-2xl font-bold text-gray-900">
                    Sorry! we couldn&apos;t verify your email
                </h1>
                <p className="text-sm text-gray-500">
                    Something went wrong while validating your email:
                </p>
                <p className="text-sm font-semibold text-[#FF5700]">{email}</p>
                <p className="text-sm text-gray-400">Link may be invalid or has expired.</p>
            </div>

            <Button
                type="button"
                onClick={() => {/* wire up resend API call here */}}
            >
                Resend link
            </Button>

            <Button
                type="button"
                variant="outline"
                onClick={() => router.push("/signup")}
            >
                Change email
            </Button>
        </div>
    );
}

export default function VerifyEmailErrorPage() {
    return (
        <Suspense>
            <VerifyEmailErrorContent />
        </Suspense>
    );
}
