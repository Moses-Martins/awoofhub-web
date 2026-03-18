"use client";

import { Button } from "@/components/button/Button";
import { InputField } from "@/components/form/InputField";
import { Lock } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

type ResetPasswordData = {
    password: string;
    confirmPassword: string;
};

export default function ResetPasswordPage() {
    const router = useRouter();
    const { register, handleSubmit, formState, watch } = useForm<ResetPasswordData>();

    const onSubmit = () => {
        // TODO: call reset password API with token from URL
        router.push("/reset-password/success");
    };

    return (
        <div className="w-full max-w-sm bg-[#FF5700] rounded-2xl p-8 text-white text-center shadow-xl">

            {/* Lock icon */}
            <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                    <Lock size={32} className="text-white" />
                </div>
            </div>

            <h1 className="text-2xl font-bold mb-2">Reset your password</h1>
            <p className="text-sm text-white/80 mb-6">
                Create your new password to proceed.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
                <InputField
                    label="Enter New Password"
                    placeholder="New password"
                    type="password"
                    {...register("password", { required: "Password is required" })}
                    error={formState.errors["password"]}
                />

                <InputField
                    label="Confirm Password"
                    placeholder="Confirm password"
                    type="password"
                    {...register("confirmPassword", {
                        required: "Please confirm your password",
                        validate: (val) =>
                            val === watch("password") || "Passwords do not match",
                    })}
                    error={formState.errors["confirmPassword"]}
                />

                <Button type="submit" variant="outline">
                    Reset Password
                </Button>

                <Button
                    type="button"
                    onClick={() => router.push("/")}
                    className="!bg-[#AA3300] hover:!bg-[#922900] font-roboto"
                >
                    Do this later
                </Button>
            </form>
        </div>
    );
}
