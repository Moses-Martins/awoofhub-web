"use client"
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { ReactNode } from 'react';

type AuthLayoutProps = {
    children: ReactNode;
};

export default function Business({ children }: AuthLayoutProps) {

    return (
        <div className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row font-sans">

            {/* LEFT SIDE: Form Section */}
            <div className="flex flex-1 flex-col justify-center px-2 py-12 sm:px-16 bg-white">
                <Image
                    src="/Logo.png"
                    alt="Logo"
                    width={500}
                    height={500}
                    priority
                    className="w-50 h-auto mb-5 mx-4"
                />

                <div className="mx-auto w-full max-w-lg">
                    {children}
                </div>
            </div>

            {/* RIGHT SIDE: Branding Section */}
            <div className="hidden md:flex flex-1 flex-col items-center justify-center bg-orange-600 p-12 text-white">
                <div className="max-w-md">

                    <Image
                        src="/BusinessStack.png"
                        alt="Business Stack"
                        width={500}
                        height={500}
                        className="w-300 h-auto"
                    />


                    {/* Copy */}
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl font-bold">Grow Your Business With AwoofHub</h2>
                        <p className="text-orange-100 opacity-90">Reach thousands of eager deal seekers and watch your business grow.</p>
                    </div>

                    {/* Features */}
                    <ul className="font-baloo space-y-4 mt-6">
                        {["Post unlimited deals and promotions", "Track Business performance", "Manage active promotions", "Respond to customer enquiries"].map((item) => (
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

