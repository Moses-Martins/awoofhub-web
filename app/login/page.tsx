'use client'
import { LoginForm } from '@/components/login/LoginForm';
import { Seo } from '@/components/seo/Seo';

import { useRouter } from 'next/navigation';


export default function LoginPage() {

  const router = useRouter();

  const onSuccess = () => {
    const redirect = "/dashboard";
    router.push(redirect);
  }

  return (
    <div className="space-y-6 px-4 md:px-0">
      <Seo title="Sign In" />
      <LoginForm onSuccess={onSuccess} />
    </div>
  )
}