'use client';

import { CryptoNews } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, ExternalLink } from 'lucide-react';
import Image from 'next/image';

interface NewsCardProps {
  news: CryptoNews;
}

export function NewsCard({ news }: NewsCardProps) {
  const formattedDate = new Date(news.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="space-y-0 pb-2">
        <div className="relative h-48 w-full">
          <Image
            src={news.imageUrl || 'https://images.unsplash.com/photo-1621761191319-c6fb62004040'}
            alt={news.title}
            fill
            className="object-cover rounded-t-lg"
          />
        </div>
        <CardTitle className="text-lg font-bold mt-4 line-clamp-2">
          {news.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
          {news.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar size={16} />
            {formattedDate}
          </div>
          <a
            href={news.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-primary hover:underline"
          >
            Read more
            <ExternalLink size={16} />
          </a>
        </div>
      </CardContent>
    </Card>
  );
}