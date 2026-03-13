import { useUser } from "@/features/auth/useUser";
import { useToggleWishlist } from "@/features/wishlist/useToggleWishlist";
import { useRouter } from "next/navigation";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

interface Props {
    offerId: string;
}

export default function WishlistButton({ offerId }: Props) {

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
        <button onClick={handleWishlistChange} className="cursor-pointer absolute top-[-25] right-0 p-1">
            {isFavorite ? <MdFavorite className="text-red-500" size={27} /> : <MdFavoriteBorder className="text-[#59585880]" size={27} />}
        </button>
    )
}

