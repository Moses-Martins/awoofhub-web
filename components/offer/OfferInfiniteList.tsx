import { useOffers } from '@/features/offers/useOffers';
import { Offer } from '@/types/offer';
import { Button, Spinner } from '@chakra-ui/react';
import { useMemo } from 'react';
import OfferList from './OfferList';
import styles from './ProductOverviewSection.module.css';

interface Props {
    initialOffers: Offer[];
}

const OfferInfiniteList = ({ initialOffers }: Props) => {
    const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } = useOffers({ limit: 10 });

    const showLoadMore = isFetching && hasNextPage;

    const allOffers = useMemo(() => {
        return data?.pages.flatMap((page) => page.data) ?? [];
    }, [data]);

    return (
        <div className={styles.container}>

            <OfferList offers={allOffers} />

            {isFetching && (
                <div className={styles.loadingWrapper}>
                    <Spinner color="blue" />
                </div>
            )}

            {showLoadMore && (
                <div className={styles.loadMore}>
                    <Button
                        title="Load More"
                        className={styles.loadMoreBtn}
                        onClick={() => fetchNextPage()}
                        type="button"
                        variant="outline"
                    />
                </div>
            )}

            {!hasNextPage && (
                <div className={styles.reachedEnd}>No more products. You have reached the end.</div>
            )}
        </div>
    );
};

export default OfferInfiniteList;