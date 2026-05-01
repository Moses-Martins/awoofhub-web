import { useAddToWishlist } from "./useAddToWishlist";
import { useIsInWishlist } from "./useIsInWishlist";
import { useRemoveFromWishlist } from "./useRemoveFromWishlist";

export const useToggleWishlist = (offerId: string) => {
  const isWishlisted = useIsInWishlist(offerId);
  const { addToWishlist, isPending:addingToWishlist  } = useAddToWishlist({offerId});
  const { removeFromWishlist, isPending:removingToWishlist  } = useRemoveFromWishlist({offerId});

  const isLoading = addingToWishlist || removingToWishlist;

  const toggleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist();
    } else {
      addToWishlist();
    }
  };

  return { toggleWishlist, isWishlisted, isLoading };
};