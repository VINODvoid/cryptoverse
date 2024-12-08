'use client';

import { Exchange } from '@/lib/types';
import { ExchangeCard } from './ExchangeCard';
import { LoadingSpinner } from './LoadingSpinner';
import { ErrorMessage } from './ErrorMessage';

interface ExchangesListProps {
  exchanges: Exchange[];
  isLoading?: boolean;
  error?: string;
}

export function ExchangesList({ exchanges, isLoading, error }: ExchangesListProps) {
  if (isLoading) return <LoadingSpinner />;
  
  if (error) {
    return (
      <ErrorMessage 
        title="Failed to load exchanges" 
        message="Please try again later."
      />
    );
  }

  if (exchanges.length === 0) {
    return (
      <ErrorMessage 
        title="No exchanges found" 
        message="Please try again later."
      />
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {exchanges.map((exchange) => (
        <ExchangeCard key={exchange.id} exchange={exchange} />
      ))}
    </div>
  );
}