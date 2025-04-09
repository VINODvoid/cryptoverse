import dynamic from "next/dynamic";
import { getExchanges, getCryptoNews, getCryptocurrencies } from "@/lib/api";
import { Hero } from "@/components/Hero";
import { MotionWrapper } from "@/components/MotionWrapper";
// const MotionWrapper = dynamic(() => import("@/components/MotionWrapper"), { ssr: false });

export default async function Home() {
  const [exchanges, news, cryptocurrencies] = await Promise.all([
    getExchanges(),
    getCryptoNews(),
    getCryptocurrencies(),
  ]);


  return (
    <main>
      <Hero />
      <MotionWrapper
        cryptocurrencies={cryptocurrencies || []}
        exchanges={exchanges || []}
        news={news || []}
      />
    </main>
  );
}
