'use client'

import {
    Dialog,
    DialogPanel,
    PopoverGroup
} from '@headlessui/react';
import {
    Bars3Icon,
    XMarkIcon
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white">
            <nav aria-label="Global" className="mx-auto flex max-w-[1400px] items-center justify-between p-5 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link href="#" className="-m-1.5 p-1.5">
                        <Image
                            src="/Logo.png"
                            alt="Company Logo"
                            width={500}
                            height={500}
                            priority
                            className="w-30 h-auto"
                        />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">


                    <Link href="#" className="text-lg/6 font-semibold text-gray-500 hover:text-orange-500">
                        For Business
                    </Link>
                    <Link href="#" className="text-lg/6 font-semibold text-gray-500 hover:text-orange-500">
                        Browse Deals
                    </Link>
                    <Link href="#" className="text-lg/6 font-semibold text-gray-500 hover:text-orange-500">
                        Categories
                    </Link>
                    <Link href="#" className="text-lg/6 font-semibold text-gray-500 hover:text-orange-500">
                        How it Works
                    </Link>
                </PopoverGroup>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <div className="flex gap-4 items-center justify-center">
                        <button className="px-6 py-1 border-2 border-[#FE4F04] text-lg text-[#FE4F04] font-semibold rounded-sm hover:bg-orange-50 transition-colors">
                            Post a Deal
                        </button>

                        <button className="px-4.5 py-1.5 bg-[#FE4F04] text-lg text-white font-semibold rounded-sm hover:bg-[#e64a00] transition-colors shadow-sm">
                            Browse Deals
                        </button>
                    </div>
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden font-baloo">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <Image
                                src="/Logo.png"
                                alt="Company Logo"
                                width={500}
                                height={500}
                                priority
                                className="w-30 h-auto"
                            />
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Link
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-600 hover:bg-gray-50"
                                >
                                    Features
                                </Link>
                                <Link
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-600 hover:bg-gray-50"
                                >
                                    Marketplace
                                </Link>
                                <Link
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-600 hover:bg-gray-50"
                                >
                                    Company
                                </Link>
                                <Link
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-600 hover:bg-gray-50"
                                >
                                    How it Works
                                </Link>
                            </div>

                            <div className="flex flex-col gap-4 py-8 items-center justify-center">

                                {/* Secondary Button - Outline Style */}
                                <button className="px-6 py-3 border-2 border-[#FE4F04] text-[#FE4F04] font-semibold rounded-sm hover:bg-orange-50 transition-colors">
                                    Post a Deal
                                </button>

                                {/* Primary Button - Solid Style */}
                                <button className="px-4.5 py-3 bg-[#FE4F04] text-white font-semibold rounded-sm hover:bg-[#e64a00] transition-colors shadow-sm">
                                    Browse Deals
                                </button>

                            </div>

                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
};



