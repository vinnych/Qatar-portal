import { NextResponse } from 'next/server';
import { generateGCCInsight, generateTrendingTopics } from '@/lib/ai';
import { redis } from '@/lib/redis';
import { toSlug } from '@/lib/utils';
import { InsightItem } from '@/lib/insights';
import { getMarketplaceProducts } from '@/lib/marketplace/service';
import { getDeterministicFallback } from '@/lib/fallbacks';

function extractDescription(content: string): string {
  const lines = content.split('\n').map(l => l.trim()).filter(Boolean);
  // Skip heading lines (start with #) and find first real paragraph
  const paragraph = lines.find(l => !l.startsWith('#') && l.length > 60);
  if (!paragraph) return lines[0]?.replace(/[#*_]/g, '').trim().substring(0, 200) + '...' || '';
  return paragraph.replace(/[#*_]/g, '').trim().substring(0, 200) + '...';
}

export const dynamic = 'force-dynamic';
export const maxDuration = 300; 

/**
 * Enhanced generation logic that balances quality and free-tier token limits.
 */
async function generateBatch(lang: 'en' | 'ar', type: 'gcc' | 'international') {
  console.log(`Starting ${type.toUpperCase()} Batch for ${lang}...`);
  
  // Use specialized topic generation based on type
  const topics = await generateTrendingTopics(lang, type);
  if (!topics || topics.length === 0) return 0;

  const generatedInsights: InsightItem[] = [];

  // Batch size control: 5 GCC (High Detail) + 5 International (Standard Detail)
  const batchLimit = 5;

  for (const item of topics.slice(0, batchLimit)) {
    try {
      // Use Llama 70B for GCC (Premium) and Llama 8B for International (Efficiency) to save tokens
      const model = type === 'gcc' ? "llama-3.3-70b-versatile" : "llama-3.1-8b-instant";
      
      const content = await generateGCCInsight(item.country, item.topic, lang, model);
      
      const firstLine = content.split('\n')[0].replace(/[#*]/g, '').trim();
      const title = firstLine || `${item.country}: ${item.topic}`;
      const slug = toSlug(title, `${type === 'gcc' ? 'v' : 'int'}-${Date.now()}`);

      const newInsight: InsightItem = {
        id: `daily-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
        slug,
        title,
        description: extractDescription(content),
        content,
        link: `/insights/${slug}`,
        pubDate: new Date().toISOString(),
        source: type === 'gcc' ? "Arabia Khaleej Editorial" : "Global Insights Hub",
        category: "gcc",
        language: lang,
        tags: [type, 'trending', 'premium'],
        image: getDeterministicFallback(slug),
      };

      generatedInsights.push(newInsight);
      
      // Safety delay
      await new Promise(resolve => setTimeout(resolve, 3000));
    } catch (err) {
      console.error(`Failed to generate ${type} article:`, err);
    }
  }

  const archiveKey = `insights_archive_${lang}`;
  const currentArchive = (await redis.get(archiveKey) as InsightItem[] | null) || [];
  const updatedArchive = [...generatedInsights, ...currentArchive].slice(0, 300);
  await redis.set(archiveKey, updatedArchive);

  return generatedInsights.length;
}

export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization');
  const { searchParams } = new URL(request.url);
  const cronSecret = searchParams.get('secret');

  if (authHeader !== `Bearer ${process.env.CRON_SECRET}` && cronSecret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const startTime = Date.now();
  console.log("Starting Daily Automation Pipeline...");

  try {
    // 1. Refresh Marketplace FIRST (Priority)
    console.log("Refreshing Marketplace...");
    await getMarketplaceProducts(true);

    // 2. Generate Batches (Reduced to 5 each to fit 300s limit)
    // Total 20 high-fidelity articles
    const results = {
      gcc: { en: 0, ar: 0 },
      international: { en: 0, ar: 0 }
    };

    results.gcc.en = await generateBatch('en', 'gcc');
    results.gcc.ar = await generateBatch('ar', 'gcc');
    results.international.en = await generateBatch('en', 'international');
    results.international.ar = await generateBatch('ar', 'international');

    const duration = Math.floor((Date.now() - startTime) / 1000);
    console.log(`Daily Automation Completed in ${duration}s`);

    return NextResponse.json({ 
      success: true, 
      automated: true,
      duration: `${duration}s`,
      counts: results
    });
  } catch (error: any) {
    console.error("Daily Automation Failed:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

