"use client"
import { useUser } from "@/features/user/useUser";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";
import { GoHomeFill } from "react-icons/go";
import { MdAddBox } from "react-icons/md";
import { SiSimpleanalytics } from "react-icons/si";
import { TiThList } from "react-icons/ti";

export default function BusinessMenu() {

    const [isExtend, setExtend] = useState(false);

    const { data: currentUser } = useUser();
    const pathname = usePathname()


    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        const handleScroll = () => {
            setIsScrolling(true);

            clearTimeout(timeout);
            timeout = setTimeout(() => {
                setIsScrolling(false);
            }, 150);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isInsideChannel = pathname.includes('/message/') && pathname !== '/message'

    return (
        <>
            {(currentUser?.role === "business") && (
                <div onMouseEnter={() => setExtend(true)} onMouseLeave={() => setExtend(false)} className={`fixed top-40 left-2 z-[99] rounded-md ${isExtend ? "w-42" : "w-15"} h-80 flex flex-col items-center justify-around border border-gray-600 shadow-sm shadow-gray-800 bg-black ${isScrolling && !isExtend ? "opacity-100" : "opacity-30 hover:opacity-100"} ${isInsideChannel ? 'hidden md:flex' : ''} transition-all duration-300`}>

                    <Link
                        href="/"
                        className={`flex items-center justify-start px-3 w-full ${pathname === '/' ? 'text-primary' : 'text-white'
                            }`}
                    >
                        <GoHomeFill size={30} />

                        {isExtend && <span className="ml-3 w-24">Home</span>}
                    </Link>

                    <Link
                        href="/business/dashboard"
                        className={`flex items-center justify-start px-3 w-full ${pathname === '/business/dashboard' ? 'text-primary' : 'text-white'}`}
                    >
                        <SiSimpleanalytics size={30} />
                        {isExtend && <span className="ml-3 w-25">Dashboard</span>}
                    </Link>

                    <Link
                        href={'/business/create'}
                        className={`flex items-center justify-start px-3 w-full ${pathname === '/notifications' ? 'text-primary' : 'text-white'}`}
                    >
                        <MdAddBox size={30} />
                        {isExtend && <span className="ml-3 w-24">Create</span>}
                    </Link>



                    <Link
                        href={'/business/offers'}
                        className={`flex items-center justify-start px-3 w-full ${pathname === '/wishlist' ? 'text-primary' : 'text-white'}`}
                    >
                        <TiThList size={30} />
                        {isExtend && <span className="ml-3 w-24">Offers</span>}
                    </Link>

                </div>
            )}
        </>
    )
};

