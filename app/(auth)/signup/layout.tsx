import { RoleProvider } from "@/context/RoleContext";
import { ReactNode } from "react";

export default function SignupLayout({ children }: { children: ReactNode }) {
    return (
        <RoleProvider>
            {children}
        </RoleProvider>
    );
}
