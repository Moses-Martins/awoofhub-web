import { useAlert } from "@/features/alert/useAlert";
import { useUser } from "@/features/user/useUser";
import { Bell } from "lucide-react";
import { useRouter } from "next/navigation";

interface Props {
    businessId: string;
}

export default function AlertButton({ businessId }: Props) {

    const router = useRouter();

    const { toggleAlert, isSubscribed } = useAlert(businessId);
    const { data: currentUser } = useUser();

    const handleWishlistChange = async () => {
        if (!currentUser) {
            return router.push('/login');
        }

        toggleAlert()
    }

    return (
        <button
            onClick={handleWishlistChange}
            className={`cursor-pointer w-55  text-white py-2 rounded-sm flex items-center justify-center gap-2 font-bold transition-colors text-sm
            ${isSubscribed
                    ? "bg-[#FDBA6B] border-[orange-600]"
                    : "bg-orange-600"
                }`}
        >
            {isSubscribed ? (
                <>
                    <Bell size={15} /> Alert Set
                </>
            ) : (
                <>
                    <Bell size={15} /> Set Alert to this Store
                </>
            )}
        </button>
    );
}



