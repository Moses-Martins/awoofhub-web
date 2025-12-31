"use client"
import { Button } from '@/components/form/Button';
import { InputField } from '@/components/form/InputField';
import { useLogin } from '@/features/auth/useLogin';
import { LoginData } from '@/types/auth';
import { Mail } from 'lucide-react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { FcGoogle } from "react-icons/fc";

export type LoginFormProps = {
    onSuccess: () => void;
};

export const LoginForm = ({
    onSuccess,
}: LoginFormProps) => {
    const login = useLogin({ onSuccess });

    const { register, handleSubmit, formState } = useForm<LoginData>();

    const onSubmit = (data: LoginData) => {
        login.submit(data);
    };

    return (
        <>

            <div className="text-left">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                    Welcome back, <span className="text-orange-600">deal hunter!</span>
                </h1>
                <p className="mt-3 text-lg text-slate-600">
                    Sign in to access your saved deals and <br /> personalized recommendations.
                </p>
            </div>

            <form className="mt-7 space-y-6" onSubmit={handleSubmit(onSubmit)}>

                <InputField
                    label="Email Address"
                    placeholder="doejohn@example.com"
                    compulsory='True'
                    type="email"
                    icon={<Mail size={18} color={"gray"} />}
                    {...register('email')}
                    error={formState.errors['email']}
                />

                <InputField
                    label="Password"
                    type="password"
                    compulsory='True'
                    placeholder="**************"
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
                        <Link href="#" className="ml-2 text-sm text-red-500 hover:text-red-700 cursor-pointer">
                            Forgot Password
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


                <button className="w-full flex items-center justify-center gap-3 border border-gray-300 bg-white py-2.5 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
                    <FcGoogle size={20} />
                    <span className="text-gray-700 font-medium">Continue with Google</span>
                </button>


                <div className="text-center space-y-2">
                    <p className="text-gray-600 text-sm">
                        Don't have an account yet?{' '}
                        <a href="#" className="text-[#FF5700] font-semibold hover:underline">Create one</a>
                    </p>
                    <p className="text-gray-500 text-sm">
                        Are you a business?{' '}
                        <a href="#" className="text-[#FF5700] font-semibold hover:underline">Sign in as business</a>
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
        </>
    );
};