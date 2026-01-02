"use client";

import Business from "@/components/layouts/auth/business/Business";
import Individual from "@/components/layouts/auth/individual/Individual";
import { RoleContext } from "@/context/RoleContext";
import { ReactNode, useContext } from "react";

export default function DynamicLayout({
  children,
}: {
  children: ReactNode;
}) {
  // Access the current role from the shared Context
  const { role } = useContext(RoleContext);

  if (role === "Business") {
    return <Business>{children}</Business>;
  }

  // Default layout for Deal Seekers
  return <Individual>{children}</Individual>;
}