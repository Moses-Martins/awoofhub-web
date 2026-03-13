import Protected from "@/components/protected/Protected";
import { ReactNode } from "react";

export default function UserLayout({ children }: { children: ReactNode }) {
    return <Protected> <div>{children}</div></Protected>;
}