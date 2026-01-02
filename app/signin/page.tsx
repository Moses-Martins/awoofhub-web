'use client'
import RoleToggle from "@/components/layouts/auth/RoleToggle";
import { BusinessLogin } from '@/components/login/BusinessLoginForm';
import { IndividualLogin } from '@/components/login/IndividualLoginForm';
import { Seo } from '@/components/seo/Seo';

import { RoleContext } from '@/context/RoleContext';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';


export default function LoginPage() {
  const router = useRouter();

  const { role } = useContext(RoleContext);

  const onSuccess = () => {
    const redirect = "/dashboard";
    router.push(redirect);
  }

  return (
    <div className="space-y-6 px-4 md:px-0">
      <Seo title="Sign In" />

      <RoleToggle />

      {role === "Deal Seekers" && <IndividualLogin onSuccess={onSuccess} />}
      {role === "Business" && <BusinessLogin onSuccess={onSuccess} />}
    </div>
  )
}