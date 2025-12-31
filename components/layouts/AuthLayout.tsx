"use client"
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { ReactNode } from 'react';
import RoleToggle from '../role-toggle/RoleToggle';

type AuthLayoutProps = {
    children: ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {

    return (
        <div className="w-full max-w-[1350px] mx-auto flex flex-col md:flex-row font-sans">

            {/* LEFT SIDE: Form Section */}
            <div className="flex flex-1 flex-col justify-center px-8 py-12 sm:px-16 bg-white">
                <div className="mx-auto w-full max-w-lg">
                    <Image
                        src="/Logo.png"
                        alt="Logo"
                        width={500}
                        height={500}
                        priority
                        className="w-50 h-auto mb-5"
                    />

                    {/* BADGE */}
                    <div className="my-8 hidden md:block">
                        <span className="bg-[#555555] text-white text-lg font-medium px-4 py-1.5 rounded-lg ">
                            For Deal Seekers
                        </span>
                    </div>
                    <div className="my-8">
                        <RoleToggle />
                    </div>
                    
                    {children}
                </div>
            </div>

            {/* RIGHT SIDE: Branding Section */}
            <div className="hidden md:flex flex-1 flex-col items-center justify-center bg-orange-600 p-12 text-white">
                <div className="max-w-md">

                    <Image
                        src="/DealStack.png"
                        alt="Logo"
                        width={500}
                        height={500}
                        priority
                        className="w-300 h-auto"
                    />


                    {/* Copy */}
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl font-bold">Discover Amazing Deals</h2>
                        <p className="text-orange-100 opacity-90">Never miss out on the best deals in your area.</p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-4 mt-6">
                        {["Post unlimited deals and promotions", "Track Business performance", "Manage active promotions"].map((item) => (
                            <li key={item} className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 opacity-70" />
                                <span className="font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

