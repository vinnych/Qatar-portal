import { redis } from '../redis';
import { NoonProvider } from './providers/noon';
import { PRODUCTS as STATIC_PRODUCTS } from '@/data/marketplace';
import { AffiliateProduct } from './types';

const CACHE_KEY = 'marketplace_products_aggregated';
const CACHE_TTL = 3600; // 1 hour

export async function getMarketplaceProducts(forceRefresh = false) {
  if (!forceRefresh) {
    const cached = await redis.get(CACHE_KEY);
    if (cached) {
      try {
        return typeof cached === 'string' ? JSON.parse(cached) : cached;
      } catch (e) {
        console.error("Redis cache parse failed", e);
      }
    }
  }

  console.log("Refreshing marketplace products...");
  
  const noonProvider = new NoonProvider();
  
  try {
    const liveProducts = await noonProvider.getTrendingProducts();
    
    // Merge static products with live products
    // We use a Map to prevent duplicates by ID
    const productMap = new Map<string, AffiliateProduct>();
    
    // 1. Add static products (as base)
    STATIC_PRODUCTS.forEach(p => productMap.set(p.id, p as AffiliateProduct));
    
    // 2. Add live products (overwrite static if ID matches)
    liveProducts.forEach(p => productMap.set(p.id, p));
    
    const allProducts = Array.from(productMap.values());
    
    const response = {
      status: 'success',
      timestamp: new Date().toISOString(),
      count: allProducts.length,
      data: allProducts
    };

    await redis.set(CACHE_KEY, JSON.stringify(response), { ex: CACHE_TTL });
    return response;
  } catch (error: any) {
    console.error("Marketplace service failed:", error.message);
    throw error;
  }
}
