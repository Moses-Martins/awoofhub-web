import WishlistService from '@/services/wishlist-service';
import { Wishlist } from '@/types/wishlist';
import { useQuery } from '@tanstack/react-query';

export const getWishlist = async (): Promise<Wishlist[]> => {
    const result = await WishlistService.getAllWishlist();
    return result.data
};

export const useWishlist = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['wishlist'],
        queryFn: () => getWishlist(),
    });

    return {
        data,
        isLoading
    };
};

