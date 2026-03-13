"use client"
import WishlistService from "@/services/wishlist-service";
import { useMutation, useQueryClient } from '@tanstack/react-query';

type RemoveFromWishlistOptions = {
    offerId: string;
};

export const RemoveFromWishlist = async ({ offerId }: RemoveFromWishlistOptions): Promise<any> => {
    const result = await WishlistService.removeFromWishlist(offerId);
    return result.data;
    
};

export const useRemoveFromWishlist = ({ offerId }: RemoveFromWishlistOptions) => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: () => RemoveFromWishlist({offerId}),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
    },
  });

  return { removeFromWishlist: mutate, isPending };
};
