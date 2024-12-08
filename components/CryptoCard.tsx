'use client';

import { Cryptocurrency } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingDown, TrendingUp } from 'lucide-react';
import Image from 'next/image';

interface CryptoCardProps {
  crypto: Cryptocurrency;
}

export function CryptoCard({ crypto }: CryptoCardProps) {
  const priceChangeIsPositive = crypto.price_change_percentage_24h > 0;

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-bold">
          <div className="flex items-center gap-2">
            <Image
              src={crypto.image}
              alt={crypto.name}
              width={24}
              height={24}
              className="rounded-full"
            />
            <span>{crypto.name}</span>
            <span className="text-sm text-muted-foreground">
              {crypto.symbol.toUpperCase()}
            </span>
          </div>
        </CardTitle>
        <span className="text-sm font-medium">#{crypto.market_cap_rank}</span>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Price</span>
            <span className="font-medium">
              ${crypto.current_price.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">24h Change</span>
            <div className="flex items-center gap-1">
              {priceChangeIsPositive ? (
                <TrendingUp size={16} className="text-green-500" />
              ) : (
                <TrendingDown size={16} className="text-red-500" />
              )}
              <span
                className={`font-medium ${
                  priceChangeIsPositive ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {crypto.price_change_percentage_24h.toFixed(2)}%
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Market Cap</span>
            <span className="font-medium">
              ${crypto.market_cap.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Volume (24h)</span>
            <span className="font-medium">
              ${crypto.total_volume.toLocaleString()}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}