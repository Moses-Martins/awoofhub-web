import Protected from "@/components/protected/Protected";
import { ReactNode } from "react";

export default function UserLayout({ children }: { children: ReactNode }) {
    return <Protected role="user"> <div>{children}</div></Protected>;
} 