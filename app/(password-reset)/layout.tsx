import Image from "next/image";
import { ReactNode } from "react";

export default function PasswordResetLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col p-6">
            <div className="mb-8">
                <Image src="/Logo.png" alt="AwoofHub" width={140} height={40} priority />
            </div>
            <div className="flex flex-1 justify-center items-center">
                {children}
            </div>
        </div>
    );
}
