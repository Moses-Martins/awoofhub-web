'use client'; 
import { ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

export default function ErrorBoundaryProvider({ children }: { children: ReactNode }) {
  return (
    <ErrorBoundary
      fallback={<div>Something went wrong!</div>}
      onError={console.error}
    >
      {children}
    </ErrorBoundary>
  );
}