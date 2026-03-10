'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import SearchInput from '../searchbar/SearchInput';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

export default function Header() {
    const router = useRouter();
    const handleSearchSubmit = (searchText: string) => {
        router.push(`/search?keyword=${searchText}`);
    };

    return (
        <header className="sticky top-0 left-0 z-[99] bg-white shadow-lg shadow-black/5 lg:p-0">
            <ul className="flex justify-between items-center max-w-[1440px] mx-auto h-[80px] px-8">
                <Link href="/">
                    <Image src="/Logo.png" alt="Logo" width={500} height={500} priority className="w-[180px] h-auto" />
                </Link>

                <div className="flex items-center px-8">
                    <SearchInput />
                </div>

                <div className="flex justify-end">
                    <DesktopMenu />
                    <MobileMenu />
                </div>
            </ul>
        </header>
    )

}