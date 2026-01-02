import DynamicLayout from "@/components/layouts/auth/DynamicLayout";
import { ReactNode } from "react";

export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
      <DynamicLayout>
        {children}
      </DynamicLayout>
  )
}