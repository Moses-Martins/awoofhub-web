"use client"
import { useUser } from "@/features/user/useUser";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiBell, FiHeart, FiHome, FiMessageCircle } from "react-icons/fi";

export default function MobileBottomMenu() {
    const { data: currentUser } = useUser();
    const pathname = usePathname();


    return (
        <div className="fixed bottom-0 left-0 right-0 z-10 flex items-center border-t border-gray-300 bg-white lg:hidden pb-3">

            {/* Home */}
            <div className="flex-1">
                <Link
                    href="/"
                    className={`flex flex-col items-center justify-center pt-3 ${pathname === '/' ? 'text-primary border-t' : 'text-gray-700'}`}
                >
                    <div className="text-[20px] relative">
                        <FiHome />
                    </div>
                    <span className="text-[14px]">Home</span>
                </Link>
            </div>

            {/* Message */}
            <div className="flex-1">
                <Link
                    href={currentUser ? '/message' : '/login'}
                    className={`flex flex-col items-center justify-center pt-3 ${pathname.startsWith('/message') ? 'text-primary border-t' : 'text-gray-700'}`}
                >
                    <div className="text-[20px] relative">
                        <FiMessageCircle />
                    </div>
                    <span className="text-[14px]">Message</span>
                </Link>
            </div>

            {/* Notification */}
            <div className="flex-1">
                <Link
                    href={currentUser ? '/notifications' : '/login'}
                    className={`flex flex-col items-center justify-center pt-3 ${pathname === '/notifications' ? 'text-primary border-t' : 'text-gray-700'}`}
                >
                    <div className="text-[20px] relative">
                        <FiBell />
                    </div>
                    <span className="text-[14px]">Notification</span>
                </Link>
            </div>

            {/* Wishlist */}
            <div className="flex-1">
                <Link
                    href={currentUser ? '/wishlist' : '/login'}
                    className={`flex flex-col items-center justify-center pt-3 ${pathname === '/wishlist' ? 'text-primary border-t' : 'text-gray-700'}`}
                >
                    <div className="text-[20px] relative">
                        <FiHeart />
                    </div>
                    <span className="text-[14px]">Wishlist</span>
                </Link>
            </div>
        </div>
    )
};



