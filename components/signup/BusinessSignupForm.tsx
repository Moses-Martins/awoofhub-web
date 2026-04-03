"use client"
import { Button } from '@/components/button/Button';
import { InputField } from '@/components/form/InputField';
import { RoleContext } from '@/context/RoleContext';
import { useSignup } from '@/features/auth/useSignup';
import { SignupFormProps } from '@/types/form-props';
import { Building2, Lock, Mail } from 'lucide-react';
import Link from 'next/link';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';

interface SignupFormData {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  role: "user" | "business"
};

export const BusinessSignup = ({ onSuccess }: SignupFormProps) => {

  const signup = useSignup({ onSuccess });
  const { setRole } = useContext(RoleContext);

  // Initialize react-hook-form with validation rules
  const { register, handleSubmit, formState, getValues } = useForm<SignupFormData>();

  const onSubmit = (data: SignupFormData) => {
    const { confirmPassword, ...signupData } = data;

    signup.submit({
      ...signupData,
      role: "business" as const,
    });
  };

  return (
    <>
      <div className="text-center mb-5">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Create your <span className="text-orange-600">business</span> account
        </h1>
        <p className="text-sm mt-1 text-slate-500">
          Publish deals and reach customers actively seeking deals.
        </p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Business Name"
          placeholder="Enter your business name"
          compulsory={true}
          type="text"
          icon={<Building2 size={18} color={"gray"} />}
          {...register('name', { required: 'Business name is required' })}
          error={formState.errors['name']}
        />

        <InputField
          label="Business Email address"
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
          placeholder="Enter your password"
          icon={<Lock size={18} color={"gray"} />}
          {...register('password', {
            required: 'Password field cannot be empty',
          })}
          error={formState.errors['password']}
        />

        <InputField
          label="Confirm Password"
          type="password"
          compulsory={true}
          placeholder="Confirm your password"
          icon={<Lock size={18} color={"gray"} />}
          {...register('confirmPassword', {
            required: 'Confirm Password field cannot be empty',
            validate: (value) =>
              value === getValues('password') || 'Passwords do not match',
          })}
          error={formState.errors['confirmPassword']}
        />

        <div>
          <p className="text-xs text-slate-600 leading-relaxed">
            By signing up, you agree to our{" "}
            <Link href="/terms" className="text-orange-600 hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-orange-600 hover:underline">
              Privacy Policy
            </Link>.
          </p>
        </div>

        <Button
          isLoading={signup.isPending}
          isDisabled={signup.isPending}
          type="submit"
        >
          Create Business Account
        </Button>

        <div className="text-center space-y-2 pb-17">
          <p className="text-gray-600 text-sm">
            Already have an account?{' '}
            <Link onClick={() => setRole("Individual")} href="/login" className="text-[#FF5700] font-semibold hover:underline">Log In</Link>
          </p>
        </div>
      </form>
    </>
  );
};