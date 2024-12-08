'use client';

import { CryptoNews } from '@/lib/types';
import { NewsCard } from './NewsCard';
import { LoadingSpinner } from './LoadingSpinner';
import { ErrorMessage } from './ErrorMessage';

interface NewsListProps {
  news: CryptoNews[];
  isLoading?: boolean;
  error?: string;
}

export function NewsList({ news, isLoading, error }: NewsListProps) {
  if (isLoading) return <LoadingSpinner />;
  
  if (error) {
    return (
      <ErrorMessage 
        title="Failed to load news" 
        message="Please try again later."
      />
    );
  }

  if (news.length === 0) {
    return (
      <ErrorMessage 
        title="No news found" 
        message="Please try again later."
      />
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {news.map((item) => (
        <NewsCard key={item.id} news={item} />
      ))}
    </div>
  );
}