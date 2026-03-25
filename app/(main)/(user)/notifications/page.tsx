"use client"
import { ActivityError } from '@/components/activity/ActivityError';
import ActivityList from '@/components/activity/ActivityList';
import { useActivity } from '@/features/activity/useActivity';
import { Spinner } from '@chakra-ui/react';
import { useEffect, useMemo } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useInView } from 'react-intersection-observer';

export default function ActivityPage() {
    const [ref, inView] = useInView();

    const { data, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage, isError, error } = useActivity({
        limit: 8,
    });

    const allActivities = useMemo(() => {
        return data?.pages.flatMap((page) => page.data) ?? [];
    }, [data]);


    // Trigger next page load when in view
    useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, fetchNextPage, isFetchingNextPage]);


    // Early returns make JSX cleaner
    if (isFetching && allActivities.length === 0) {
        return (
            <section className="pt-14 px-6">
                <Spinner className="mt-5 w-17 h-17 text-primary" data-testid="loading" />
            </section>
        );
    }

    if (isError) {
        return <div>{error?.message}</div>
    }

    if (!allActivities.length) {
        return (
            <section className="pt-14 px-6">
                <p className="text-center text-gray-500">No Notifications found.</p>
            </section>
        );
    }


    return (
        <ErrorBoundary fallback={<ActivityError />}>
            <section className="p-6">
                <ActivityList activities={allActivities} />
                <div ref={ref} className="h-10 flex items-center justify-center mt-6">
                    {isFetchingNextPage && (
                        <Spinner className="mt-5 w-17 h-17 text-primary" data-testid="loading" />
                    )}
                    {!hasNextPage && allActivities.length > 0 && <p className="text-center">No more Notifications</p>}
                </div>
            </section>
        </ErrorBoundary>
    );
};


