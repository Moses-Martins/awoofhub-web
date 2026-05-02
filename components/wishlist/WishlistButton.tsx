import { useUser } from "@/features/user/useUser";
import { useToggleWishlist } from "@/features/wishlist/useToggleWishlist";
import { useRouter } from "next/navigation";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

interface Props {
    offerId: string;
    size: string;
    position?: string;
}

export default function WishlistButton({ offerId, size, position = "" }: Props) {

    const router = useRouter();

    const { toggleWishlist, isWishlisted: isFavorite, isLoading } = useToggleWishlist(offerId);
    const { data: currentUser } = useUser();

    const handleWishlistChange = async () => {
        if (!currentUser) {
            return router.push('/login');
        }

        toggleWishlist()
    }


    return (
        <button onClick={handleWishlistChange} disabled={isLoading} className={`cursor-pointer ${position}`}>
            {isLoading ? (
                <MdFavorite className={`text-gray-300 ${size}`} />
            ) : isFavorite ? (
                <MdFavorite className={`text-red-500 ${size}`} />
            ) : (
                <MdFavoriteBorder className={`text-[#59585880] ${size}`} />
            )}
        </button>
    )
}

