"use client";

import RoleToggle from "@/components/layouts/auth/RoleToggle";
import { Seo } from "@/components/seo/Seo";
import { BusinessSignup } from "@/components/signup/BusinessSignupForm";
import { IndividualSignup } from "@/components/signup/IndividualSignupForm";
import { RoleContext } from "@/context/RoleContext";
import { useContext } from "react";

export default function SignupPage() {
  const {role} = useContext(RoleContext);

  const onSuccess = () => {
    
  }

  return (
    <div className="space-y-6 px-4 md:px-0">
      <Seo title="Sign Up" />
      
      <RoleToggle />

      {role === "Deal Seekers" && <IndividualSignup onSuccess={onSuccess} />}
      {role === "Business" && <BusinessSignup onSuccess={onSuccess} />}
    </div>
  );
}
