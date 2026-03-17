"use client"
import { Button } from '@/components/button/Button';
import { InputField } from '@/components/form/InputField';
import { RoleContext } from '@/context/RoleContext';
import { useSignup } from '@/features/auth/useSignup';
import { SignupData } from '@/types/auth';
import { SignupFormProps } from '@/types/form-props';
import { Building2, Lock, Mail } from 'lucide-react';
import Link from 'next/link';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from "react-icons/fc";

// Extend the type to include form‑only fields (checkboxes)
type BusinessSignupData = SignupData & {
  confirmPassword: string;
  termsAccepted: boolean;    // required checkbox
  dealsOptIn?: boolean;      // optional checkbox
};

export const BusinessSignup = ({ onSuccess }: SignupFormProps) => {
  const signup = useSignup({ onSuccess });
  const { setRole } = useContext(RoleContext);

  // Initialize react-hook-form with validation rules
  const {
    register,
    handleSubmit,
    formState,
    watch,
  } = useForm<BusinessSignupData>({
    mode: 'onChange',
    defaultValues: {
      termsAccepted: false,
      dealsOptIn: false,
    },
  });

  const onSubmit = (data: BusinessSignupData) => {
    // Remove fields that are not part of the API call
    const { confirmPassword: _, termsAccepted, dealsOptIn, ...signupData } = data;
    signup.submit(signupData);
  };

  // Determine if the button should be disabled
  const isButtonDisabled = !formState.isValid || signup.isPending;

  return (
    <>
      <div className="text-left mb-5">
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
          icon={<Building2 size={18} color={"#FF5700"} />}
          {...register('name', { required: 'Business name is required' })}
          error={formState.errors['name']}
        />

        <InputField
          label="Business Email address"
          placeholder="you@business.com"
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
          placeholder="JohnDEbby1234%@"
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

        <div className="flex flex-col gap-2">
          {/* Terms checkbox – required */}
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="terms"
              className="h-4 w-4 mt-0.5 rounded border-slate-300 text-orange-600 focus:ring-orange-500"
              {...register('termsAccepted', {
                required: 'You must accept the terms',
              })}
            />
            <label htmlFor="terms" className="text-xs text-slate-600">
              I agree to the{' '}
              <Link href="/terms" className="text-orange-600 hover:underline">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="text-orange-600 hover:underline">
                Privacy Policy
              </Link>
            </label>
          </div>

          {/* Deals checkbox – optional */}
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="deals"
              className="h-4 w-4 mt-0.5 rounded border-slate-300 text-orange-600 focus:ring-orange-500"
              {...register('dealsOptIn')}
            />
            <label htmlFor="deals" className="text-xs text-slate-600">
              Send me the{' '}
              <span className="text-orange-600">best deals weekly</span>
              {' '}(you can unsubscribe anytime)
            </label>
          </div>
        </div>

        <Button
          isLoading={signup.isPending}
          isDisabled={isButtonDisabled}
          type="submit"
        >
          Create Business Account
        </Button>

        <div className="relative my-3 w-full">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">OR</span>
          </div>
        </div>

        <Button type="button" variant="outline">
          <FcGoogle size={20} />
          Continue with Google
        </Button>

        <div className="text-center space-y-1 pt-1 pb-2">
          <p className="text-gray-600 text-sm">
            Already have an account?{' '}
            <Link href="/login" className="text-[#FF5700] font-semibold hover:underline">
              Login
            </Link>
          </p>
          <p className="text-gray-600 text-sm">
            Looking for deals instead?{' '}
            <Link
              onClick={() => setRole("Deal Seekers")}
              href="/signupPage"
              className="text-[#FF5700] font-semibold hover:underline"
            >
              Sign up as deal hunter
            </Link>
          </p>
        </div>
      </form>
    </>
  );
};