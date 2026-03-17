'use client';

import { refreshTokenService } from '@/services/auth-service';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useState } from 'react';

export default function ReactQueryProvider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
    queryCache: new QueryCache({
      onError: async (error: any, query) => {
        if (error?.response?.status === 401) {
          await refreshTokenService();
          queryClient.invalidateQueries({ queryKey: query.queryKey });
        }
      },
    }),
  }));

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}