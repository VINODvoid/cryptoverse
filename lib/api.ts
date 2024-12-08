import { Exchange, CryptoNews, Cryptocurrency } from './types';

const COINGECKO_API = 'https://api.coingecko.com/api/v3';
const CRYPTO_PANIC_API = 'https://cryptopanic.com/api/v1';

export async function getExchanges(): Promise<Exchange[]> {
  try {
    const response = await fetch(`${COINGECKO_API}/exchanges`);
    if (!response.ok) throw new Error('Failed to fetch exchanges');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching exchanges:', error);
    return [];
  }
}

export async function getCryptocurrencies(): Promise<Cryptocurrency[]> {
  try {
    const response = await fetch(
      `${COINGECKO_API}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    );
    if (!response.ok) throw new Error('Failed to fetch cryptocurrencies');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching cryptocurrencies:', error);
    return [];
  }
}
export async function getCryptoNews(): Promise<CryptoNews[]> {
  try {
    const response = await fetch(`${CRYPTO_PANIC_API}/posts/?auth_token=e758023b6493c7385de6c5f29f2f7c4a69be4f3e`);
    if (!response.ok) throw new Error('Failed to fetch news');

    const data = await response.json();

    const news: CryptoNews[] = data.results.map((item: any) => ({
      id: item.id,
      title: item.title,
      description: item.description || '',
      url: item.url,
      publishedAt: item.published_at,
      source: item.source.name,
      imageUrl: item.image_url || '', // Default image if none found
    }));

    return news;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
}
