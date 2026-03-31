"use client";

import { Button } from "@/components/button/Button";
import { InputField } from "@/components/form/InputField";
import { Lock, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

type ForgotPasswordData = { email: string };

export default function ForgotPasswordPage() {
    const router = useRouter();
    const { register, handleSubmit, formState } = useForm<ForgotPasswordData>();

    const onSubmit = (data: ForgotPasswordData) => {
        // TODO: call forgot password API
        router.push(`/forgot-password/sent?email=${encodeURIComponent(data.email)}`);
    };

    return (
        <div className="w-full max-w-sm bg-[#FF5700] rounded-2xl p-8 text-white text-center shadow-xl">

            {/* Lock icon */}
            <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                    <Lock size={32} className="text-[#FF5700]" />
                </div>
            </div>

            <h1 className="text-2xl font-bold mb-2">Forgot password?</h1>
            <p className="text-sm text-white/80 mb-6 leading-relaxed">
                Enter the email address associated with your account and we&apos;ll send you a reset link.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left [&_input]:!bg-transparent [&_input]:!border-white [&_input]:!rounded-lg [&_input]:!text-white [&_input]:placeholder-white [&_svg]:text-white [&_svg]:stroke-white">
                <InputField
                    label="Enter Email address"
                    placeholder="you@gmail.com"
                    type="email"
                    icon={<Mail size={18} />}
                    labelClassName="!text-white"
                    errorClassName="text-yellow-300"
                    {...register("email", { required: "Email is required" })}
                    error={formState.errors["email"]}
                />

                <Button type="submit" variant="outline">
                    Send Reset Link
                </Button>

                <Button
                    type="button"
                    onClick={() => router.back()}
                    className="!bg-[#AA3300] hover:!bg-[#922900] font-roboto"
                >
                    Go back
                </Button>
            </form>

            <p className="mt-5 text-sm text-white/80">
                Remember password?{" "}
                <a href="/login" className="font-semibold text-white hover:underline">
                    Login →
                </a>
            </p>
        </div>
    );
}
