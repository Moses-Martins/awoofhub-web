import { useLogout } from '@/features/auth/useLogout';
import { User } from '@/types/user';
import { capitalizeFirstLetter } from '@/utils/truncate';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FiHelpCircle, FiLogOut, FiUser } from 'react-icons/fi';
import { GoArrowSwitch } from 'react-icons/go';

interface Props {
    user: User;
    isOpen: boolean;
    onClose(): void;
}

export default function Sidebar({ user, isOpen, onClose }: Props) {

    const router = useRouter();

    const { submit: logout } = useLogout({
        onSuccess: () => {
            const redirect = "/login";
            router.push(redirect);
        },
    })

    return (
        <>
            <div className={`fixed top-0 right-0 h-full w-[50%] bg-white z-[100] transform transition-transform duration-300 ease-in ${isOpen ? "translate-x-0 visible" : "translate-x-full invisible"}`}>
                
                <div className="mx-auto my-7 w-20 h-20 rounded-full overflow-hidden">
                    {user.profileImageUrl ? (
                        <Image
                            width={40}
                            height={40}
                            src={user.profileImageUrl}
                            alt={user.name}
                            className="w-full h-full object-contain"
                        />
                    ) : (
                        <div className="bg-green-500 text-white flex items-center justify-center w-full h-full">
                            {capitalizeFirstLetter(user.name)}
                        </div>
                    )}
                </div>

                <ul className="flex flex-col">
                    {/* Standard Items */}
                    {[
                        { label: 'Profile', icon: <FiUser />, href: '/profile' },
                        { label: 'Help & Support', icon: <FiHelpCircle />, href: '/help' },
                        { label: 'Switch account', icon: <GoArrowSwitch />, href: '/switch' },
                    ].map((item, idx) => (
                        <li key={idx} className="border-b border-muted/10 last:border-none">
                            <Link href={item.href} className="flex items-center gap-4 px-4 sm:px-6 py-4 hover:bg-primary/5 transition-colors">
                                <span className="text-primary text-xl">{item.icon}</span>
                                <span className="text-foreground text-lg sm:text-[20px] font-light">{item.label}</span>
                            </Link>
                        </li>
                    ))}

                    {/* Logout - Special Styling */}
                    <li>
                        <button onClick={() => logout()} className="cursor-pointer w-full flex items-center gap-4 px-4 sm:px-6 py-4 hover:bg-primary/5 transition-colors text-primary">
                            <FiLogOut className="text-xl" />
                            <span className="text-xl font-medium">Logout</span>
                        </button>
                    </li>
                </ul>

            </div>


            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-[99]"
                    role="button"
                    tabIndex={-1}
                    onClick={onClose}
                    onKeyDown={onClose}
                />
            )}

        </>
    )
};



