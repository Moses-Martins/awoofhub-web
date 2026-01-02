import DynamicLayout from "@/components/layouts/auth/DynamicLayout";
import { ReactNode } from "react";

export default function SignupLayout({ children }: { children: ReactNode }) {
    return (
            <DynamicLayout>
                {children}
            </DynamicLayout>
    )
}