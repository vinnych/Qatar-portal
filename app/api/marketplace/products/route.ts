import { NextResponse } from 'next/server';
import { AmazonProvider } from '@/lib/marketplace/providers/amazon';
import { NoonProvider } from '@/lib/marketplace/providers/noon';
import { redis } from '@/lib/redis';

export async function GET() {
  const CACHE_KEY = 'marketplace_products_aggregated';
  const CACHE_TTL = 3600; // 1 hour

  try {
    // 1. Try to get from cache
    const cached = await redis.get(CACHE_KEY);
    if (cached) {
      return NextResponse.json(JSON.parse(cached));
    }

    // 2. Fetch from providers
    const providers = [
      new AmazonProvider(),
      new NoonProvider()
    ];

    const results = await Promise.allSettled(
      providers.map(p => p.getTrendingProducts())
    );

    const products = results.flatMap(res => 
      res.status === 'fulfilled' ? res.value : []
    );

    const response = {
      status: 'success',
      timestamp: new Date().toISOString(),
      count: products.length,
      data: products
    };

    // 3. Cache the result
    await redis.set(CACHE_KEY, JSON.stringify(response), { ex: CACHE_TTL });

    return NextResponse.json(response);
  } catch (error) {
    console.error("Marketplace API aggregation failed", error);
    return NextResponse.json({ status: 'error', message: 'Failed to aggregate products' }, { status: 500 });
  }
}
