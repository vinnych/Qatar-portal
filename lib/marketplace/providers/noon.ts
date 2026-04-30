import { AffiliateProduct, MarketplaceProvider } from "../types";
import jwt from "jsonwebtoken";

export class NoonProvider implements MarketplaceProvider {
  name = "Noon.com";

  private async generateToken(): Promise<string | null> {
    const keyId = process.env.NOON_KEY_ID;
    const privateKey = process.env.NOON_PRIVATE_KEY;

    if (!keyId || !privateKey) return null;

    try {
      const payload = {
        iss: keyId,
        aud: "noon-partners",
        iat: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + (60 * 15), // 15 mins
      };

      // Ensure private key is correctly formatted
      const formattedKey = privateKey.includes('-----BEGIN') 
        ? privateKey 
        : `-----BEGIN PRIVATE KEY-----\n${privateKey}\n-----END PRIVATE KEY-----`;

      return jwt.sign(payload, formattedKey, { algorithm: 'RS256' });
    } catch (error) {
      console.error("Noon JWT generation failed", error);
      return null;
    }
  }

  async getTrendingProducts(): Promise<AffiliateProduct[]> {
    const channelId = process.env.NOON_CHANNEL_ID;
    const token = await this.generateToken();

    if (!token || !channelId) {
      console.warn("Noon credentials missing or invalid. Returning fallback data.");
      return this.getFallbackData();
    }

    try {
      // Example endpoint for Noon Partners trending products
      // Note: Actual endpoint might vary based on their current API version
      const res = await fetch(`https://api.noon.partners/affiliate/v1/feed/trending?channel=${channelId}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        }
      });

      if (!res.ok) throw new Error(`Noon API responded with ${res.status}`);

      const data = await res.json();
      
      // Map Noon API response to our common interface
      return data.items.map((item: any, index: number) => ({
        id: item.sku || `noon-${index}`,
        nameEn: item.name_en,
        nameAr: item.name_ar,
        descriptionEn: item.description_en || "",
        descriptionAr: item.description_ar || "",
        price: item.price?.amount || 0,
        currency: item.price?.currency || 'AED',
        category: item.category || 'general',
        image: item.images?.[0] || "",
        rating: item.rating || 4.5,
        reviews: item.review_count || 0,
        affiliateUrl: item.affiliate_url,
        retailer: "Noon.com",
        trendingRank: index + 1
      }));
    } catch (error) {
      console.error("Failed to fetch from Noon API", error);
      return this.getFallbackData();
    }
  }

  private getFallbackData(): AffiliateProduct[] {
    return [
      {
        id: 'noon-dyson-v15',
        nameEn: 'Dyson V15 Detect Vacuum',
        nameAr: 'مكنسة دايسون V15 ديتكت',
        descriptionEn: 'The most powerful, intelligent cordless vacuum.',
        descriptionAr: 'المكنسة اللاسلكية الأكثر قوة وذكاءً.',
        price: 2899,
        currency: 'SAR',
        category: 'homeLifestyle',
        image: 'https://images.unsplash.com/photo-1558317374-067df5f1517d?auto=format&fit=crop&q=80&w=800',
        rating: 4.8,
        reviews: 850,
        affiliateUrl: 'https://www.noon.com/saudi-en/v15-detect-cordless-vacuum-cleaner/N51833543A/p/',
        retailer: 'Noon.com',
        trendingRank: 1
      }
    ];
  }
}
