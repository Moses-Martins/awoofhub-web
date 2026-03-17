"use client"
import WishlistService from "@/services/wishlist-service";
import { Wishlist } from "@/types/wishlist";
import { useMutation, useQueryClient } from '@tanstack/react-query';

type AddToWishlistOptions = {
    offerId: string;
};

export const AddToWishlist =  async({ offerId }: AddToWishlistOptions): Promise<Wishlist> => {
    const result = await WishlistService.addToWishlist(offerId);
    return result.data
};

export const useAddToWishlist = ({ offerId }: AddToWishlistOptions) => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: () => AddToWishlist({offerId}),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
    },
  });

  return { addToWishlist: mutate, isPending };
};
