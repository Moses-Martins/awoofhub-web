import Protected from "@/components/protected/Protected";
import { ReactNode } from "react";

export default function BusinessLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Protected role="business">
                {children}
            </Protected>
        </>
    )
} 