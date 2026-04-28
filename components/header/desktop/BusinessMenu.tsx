"use client"
import { useUser } from "@/features/user/useUser";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdAddBox } from "react-icons/md";
import { SiSimpleanalytics } from "react-icons/si";
import { TiThList } from "react-icons/ti";

export default function BusinessMenu() {

    const { data: currentUser } = useUser();
    const pathname = usePathname()

    const isInsideChannel = pathname.includes('/message/') && pathname !== '/message'

    return (
        <>
            {(currentUser?.role === "business") && (
                <div className={`fixed top-0 z-[100] w-13 h-screen hidden lg:flex flex-col items-center justify-start pt-30 gap-8 border-2 border-gray-300 bg-white ${isInsideChannel ? 'hidden md:flex' : ''}`}>

                    <Link
                        href="/business/dashboard"
                        className={`flex items-center justify-start px-3 w-full ${pathname === '/business/dashboard' ? 'text-primary' : 'text-black'}`}
                    >
                        <SiSimpleanalytics size={30} />
                    </Link>

                    <Link
                        href={'/business/offers/create'}
                        className={`flex items-center justify-start px-3 w-full ${pathname === '/business/offers/create' ? 'text-primary' : 'text-black'}`}
                    >
                        <MdAddBox size={30} />
                    </Link>

                    <Link
                        href={'/business/offers'}
                        className={`flex items-center justify-start px-3 w-full ${pathname === '/business/offers' ? 'text-primary' : 'text-black'}`}
                    >
                        <TiThList size={30} />
                    </Link>

                </div>
            )}
        </>
    )
};
