export interface Product {
  id: string;
  nameEn: string;
  nameAr: string;
  descriptionEn: string;
  descriptionAr: string;
  price: number;
  currency: 'QAR' | 'AED' | 'SAR';
  category: 'fashion' | 'electronics' | 'beauty' | 'homeLifestyle' | 'wellness';
  image: string;
  rating: number;
  reviews: number;
  affiliateUrl: string;
  retailer: string;
  isBestSeller?: boolean;
  isTrending?: boolean;
  trendingRank?: number; // Rank within its retailer
}

export const PRODUCTS: Product[] = [
  // Amazon.ae Trending
  {
    id: 'iphone-15-pro',
    nameEn: 'iPhone 15 Pro Max (Titanium)',
    nameAr: 'أيفون 15 برو ماكس (تيتانيوم)',
    descriptionEn: 'The ultimate iPhone with aerospace-grade titanium design.',
    descriptionAr: 'أقوى أيفون بتصميم من التيتانيوم المستخدم في صناعة الطيران.',
    price: 4999,
    currency: 'AED',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    reviews: 1240,
    affiliateUrl: 'https://www.amazon.ae/apple-iphone-15-pro-max/dp/B0CHX5V16X',
    retailer: 'Amazon.ae',
    trendingRank: 1
  },
  {
    id: 'sony-wh1000xm5',
    nameEn: 'Sony WH-1000XM5 Headphones',
    nameAr: 'سماعات سوني WH-1000XM5',
    descriptionEn: 'Industry leading noise canceling with two processors.',
    descriptionAr: 'إلغاء ضوضاء رائد في الصناعة مع معالجين.',
    price: 1399,
    currency: 'AED',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    reviews: 2800,
    affiliateUrl: 'https://www.amazon.ae/Sony-WH-1000XM5-Wireless-Cancelling-Headphones/dp/B09XS7JWHH',
    retailer: 'Amazon.ae',
    trendingRank: 2
  },
  {
    id: 'ipad-air',
    nameEn: 'iPad Air (M2 Chip)',
    nameAr: 'أيباد إير (شريحة M2)',
    descriptionEn: 'Light. Bright. Full of might.',
    descriptionAr: 'خفيف. ساطع. مليء بالقوة.',
    price: 2499,
    currency: 'AED',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
    reviews: 950,
    affiliateUrl: 'https://www.amazon.ae/apple-ipad-air/dp/B09V3JH8Y8',
    retailer: 'Amazon.ae',
    trendingRank: 3
  },

  // Noon.com Trending
  {
    id: 'dyson-v15',
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
  },
  {
    id: 'nespresso-vertuo',
    nameEn: 'Nespresso Vertuo Next',
    nameAr: 'نسبريسو فيرتو نيكست',
    descriptionEn: 'Versatile coffee brewing at the touch of a button.',
    descriptionAr: 'تحضير قهوة متعدد الاستخدامات بلمسة زر واحدة.',
    price: 1199,
    currency: 'SAR',
    category: 'homeLifestyle',
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&q=80&w=800',
    rating: 4.5,
    reviews: 520,
    affiliateUrl: 'https://www.amazon.sa/-/en/Nespresso-Vertuo-Next-Coffee-Machine/dp/B08C7K8X1H',
    retailer: 'Noon.com',
    trendingRank: 2
  },
  {
    id: 'airpods-pro-2',
    nameEn: 'AirPods Pro (2nd Gen)',
    nameAr: 'أيربودز برو (الجيل الثاني)',
    descriptionEn: 'Up to 2x more Active Noise Cancellation.',
    descriptionAr: 'ما يصل إلى ضعف إلغاء الضوضاء النشط.',
    price: 899,
    currency: 'AED',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    reviews: 4500,
    affiliateUrl: 'https://www.noon.com/uae-en/airpods-pro-2nd-generation-with-magsafe-charging-case-2022-white/N53346840A/p/',
    retailer: 'Noon.com',
    trendingRank: 3
  },

  // Namshi Trending
  {
    id: 'chanel-no-5',
    nameEn: 'Chanel No. 5 Eau de Parfum',
    nameAr: 'شانيل رقم 5 أو دي بارفيوم',
    descriptionEn: 'The essence of femininity. A timeless, legendary fragrance.',
    descriptionAr: 'جوهر الأنوثة. عطر أسطوري خالد.',
    price: 650,
    currency: 'QAR',
    category: 'beauty',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800',
    rating: 4.7,
    reviews: 2100,
    affiliateUrl: 'https://www.namshi.com/qatar-en/chanel-no-5-eau-de-parfum/p/123456/',
    retailer: 'Namshi',
    trendingRank: 1
  },
  {
    id: 'skims-dress',
    nameEn: 'SKIMS Fits Everybody Dress',
    nameAr: 'فستان سكيمز فيتس أفريبودي',
    descriptionEn: 'A high-neck, floor-length dress that hugs your curves.',
    descriptionAr: 'فستان بياقة عالية وطول يصل للأرض يعانق منحنيات جسمك.',
    price: 380,
    currency: 'SAR',
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=800',
    rating: 4.7,
    reviews: 1500,
    affiliateUrl: 'https://www.namshi.com/saudi-en/skims/',
    retailer: 'Namshi',
    trendingRank: 2
  },
  {
    id: 'la-mer-cream',
    nameEn: 'Crème de la Mer',
    nameAr: 'كريم دي لا مير',
    descriptionEn: 'The moisturizer that started it all.',
    descriptionAr: 'المرطب الذي بدأ كل شيء.',
    price: 1450,
    currency: 'QAR',
    category: 'beauty',
    image: 'https://images.unsplash.com/photo-1556228578-8c7c2f971c91?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    reviews: 600,
    affiliateUrl: 'https://www.sephora.ae/en/p/creme-de-la-mer-P10022416.html',
    retailer: 'Namshi',
    trendingRank: 3
  },

  // 6thStreet Trending
  {
    id: 'nike-air-max',
    nameEn: 'Nike Air Max 270',
    nameAr: 'نايكي إير ماكس 270',
    descriptionEn: 'Nike\'s first lifestyle Air Max brings you style, comfort and big Air.',
    descriptionAr: 'أول حذاء إير ماكس من نايكي بأسلوب حياة يمنحك الأناقة والراحة.',
    price: 749,
    currency: 'AED',
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800',
    rating: 4.6,
    reviews: 3400,
    affiliateUrl: 'https://en-ae.6thstreet.com/nike-air-max-270-shoes.html',
    retailer: '6thStreet',
    trendingRank: 1
  },
  {
    id: 'adidas-samba',
    nameEn: 'Adidas Samba OG',
    nameAr: 'أديداس سامبا أو جي',
    descriptionEn: 'Born on the pitch, the Samba is a timeless icon of street style.',
    descriptionAr: 'ولد في الملعب، سامبا هو أيقونة خالدة لأسلوب الشارع.',
    price: 499,
    currency: 'AED',
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1620138546344-7b2c38516dee?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
    reviews: 5200,
    affiliateUrl: 'https://en-ae.6thstreet.com/adidas-originals-white-samba-og-shoes.html',
    retailer: '6thStreet',
    trendingRank: 2
  }
];
