"use client"
import { Button } from '@/components/button/Button';
import { InputField } from '@/components/form/InputField';
import { RoleContext } from '@/context/RoleContext';
import { useSignup } from '@/features/auth/useSignup';
import { SignupData } from '@/types/auth';
import { SignupFormProps } from '@/types/form-props';
import { Building2, Mail, Lock } from 'lucide-react';
import Link from 'next/link';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from "react-icons/fc";

type IndividualSignupData = SignupData & { confirmPassword: string };


export const IndividualSignup = ({
    onSuccess,
}: SignupFormProps) => {
    const signup = useSignup({ onSuccess });

    const { setRole } = useContext(RoleContext);

    const { register, handleSubmit, formState, watch } = useForm<IndividualSignupData>({ mode: 'onChange' });

    const onSubmit = (data: IndividualSignupData) => {
        const { confirmPassword: _, ...signupData } = data;
        signup.submit(signupData);
    };
 

    return (
        <>
            <div className="text-left">
                <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900">
                   Join the <span className="text-orange-600">deal hunter!</span>
                </h1>
                <p className="font-baloo mt-3 text-lg sm:text-xl text-slate-600">
                    Create a free account to save deals and get <br /> personalized recommendations.
                </p>
            </div>

            <form className="mt-7 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <InputField
                    label="Full Name"
                    placeholder="Enter your name"
                    compulsory={true}
                    type="text"
                    icon={<Building2 size={18} color={"#FF5700"} />}
                    {...register('name', { required: 'Full name is required' })}
                    error={formState.errors['name']}
                />

                <InputField
                    label="Email Address"
                    placeholder="johndebby@gmail.com"
                    compulsory={true}
                    type="email"
                    icon={<Mail size={18} color={"#FF5700"} />}
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address',
                        },
                    })}
                    error={formState.errors['email']}
                />

                <InputField
                    label="Password"
                    type="password"
                    compulsory={true}
                    placeholder="johnDEbby1234%@"
                    icon={<Lock size={18} color={"#FF5700"} />}
                    {...register('password', {
                        required: 'Password field cannot be empty',
                    })}
                    error={formState.errors['password']}
                />

                <InputField
                    label="Confirm Password"
                    type="password"
                    compulsory={true}
                    placeholder="JohnDEbby1234%@"
                    icon={<Lock size={18} color={"#FF5700"} />}
                    {...register('confirmPassword', {
                        required: 'Please confirm your password',
                        validate: (value) =>
                            value === watch('password') || 'Passwords do not match',
                    })}
                    error={formState.errors['confirmPassword']}
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
                            Send me the <span className="text-orange-600">best deals weekly</span>  (you can unsubscribe anytime)
                        </label>
                    </div>
                </div>

                <div>
                    <Button
                        isLoading={signup.isPending}
                        isDisabled={!formState.isValid || signup.isPending}
                        type="submit"
                    >
                       Create Account
                    </Button>
                </div>
                <Button type="button" variant="outline">
                    Continue as a guest
                </Button>

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


                <div className="text-center space-y-2 pb-17">
                    <p className="text-gray-600 text-sm">
                        Already have an account?{' '}
                        <Link onClick={() => setRole("Deal Seekers")} href="/login" className="text-[#FF5700] font-semibold hover:underline">Sign in</Link>
                    </p>
                </div>

            </form >
        </>
    );
};