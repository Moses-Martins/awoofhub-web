import { ReactNode } from "react";
import AuthLayout from "../../components/layouts/AuthLayout";

export default function LoginLayout({ children }: { children: ReactNode }) {
  return <AuthLayout>{children}</AuthLayout>;
}