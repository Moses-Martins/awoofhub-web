"use client"
import { Button } from '@/components/button/Button';
import { InputField } from '@/components/form/InputField';
import { RoleContext } from '@/context/RoleContext';
import { useLogin } from '@/features/auth/useLogin';
import { LoginData, SignupData } from '@/types/auth';
import { LoginFormProps } from '@/types/form-props';
import { Mail } from 'lucide-react';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from "react-icons/fc";
import { AlertTriangle, X } from 'lucide-react';


export const LoginForm = ({
    onSuccess,
}: LoginFormProps) => {
    const login = useLogin({ onSuccess });
    const [showError, setShowError] =useState(false);

    useEffect(() => {
        if (login.isError) setShowError (true);
    }, [login.isError]);

    const { setRole } = useContext(RoleContext);

    const { register, handleSubmit, formState, reset } = useForm<SignupData>();

    const onSubmit = (data: LoginData) => {
        login.submit(data);
    };

    return (
        <div className="w-100 mx-auto">
            <div className="text-left">
                <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900">
                    Welcome back, <span className="text-orange-600">deal hunter!</span>
                </h1>
                <p className="font-baloo mt-3 text-lg sm:text-2xl text-slate-600">
                    Manage your offers or save offers and get personalised recommendations
                </p>
            </div>

            {/* Error Popup */}
{showError && (
    <div className="fixed top-6 right-6 z-50 w-80  bg-white rounded-xl shadow-xl border border-gray-100 p-4 items-center">
        {/* Header */}
        <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2">
                <AlertTriangle size={18} className="text-orange-600 shrink-0 mt-0.5" />
                <p className="font-bold text-gray-900 text-sm leading-tight">
                    Couldn&apos;t log into your account!
                </p>
            </div>
            <button
                type="button"
                onClick={() => setShowError(false)}
                className="text-gray-400 hover:text-gray-600"
            >
                <X size={16} />
            </button>
        </div>

        {/* Error message */}
        <p className="mt-1 ml-6 text-sm text-[#FF5700]">
            {(login.error as Error)?.message ?? 'Incorrect password combination'}
        </p>

        {/* Action buttons */}
        <div className="mt-4 ml-24 flex items-center gap-2">
            <button
                type="button"
                onClick={() => {
                    setShowError(false);
                    reset();
                }}
                className="px-4 py-1.5 text-sm border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
                Reset
            </button>
            <button
                type="button"
                onClick={() => setShowError(false)}
                className="px-4 py-1.5 text-sm bg-[#FF5700] text-white rounded-lg hover:bg-[#e04e00] transition-colors"
            >
                Try again
            </button>
        </div>
    </div>
)}


            <form className="mt-7 space-y-6" onSubmit={handleSubmit(onSubmit)}>

                <InputField
                    label="Email Address"
                    placeholder="debby@lookgoodcosmestics.com"
                    compulsory={true}
                    type="email"
                    icon={<Mail size={18} color={"gray"} />}
                    {...register('email')}
                    error={formState.errors['email']}
                />

                <InputField
                    label="Password"
                    type="password"
                    compulsory={true}
                    placeholder="********"
                    {...register('password', {
                        required: 'Password field cannot be empty',
                    })}
                    error={formState.errors['password']}
                />

                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="terms"
                            className="h-5 w-5 rounded border-slate-300 text-orange-600 focus:ring-orange-500"
                        />
                        <label htmlFor="terms" className="text-sm text-slate-600">
                            Remember me
                        </label>
                    </div>
                    <div className="flex items-center">
                        <Link href="/forgot-password " className="ml-2 text-sm text-orange-600 hover:text-red-600 cursor-pointer">
                            Forgot Password ?
                        </Link>
                    </div>
                </div>

                <div>
                    <Button
                        isLoading={login.isPending}
                        isDisabled={login.isPending}
                        type="submit"
                    >
                        Sign In
                    </Button>
                </div>

                <div className="relative my-4 w-full max-w-xs sm:max-w-lg">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-400"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-800">OR</span>
                    </div>
                </div>


                <Button type="button" variant="outline">
                    <FcGoogle size={20} />
                    Continue with Google
                </Button>


                <div className="text-center space-y-2">
                    <p className="text-gray-600 text-sm">
                        Don't have an account yet?{' '}
                        <Link onClick={() => setRole("Deal Seekers")} href="/signup" className="text-[#FF5700] font-semibold hover:underline">Create one</Link>
                    </p>
                </div>

                {/* Guest Tip Box */}
                <div className="w-full mt-4 p-4 bg-[#FFF8F6] border border-gray-400 rounded-2xl flex items-center justify-center">
                    <p className="text-gray-600 text-sm text-center ">
                        <span className="mr-2">💡</span>
                        Tip: You can browse deals without signing in.{' '}
                        <Link href="#" className="text-[#FF5700] font-medium hover:underline">Continue as guest</Link>
                    </p>
                </div>

            </form >
        </div>
    );
};