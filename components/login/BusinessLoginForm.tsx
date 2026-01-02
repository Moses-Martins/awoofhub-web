"use client"
import { Button } from '@/components/button/Button';
import { InputField } from '@/components/form/InputField';
import { RoleContext } from '@/context/RoleContext';
import { useLogin } from '@/features/auth/useLogin';
import { LoginData, SignupData } from '@/types/auth';
import { LoginFormProps } from '@/types/form-props';
import { Mail } from 'lucide-react';
import Link from 'next/link';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from "react-icons/fc";

export const BusinessLogin = ({
    onSuccess,
}: LoginFormProps) => {
    const login = useLogin({ onSuccess });

    const { setRole } = useContext(RoleContext);

    const { register, handleSubmit, formState } = useForm<SignupData>();

    const onSubmit = (data: LoginData) => {
        login.submit(data);
    };

    return (
        <>
            <div className="text-left">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                    Welcome back
                </h1>
                <p className="font-baloo mt-3 text-lg  sm:text-2xl  text-slate-600">
                    Sign in to manage your deals and grow <br/>your business.
                </p>
            </div>

            <form className="mt-7 space-y-6" onSubmit={handleSubmit(onSubmit)}>

                <InputField
                    label="Email Address"
                    placeholder="you@business.com"
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
                        <Link onClick={() => setRole("Business")} href="/signup" className="text-[#FF5700] font-semibold hover:underline">Create one</Link>
                    </p>
                </div>
            </form >
        </>
    );
};