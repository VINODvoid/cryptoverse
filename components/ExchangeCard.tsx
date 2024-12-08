'use client';

import { Exchange } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, TrendingUp } from 'lucide-react';
import Image from 'next/image';

interface ExchangeCardProps {
  exchange: Exchange;
}

export function ExchangeCard({ exchange }: ExchangeCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-bold">
          <div className="flex items-center gap-2">
            {exchange.image && (
              <Image
                src={exchange.image}
                alt={exchange.name}
                width={24}
                height={24}
                className="rounded-full"
              />
            )}
            {exchange.name}
          </div>
        </CardTitle>
        <a
          href={exchange.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary"
        >
          <ExternalLink size={20} />
        </a>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Trust Score</span>
            <span className="font-medium">{exchange.trust_score}/10</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">24h Volume (BTC)</span>
            <div className="flex items-center gap-1">
              <TrendingUp size={16} className="text-green-500" />
              <span className="font-medium">
                {exchange.trade_volume_24h_btc.toFixed(2)}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Country</span>
            <span className="font-medium">{exchange.country || 'N/A'}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Established</span>
            <span className="font-medium">{exchange.year_established || 'N/A'}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}