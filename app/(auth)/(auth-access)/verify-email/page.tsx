"use client";
import Loading from "@/components/loading/Loading";
import { Seo } from "@/components/seo/Seo";
import { useVerifyEmail } from "@/features/auth/useVerifyEmail";
import Image from 'next/image';
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

function EmailVerification() {
    const searchParams = useSearchParams();
    const token = searchParams.get("token")?.toString();

    const router = useRouter();

    useEffect(() => {
        if (!token) {
            router.replace("/email-sent");
        }
    }, [token, router]);

    const onSuccess = () => {
        router.push("/verify-email/success");
    };

    const { submit, isPending } = useVerifyEmail({ onSuccess });

    useEffect(() => {
        if (!token) return;
        submit({ token });
    }, [token]);

    if (!token || isPending) return <Loading />;

    return (
        <div className="text-center space-y-6 py-4">
            <Seo title="Email Verified!" />

            <div className="flex justify-center">
                <Image
                    src="/emailFailure.png"
                    alt="Success"
                    width={500}
                    height={500}
                    priority
                    className="w-40 h-auto flex justify-center"
                />
            </div>

            <div className="space-y-2">
                <h1 className="text-2xl font-bold text-gray-900">Sorry! we couldn’t verify your email</h1>
                <p className="text-base text-gray-400">
                    Link may be invalid or has expired.
                </p>
            </div>
        </div>
    );
}

export default function EmailVerificationPage() {
    return (
        <Suspense fallback={<Loading />}>
            <EmailVerification />
        </Suspense>
    );
}