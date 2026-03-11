"use client"
import WishlistService from "@/services/wishlist-service";
import { ApiResponse } from "@/types/api-response";
import { Wishlist } from "@/types/wishlist";
import { useMutation, useQueryClient } from '@tanstack/react-query';

type AddToWishlistOptions = {
    offerId: string;
};

export const AddToWishlist = ({ offerId }: AddToWishlistOptions): Promise<ApiResponse<Wishlist>> => {
    return WishlistService.addToWishlist(offerId);
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
