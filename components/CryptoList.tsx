'use client';

import { Cryptocurrency } from '@/lib/types';
import { CryptoCard } from './CryptoCard';
import { LoadingSpinner } from './LoadingSpinner';
import { ErrorMessage } from './ErrorMessage';

interface CryptoListProps {
  cryptocurrencies: Cryptocurrency[];
  isLoading?: boolean;
  error?: string;
}

export function CryptoList({ cryptocurrencies, isLoading, error }: CryptoListProps) {
  if (isLoading) return <LoadingSpinner />;
  
  if (error) {
    return (
      <ErrorMessage 
        title="Failed to load cryptocurrencies" 
        message="Please try again later."
      />
    );
  }

  if (cryptocurrencies.length === 0) {
    return (
      <ErrorMessage 
        title="No cryptocurrencies found" 
        message="Please try again later."
      />
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {cryptocurrencies.map((crypto) => (
        <CryptoCard key={crypto.id} crypto={crypto} />
      ))}
    </div>
  );
}