"use client"
import { useMessageCount } from "@/features/chat/useMessageCount";
import { useUser } from "@/features/user/useUser";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiBell, FiHeart, FiHome, FiMessageCircle } from "react-icons/fi";
import { MdAddBox } from "react-icons/md";
import { SiSimpleanalytics } from "react-icons/si";
import { TiThList } from "react-icons/ti";

export default function MobileBottomMenu() {
    const { data: currentUser } = useUser();
    const { data: messageCount } = useMessageCount() // It needs to be below useUser() unless it keeps refreshing.
    const pathname = usePathname()

    const isInsideChannel = pathname.includes('/message/') && pathname !== '/message'

    return (
        <div className={`fixed bottom-0 left-0 right-0 z-[99] flex items-center border-t border-gray-300 bg-white lg:hidden pb-3 ${isInsideChannel ? 'hidden md:flex' : ''}`}>
            {currentUser?.role === "business" ?
                (
                    <>
                        <div className="flex-1">
                            <Link
                                href="/"
                                className={`flex flex-col items-center justify-center pt-3 ${pathname === '/business/dashboard' ? 'text-primary border-t' : 'text-gray-700'}`}
                            >
                                <div className="text-[20px] relative">
                                    <SiSimpleanalytics />
                                </div>
                                <span className="text-[12px] xxs:text-[14px]">Dashboard</span>
                            </Link>
                        </div>                       

                        <div className="flex-1">
                            <Link
                                href="/business/offers"
                                className={`flex flex-col items-center justify-center pt-3 ${pathname === '/business/offers' ? 'text-primary border-t' : 'text-gray-700'}`}
                            >
                                <div className="text-[20px] relative">
                                    <TiThList />
                                </div>
                                <span className="text-[12px] xxs:text-[14px]">Offers</span>
                            </Link>
                        </div>

                         <div className="flex-1">
                            <Link
                                href="/business/offers/create"
                                className={`flex flex-col items-center justify-center pt-3 ${pathname === '/business/offers/create' ? 'text-primary border-t' : 'text-gray-700'}`}
                            >
                                <div className="text-[20px] relative">
                                     <MdAddBox />
                                </div>
                                <span className="text-[12px] xxs:text-[14px]">Create</span>
                            </Link>
                        </div>

                        <div className="flex-1">
                            <Link
                                href="/message"
                                className={`flex flex-col items-center justify-center pt-3 relative ${pathname.startsWith('/message') ? 'text-primary border-t' : 'text-gray-700'}`}
                            >
                                <div className="text-[20px] relative">
                                    <FiMessageCircle />
                                </div>
                                {!!messageCount && messageCount > 0 && (
                                    <div className="absolute -top-1 right-4 w-6 h-6 bg-red-500 text-white text-[12px] font-bold flex items-center justify-center rounded-full border-2 border-white">
                                        {messageCount > 99 ? '99+' : messageCount}
                                    </div>
                                )}
                                <span className="text-[12px] xxs:text-[14px]">Message</span>
                            </Link>
                        </div>

                        <div className="flex-1">
                            <Link
                                href="/notifications"
                                className={`flex flex-col items-center justify-center pt-3 ${pathname === '/notifications' ? 'text-primary border-t' : 'text-gray-700'}`}
                            >
                                <div className="text-[20px] relative">
                                    <FiBell />
                                </div>
                                <span className="text-[12px] xxs:text-[14px]">Notification</span>
                            </Link>
                        </div>
                    </>
                ) : (
                    <>
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

                        <div className="flex-1">
                            <Link
                                href="/message"
                                className={`flex flex-col items-center justify-center pt-3 relative ${pathname.startsWith('/message') ? 'text-primary border-t' : 'text-gray-700'}`}
                            >
                                <div className="text-[20px] relative">
                                    <FiMessageCircle />
                                </div>
                                {!!messageCount && messageCount > 0 && (
                                    <div className="absolute -top-1 right-4 w-6 h-6 bg-red-500 text-white text-[12px] font-bold flex items-center justify-center rounded-full border-2 border-white">
                                        {messageCount > 99 ? '99+' : messageCount}
                                    </div>
                                )}
                                <span className="text-[14px]">Message</span>
                            </Link>
                        </div>

                        <div className="flex-1">
                            <Link
                                href="/notifications"
                                className={`flex flex-col items-center justify-center pt-3 ${pathname === '/notifications' ? 'text-primary border-t' : 'text-gray-700'}`}
                            >
                                <div className="text-[20px] relative">
                                    <FiBell />
                                </div>
                                <span className="text-[14px]">Notification</span>
                            </Link>
                        </div>

                        <div className="flex-1">
                            <Link
                                href='/wishlist'
                                className={`flex flex-col items-center justify-center pt-3 ${pathname === '/wishlist' ? 'text-primary border-t' : 'text-gray-700'}`}
                            >
                                <div className="text-[20px] relative">
                                    <FiHeart />
                                </div>
                                <span className="text-[14px]">Wishlist</span>
                            </Link>
                        </div>
                    </>
                )}
        </div>
    )
};

