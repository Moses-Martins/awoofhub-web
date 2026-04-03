import { useUser } from "@/features/user/useUser";
import { useToggleWishlist } from "@/features/wishlist/useToggleWishlist";
import { useRouter } from "next/navigation";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

interface Props {
    offerId: string;
    size: number;
    style?: string;
}

export default function WishlistButton({ offerId, size, style = "" }: Props) {

    const router = useRouter();

    const { toggleWishlist, isWishlisted: isFavorite } = useToggleWishlist(offerId);
    const { data: currentUser } = useUser();

    const handleWishlistChange = async () => {
        if (!currentUser) {
            return router.push('/login');
        }

        toggleWishlist()
    }


    return (
        <button onClick={handleWishlistChange} className={`cursor-pointer ${style}`}>
            {isFavorite ? <MdFavorite className="text-red-500" size={size} /> : <MdFavoriteBorder className="text-[#59585880]" size={size} />}
        </button>
    )
}

