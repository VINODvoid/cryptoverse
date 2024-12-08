export interface Exchange {
  id: string;
  name: string;
  year_established: number;
  country: string;
  url: string;
  image: string;
  trust_score: number;
  trade_volume_24h_btc: number;
}

export interface CryptoNews {
  id: string;
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  source: string;
  imageUrl: string;
}

export interface Cryptocurrency {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  price_change_percentage_24h: number;
  total_volume: number;
}

export interface MenuItem {
  name: string;
  href: string;
}