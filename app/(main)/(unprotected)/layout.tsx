import BlockBusiness from "@/components/blockBusiness/BlockBusiness";
import { ReactNode } from "react";

export default function UnprotectedLayout({ children }: { children: ReactNode }) {
    return <BlockBusiness>{children}</BlockBusiness>;
} 