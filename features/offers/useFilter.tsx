import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export function useFilter(basePath: string) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const updateFilter = useCallback(
    (key: string, value: string | number | undefined | null) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(key, String(value));
      } else {
        params.delete(key);
      }
      params.delete('page');
      router.replace(`${basePath}?${params.toString()}`);
    },
    [searchParams, router]
  );

  return updateFilter;
}