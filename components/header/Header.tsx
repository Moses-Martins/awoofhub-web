'use client'

import {
    Dialog,
    DialogPanel,
    PopoverGroup
} from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <Image
                            src="/Logo.png"
                            alt="Company Logo"
                            width={500}
                            height={500}
                            priority
                            className="w-30 h-auto"
                        />
                    </a>
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


                    <a href="#" className="text-sm/6 font-semibold text-gray-900">
                        For Business
                    </a>
                    <a href="#" className="text-sm/6 font-semibold text-gray-900">
                        Browse Deals
                    </a>
                    <a href="#" className="text-sm/6 font-semibold text-gray-900">
                        Categories
                    </a>
                    <a href="#" className="text-sm/6 font-semibold text-gray-900">
                        How it Works
                    </a>
                </PopoverGroup>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <div className="flex gap-4 items-center justify-center">
                        <button className="px-6 py-3 border-2 border-[#FF5200] text-[#FF5200] font-semibold rounded-md hover:bg-orange-50 transition-colors">
                            Post a Deal
                        </button>

                        <button className="px-4.5 py-3 bg-[#FF5200] text-white font-semibold rounded-md hover:bg-[#e64a00] transition-colors shadow-sm">
                            Browse Deals
                        </button>
                    </div>
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <Image
                                src="/Logo.png"
                                alt="Company Logo"
                                width={500}
                                height={500}
                                priority
                                className="w-30 h-auto"
                            />
                        </a>
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
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Features
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Marketplace
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Company
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    How it Works
                                </a>
                            </div>

                            <div className="flex flex-col gap-4 py-8 items-center justify-center">

                                {/* Secondary Button - Outline Style */}
                                <button className="px-6 py-3 border-2 border-[#FF5200] text-[#FF5200] font-semibold rounded-md hover:bg-orange-50 transition-colors">
                                    Post a Deal
                                </button>

                                {/* Primary Button - Solid Style */}
                                <button className="px-4.5 py-3 bg-[#FF5200] text-white font-semibold rounded-md hover:bg-[#e64a00] transition-colors shadow-sm">
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



