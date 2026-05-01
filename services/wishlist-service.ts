import { apiClient } from "@/lib/api-client";
import { ApiResponse } from "@/types/api-response";
import { Wishlist } from "@/types/wishlist";

async function addToWishlist(id: string): Promise<ApiResponse<Wishlist>> {
    const res: ApiResponse<Wishlist> = await apiClient.post(`/wishlist/${id}`);
    return res;
};


async function removeFromWishlist(id: string): Promise<ApiResponse<any>> {
    const res: ApiResponse<Wishlist> = await apiClient.delete(`/wishlist/${id}`);
    return res;
};

async function getAllWishlist(): Promise<ApiResponse<Wishlist[]>> {
    const res: ApiResponse<Wishlist[]> = await apiClient.get('/wishlist/')

    return res;
}


const WishlistService = {
    addToWishlist,
    removeFromWishlist,
    getAllWishlist
};

export default WishlistService;
