'use client'
import { Seo } from '@/components/seo/Seo';
import { useRouter } from 'next/navigation';
import { LoginForm } from './login-form';


export default function LoginPage() {
  const router = useRouter();

  const onSuccess = () => {
    const redirect = "/dashboard"; 
    router.push(redirect);
  }
 
  return (
    <>
      <Seo title="Sign In" />
      <LoginForm onSuccess={onSuccess} />
    </>
  )
}