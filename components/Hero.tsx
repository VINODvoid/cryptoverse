'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Your Gateway to the{' '}
            <span className="text-primary">Crypto Universe</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Track cryptocurrencies, explore exchanges, and stay updated with the latest
            crypto news - all in one place.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button className="gap-2">
              Get Started
              <ArrowRight size={16} />
            </Button>
            <Button variant="outline" className="gap-2">
              View Markets
              <TrendingUp size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}