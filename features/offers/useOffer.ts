import OfferService from '@/services/offer-service';
import { Offer } from '@/types/offer';
import { useQuery } from '@tanstack/react-query';

type GetOfferOptions = {
    offerId: string;
};

export const getOffer = async ({ offerId }: GetOfferOptions): Promise<Offer> => {
    const result = await OfferService.getOfferById(offerId)
    return result.data;
};

export const useOffer = ({ offerId }: GetOfferOptions) => {
    const { data, isLoading } = useQuery({
        queryKey: ['offers', offerId],
        queryFn: () => getOffer({ offerId }),
    });

    return { data, isLoading };
};