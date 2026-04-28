import RoleLayoutAdapter from "@/components/container/RoleLayoutAdapter";
import BusinessMenu from "@/components/header/desktop/BusinessMenu";
import Header from "@/components/header/Header";
import MobileBottomMenu from "@/components/header/mobile/MobileBottomMenu";
import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <BusinessMenu />
            <RoleLayoutAdapter>
                <Header />
                {children}
                <MobileBottomMenu />
            </RoleLayoutAdapter>
        </> 
    )
} 