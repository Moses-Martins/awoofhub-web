import Image from "next/image";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen bg-[#FF5700] flex flex-col p-6">

           
            <div className="mb-6">
                <Image
                    src="/LogoWhite.png"
                    alt="AwoofHub"
                    width={140}
                    height={40}
                    priority
                />
            </div>

            {/* Centered form card */}
            <div className="flex-1 flex items-center justify-center">
                <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl px-10 py-8">
                    {children}
                </div>
            </div>

        </div>
    );
}
