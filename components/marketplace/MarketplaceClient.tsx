"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { Search, ShoppingBag, Star, ExternalLink, Filter, TrendingUp, Award, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";
import { COUNTRY_TO_CURRENCY, getExchangeRates, convertPrice, formatPrice } from "@/lib/currency";
import { AffiliateProduct } from "@/lib/marketplace/types";

export default function MarketplaceClient() {
  const { t, language, isRTL } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [userCurrency, setUserCurrency] = useState<string | null>(null);
  const [exchangeRates, setExchangeRates] = useState<Record<string, number> | null>(null);
  const [locationName, setLocationName] = useState<string | null>(null);
  
  const [products, setProducts] = useState<AffiliateProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function initMarketplace() {
      try {
        const [geoRes, rates, productRes] = await Promise.all([
          fetch('/api/geolocation').then(res => res.json()),
          getExchangeRates(),
          fetch('/api/marketplace/products').then(res => res.json())
        ]);

        if (geoRes.countryCode && COUNTRY_TO_CURRENCY[geoRes.countryCode]) {
          setUserCurrency(COUNTRY_TO_CURRENCY[geoRes.countryCode]);
          setLocationName(geoRes.countryName || geoRes.cityName);
        }
        setExchangeRates(rates);
        if (productRes.status === 'success') {
          setProducts(productRes.data);
        }
      } catch (e) {
        console.error("Marketplace initialization failed", e);
      } finally {
        setLoading(false);
      }
    }
    initMarketplace();
  }, []);

  const categories = [
    { id: "all", label: t("all") },
    { id: "electronics", label: t("electronics") },
    { id: "fashion", label: t("fashion") },
    { id: "beauty", label: t("beauty") },
    { id: "homeLifestyle", label: t("homeLifestyle") },
    { id: "wellness", label: t("wellness") },
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = 
        product.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.nameAr.includes(searchQuery);
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, products]);

  const productsByRetailer = useMemo(() => {
    const retailers = Array.from(new Set(products.map(p => p.retailer)));
    return retailers.map(retailer => ({
      name: retailer,
      products: products
        .filter(p => p.retailer === retailer && p.trendingRank)
        .sort((a, b) => (a.trendingRank || 99) - (b.trendingRank || 99))
        .slice(0, 10)
    })).filter(r => r.products.length > 0);
  }, [products]);

  const renderPrice = (product: AffiliateProduct) => {
    const targetCurrency = userCurrency || product.currency;
    const converted = convertPrice(product.price, product.currency, targetCurrency, exchangeRates);
    return {
      price: formatPrice(converted, targetCurrency),
      currency: targetCurrency
    };
  };

  return (
    <div className={`w-full max-w-7xl mx-auto px-4 py-12 ${isRTL ? 'font-serif-ar' : 'font-sans'}`}>
      
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-foreground">
              {t("boutiqueMarket")}
            </h1>
            {locationName && (
              <div className="flex items-center gap-1.5 px-3 py-1 bg-brand-gold/10 border border-brand-gold/20 rounded-full animate-in fade-in slide-in-from-left-4 duration-1000">
                <MapPin size={10} className="text-brand-gold" />
                <span className="text-[9px] font-black uppercase tracking-widest text-brand-gold">{locationName}</span>
              </div>
            )}
          </div>
          <p className="text-lg text-foreground/60 max-w-md">
            {t("exclusiveOffers")} — {t("noonExcellence")}
          </p>
        </div>

        <div className="relative w-full md:w-96 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40 group-focus-within:text-brand-gold transition-colors" size={20} />
          <input
            type="text"
            placeholder={t("marketSearch")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-foreground/5 border border-foreground/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all text-foreground"
          />
        </div>
      </div>

      {/* Retailer Trending Sections */}
      {loading ? (
        <div className="space-y-20 mb-20">
          {[1, 2].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-24 h-6 bg-foreground/5 rounded-lg" />
                <div className="w-48 h-6 bg-foreground/5 rounded-lg" />
                <div className="h-[1px] flex-1 bg-foreground/10" />
              </div>
              <div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar -mx-4 px-4">
                {[1, 2, 3, 4].map((j) => (
                  <div key={j} className="flex-shrink-0 w-64 aspect-[4/5] bg-foreground/5 rounded-[2rem]" />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : !searchQuery && selectedCategory === "all" && (
        <div className="space-y-20 mb-20">
          {productsByRetailer.map((retailer) => (
            <section key={retailer.name}>
              <div className="flex items-center gap-4 mb-8">
                <div className="px-4 py-1 bg-brand-gold/10 border border-brand-gold/30 rounded-lg">
                  <span className="text-xs font-black text-brand-gold uppercase tracking-[0.2em]">
                    {retailer.name}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-foreground">
                  {t("trendingOn").replace('%s', retailer.name)}
                </h2>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-foreground/10 to-transparent" />
              </div>

              <div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar -mx-4 px-4 scroll-smooth">
                {retailer.products.map((product) => (
                  <motion.div
                    key={`trending-${product.id}`}
                    whileHover={{ y: -8 }}
                    className="flex-shrink-0 w-64 relative"
                  >
                    {/* Rank Badge - Premium Medallion Style */}
                    <div className={`absolute top-2 left-2 z-30 w-10 h-10 flex items-center justify-center rounded-full font-black text-sm shadow-2xl border-2 border-white/20 ${
                      product.trendingRank === 1 ? 'bg-gradient-to-br from-brand-gold via-yellow-500 to-yellow-700 text-white' :
                      product.trendingRank === 2 ? 'bg-gradient-to-br from-zinc-200 via-zinc-400 to-zinc-600 text-zinc-900' :
                      product.trendingRank === 3 ? 'bg-gradient-to-br from-orange-300 via-orange-500 to-orange-800 text-white' :
                      'bg-foreground/90 text-background'
                    }`}>
                      {product.trendingRank}
                    </div>

                    <a
                      href={product.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full glass rounded-[2rem] overflow-hidden group border border-foreground/5 hover:border-brand-gold/30 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-brand-gold/5"
                    >
                      <div className="relative aspect-[4/5] bg-white/5 overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.nameEn}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                          <span className="text-white text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
                            {t("viewOnStore")} <ExternalLink size={10} />
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-5 bg-background/40 backdrop-blur-md">
                        <h3 className="font-bold text-sm text-foreground line-clamp-2 h-10 mb-3 leading-tight group-hover:text-brand-gold transition-colors">
                          {language === 'en' ? product.nameEn : product.nameAr}
                        </h3>
                        
                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-foreground/40 uppercase tracking-tighter">
                              {renderPrice(product).currency}
                            </span>
                            <span className="text-lg font-black text-foreground">
                              {renderPrice(product).price}
                            </span>
                          </div>
                          
                          <div className="flex flex-col items-end">
                            <div className="flex items-center gap-1 text-brand-gold">
                              <Star size={12} fill="currentColor" />
                              <span className="text-xs font-black">{product.rating}</span>
                            </div>
                            <span className="text-[8px] font-bold text-foreground/30 uppercase">
                              {product.reviews.toLocaleString()} {t('reviewsCount')}
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}

      {/* Categories Bar */}
      <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-12 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest whitespace-nowrap transition-all border ${
              selectedCategory === cat.id
                ? "bg-brand-gold text-white border-brand-gold shadow-lg shadow-brand-gold/20"
                : "bg-transparent text-foreground/60 border-foreground/10 hover:border-brand-gold/40 hover:text-brand-gold"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Affiliate Disclosure */}
      <div className="mb-12 p-4 rounded-2xl bg-brand-gold/5 border border-brand-gold/20 flex items-start gap-4">
        <div className="p-2 bg-brand-gold/10 rounded-lg text-brand-gold">
          <ShoppingBag size={20} />
        </div>
        <p className="text-sm text-foreground/70 italic leading-relaxed">
          {t("affiliateDisclosure")}
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product, index) => (
            <motion.div
              layout
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative flex flex-col bg-foreground/[0.02] border border-foreground/5 rounded-[2.5rem] overflow-hidden hover:bg-foreground/[0.04] hover:border-brand-gold/30 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-gold/5"
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden bg-white/5">
                <Image
                  src={product.image}
                  alt={language === 'en' ? product.nameEn : product.nameAr}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                  {product.isBestSeller && (
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-brand-gold text-white text-[10px] font-black uppercase tracking-tighter rounded-full shadow-lg">
                      <Award size={12} />
                      {t("bestSellers")}
                    </div>
                  )}
                  {product.isTrending && (
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-brand-obsidian text-white text-[10px] font-black uppercase tracking-tighter rounded-full shadow-lg">
                      <TrendingUp size={12} />
                      {t("trendingNow")}
                    </div>
                  )}
                </div>
              </div>

              {/* Product Details */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start gap-4 mb-2">
                  <span className="text-[10px] font-extrabold text-brand-gold uppercase tracking-widest px-2 py-0.5 border border-brand-gold/20 rounded">
                    {product.retailer}
                  </span>
                  <div className="flex items-center gap-1 text-brand-gold">
                    <Star size={14} fill="currentColor" />
                    <span className="text-xs font-bold">{product.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2 leading-tight min-h-[3rem]">
                  {language === 'en' ? product.nameEn : product.nameAr}
                </h3>

                <p className="text-sm text-foreground/50 mb-6 line-clamp-2 h-10">
                  {language === 'en' ? product.descriptionEn : product.descriptionAr}
                </p>

                <div className="mt-auto flex flex-col gap-4">
                  <div className="flex items-end gap-1">
                    <span className="text-2xl font-black text-foreground">
                      {renderPrice(product).price}
                    </span>
                    <span className="text-xs font-bold text-foreground/40 mb-1 uppercase tracking-tighter">
                      {renderPrice(product).currency}
                    </span>
                  </div>

                  <a
                    href={product.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-foreground text-background dark:bg-white dark:text-brand-obsidian rounded-2xl flex items-center justify-center gap-2 font-black uppercase tracking-widest text-xs hover:bg-brand-gold dark:hover:bg-brand-gold dark:hover:text-white transition-all duration-300 group/btn shadow-xl hover:shadow-brand-gold/20"
                  >
                    {t("viewOnStore")}
                    <ExternalLink size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="py-32 text-center flex flex-col items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/20">
            <Search size={40} />
          </div>
          <p className="text-xl font-bold text-foreground/40 uppercase tracking-widest">
            {t("noMatchingProducts")}
          </p>
        </div>
      )}
    </div>
  );
}
