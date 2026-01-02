"use client"
import { Button } from '@/components/button/Button';
import { InputField } from '@/components/form/InputField';
import { RoleContext } from '@/context/RoleContext';
import { useSignup } from '@/features/auth/useSignup';
import { SignupData } from '@/types/auth';
import { SignupFormProps } from '@/types/form-props';
import { Mail, User } from 'lucide-react';
import Link from 'next/link';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from "react-icons/fc";


export const IndividualSignup = ({
    onSuccess,
}: SignupFormProps) => {
    const signup = useSignup({ onSuccess });

    const { setRole } = useContext(RoleContext);

    const { register, handleSubmit, formState } = useForm<SignupData>();

    const onSubmit = (data: SignupData) => {
        signup.submit(data);
    };

    return (
        <>
            <div className="text-left">
                <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900">
                    Welcome back, <span className="text-orange-600">deal hunter!</span>
                </h1>
                <p className="font-baloo mt-3 text-lg sm:text-2xl text-slate-600">
                    Sign in to access your saved deals and <br /> personalized recommendations.
                </p>
            </div>

            <form className="mt-7 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <InputField
                    label="Full Name"
                    placeholder="What should we call you?"
                    compulsory={true}
                    type="text"
                    icon={<User size={18} color={"gray"} />}
                    {...register('name')}
                    error={formState.errors['name']}
                />

                <InputField
                    label="Email Address"
                    placeholder="doejohn@example.com"
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

                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="terms"
                            className="h-5 w-5 rounded border-slate-300 text-orange-600 focus:ring-orange-500"
                        />
                        <label htmlFor="terms" className="text-xs text-slate-600">
                            I agree to the <span className="text-orange-600 cursor-pointer">Terms of Service</span> and <span className="text-orange-600 cursor-pointer">Privacy Policy</span>
                        </label>
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="deal"
                            className="h-5 w-5 rounded border-slate-300 text-orange-600 focus:ring-orange-500"
                        />
                        <label htmlFor="deal" className="text-xs text-slate-600">
                            Send me the best deals weekly (you can unsubscribe anytime)
                        </label>
                    </div>
                </div>

                <div>
                    <Button
                        isLoading={signup.isPending}
                        isDisabled={signup.isPending}
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


                <div className="text-center space-y-2 pb-17">
                    <p className="text-gray-600 text-sm">
                        Already have an account?{' '}
                        <Link onClick={() => setRole("Deal Seekers")} href="/signin" className="text-[#FF5700] font-semibold hover:underline">Sign in</Link>
                    </p>
                </div>

            </form >
        </>
    );
};