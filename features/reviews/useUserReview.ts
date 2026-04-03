import ReviewService from '@/services/review-service';
import { Review } from '@/types/review';
import { useQuery } from '@tanstack/react-query';

type GetReviewOptions = {
    id: string;
};

export const getUserReview = async ({id}: GetReviewOptions): Promise<Review> => {
    const result = await ReviewService.getUserReview(id);
    return result.data
};

export const useUserReview = ({id}: GetReviewOptions) => {
    const { data, isLoading } = useQuery({
        queryKey: ['review', id],
        queryFn: () => getUserReview({id}),
    });

    return {
        review: data,
        isLoading
    };
};

