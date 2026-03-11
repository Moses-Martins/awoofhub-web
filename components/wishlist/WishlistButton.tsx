import { useToggleWishlist } from "@/features/wishlist/useToggleWishlist";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

interface Props {
    offerId: string;
}

export default function WishlistButton({ offerId }: Props) {

    const { toggleWishlist, isWishlisted: isFavorite } = useToggleWishlist(offerId);

    return (

        <button onClick={toggleWishlist} className="cursor-pointer absolute top-[-25] right-0 p-1">
            {isFavorite ? <MdFavorite className="text-red-500" size={27} /> : <MdFavoriteBorder size={27} />}
        </button>

    )
}

