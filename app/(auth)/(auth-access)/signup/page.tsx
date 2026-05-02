"use client";

import { Seo } from "@/components/seo/Seo";
import SignupForm from "@/components/signup/SignupForm";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const onSuccess = () => {
    router.push(`/email-sent/`);
  };

  return (
    <div className="space-y-6 px-4 md:px-0">
      <Seo title="Sign Up" />
      <SignupForm onSuccess={onSuccess} />
    </div>
  );
}
