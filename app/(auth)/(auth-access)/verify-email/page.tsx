"use client";

import { Button } from "@/components/button/Button";
import { Seo } from "@/components/seo/Seo";
import { Mail } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

function VerifyEmailContent() {

    return (
        <div className="text-center space-y-6 px-3">
            <Seo title="Check your inbox" />

            {/* Heading */}
            <div className="space-y-2">
                <h1 className="text-2xl font-bold text-gray-900">
                    Check your <span className="text-[#FF5700]">inbox!</span>
                </h1>
                <p className="text-sm text-gray-500">
                    We&apos;ve sent a verification link to your mail
                </p>

            </div>

            {/* Mail icon */}
            <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                    <Mail size={32} className="text-gray-400" />
                </div>
            </div>

            {/* Tip */}
            <p className="text-sm text-gray-500 leading-relaxed">
                Do <span className="font-semibold text-gray-700">check your spam folder</span>,
                sometimes it likes to hide there.
                <br />
                Click on the link to complete the verification process.
            </p>

            {/* Resend button */}
            <Button
                type="button"
                onClick={() => {/* wire up resend API call here */}}
            >
                Resend Email
            </Button>

            {/* Wrong email link */}
            <Link
                href="/signup"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#FF5700] hover:underline"
            >
                Wrong Email? &rarr;
            </Link>
        </div>
    );
}

export default function VerifyEmailPage() {
    return (
        <Suspense>
            <VerifyEmailContent />
        </Suspense>
    );
}
