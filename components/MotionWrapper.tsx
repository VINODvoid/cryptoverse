
"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Coins, Building2, Newspaper } from "lucide-react";
import { CryptoList } from "@/components/CryptoList";
import { ExchangesList } from "@/components/ExchangesList";
import { NewsList } from "@/components/NewsList";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { Suspense } from "react";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export function MotionWrapper({ cryptocurrencies, exchanges, news }: any) {
    return (
        <motion.div
            variants={container}
            initial={false} // Prevent SSR mismatches
            animate="show"
            className="container mx-auto px-4 py-16"
        >
            <Tabs defaultValue="cryptocurrencies" className="w-full">
                <TabsList className="grid w-full grid-cols-3 max-w-[600px] mx-auto mb-8">
                    <TabsTrigger value="cryptocurrencies" className="flex items-center gap-2">
                        <Coins size={20} />
                        Cryptocurrencies
                    </TabsTrigger>
                    <TabsTrigger value="exchanges" className="flex items-center gap-2">
                        <Building2 size={20} />
                        Exchanges
                    </TabsTrigger>
                    <TabsTrigger value="news" className="flex items-center gap-2">
                        <Newspaper size={20} />
                        News
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="cryptocurrencies">
                    <Suspense fallback={<LoadingSpinner />}>
                        <motion.div variants={item}>
                            <CryptoList cryptocurrencies={cryptocurrencies} />
                        </motion.div>
                    </Suspense>
                </TabsContent>

                <TabsContent value="exchanges">
                    <Suspense fallback={<LoadingSpinner />}>
                        <motion.div variants={item}>
                            <ExchangesList exchanges={exchanges} />
                        </motion.div>
                    </Suspense>
                </TabsContent>

                <TabsContent value="news">
                    <Suspense fallback={<LoadingSpinner />}>
                        <motion.div variants={item}>
                            <NewsList news={news} />
                        </motion.div>
                    </Suspense>
                </TabsContent>
            </Tabs>
        </motion.div>
    );
}
