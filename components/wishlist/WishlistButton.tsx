import { useUser } from "@/features/auth/useUser";
import { useToggleWishlist } from "@/features/wishlist/useToggleWishlist";
import { useRouter } from "next/navigation";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

interface Props {
    offerId: string;
    button?: boolean;
}

export default function WishlistButton({ offerId, button }: Props) {

    const router = useRouter();

    const { toggleWishlist, isWishlisted: isFavorite } = useToggleWishlist(offerId);
    const { data: currentUser } = useUser();

    const handleWishlistChange = async () => {
        if (!currentUser) {
            return router.push('/login');
        }

        toggleWishlist()
    }

    if (button) {
    return (
        <button
            onClick={handleWishlistChange}
            className={`w-40 cursor-pointer text-sm font-bold px-4 py-1.5 rounded-sm border transition-all 
            ${isFavorite 
                ? "bg-[#FF7D45] text-white border-[#FF7D45]" 
                : "border-[#FF7D45] text-[#FF7D45]"
            }`}
        >
            {isFavorite ? "Added to Wishlist" : "Add to Wishlist"}
        </button>
    );
}

    return (
        <button onClick={handleWishlistChange} className="cursor-pointer absolute top-[-25] right-0 p-1">
            {isFavorite ? <MdFavorite className="text-red-500" size={27} /> : <MdFavoriteBorder className="text-[#59585880]" size={27} />}
        </button>
    )
}

