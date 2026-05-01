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
  // Noon.com Trending & Best Sellers
  {
    id: 'iphone-15-pro-max',
    nameEn: 'iPhone 15 Pro Max (256GB, Titanium)',
    nameAr: 'أيفون 15 برو ماكس (256 جيجابايت، تيتانيوم)',
    descriptionEn: 'The ultimate iPhone with aerospace-grade titanium design and A17 Pro chip.',
    descriptionAr: 'أقوى أيفون بتصميم من التيتانيوم وشريحة A17 برو.',
    price: 4699,
    currency: 'AED',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    reviews: 1240,
    affiliateUrl: 'https://www.noon.com/uae-en/iphone-15-pro-max-256gb-natural-titanium-5g-with-facetime-international-specs/N53432431A/p/',
    retailer: 'Noon.com',
    isBestSeller: true,
    isTrending: true,
    trendingRank: 1
  },
  {
    id: 'samsung-s24-ultra',
    nameEn: 'Samsung Galaxy S24 Ultra (512GB)',
    nameAr: 'سامسونج جالاكسي S24 ألترا (512 جيجابايت)',
    descriptionEn: 'The new era of mobile AI. Titanium exterior and 200MP camera.',
    descriptionAr: 'عصر جديد من الذكاء الاصطناعي للهواتف المحمولة. هيكل تيتانيوم وكاميرا 200 ميجابكسل.',
    price: 4299,
    currency: 'AED',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
    reviews: 850,
    affiliateUrl: 'https://www.noon.com/uae-en/galaxy-s24-ultra-5g-dual-sim-titanium-gray-12gb-ram-512gb-storage-middle-east-version/N70035252A/p/',
    retailer: 'Noon.com',
    isBestSeller: true,
    isTrending: true,
    trendingRank: 2
  },
  {
    id: 'sony-wh1000xm5',
    nameEn: 'Sony WH-1000XM5 Headphones',
    nameAr: 'سماعات سوني WH-1000XM5',
    descriptionEn: 'Industry leading noise canceling with two processors.',
    descriptionAr: 'إلغاء ضوضاء رائد في الصناعة مع معالجين.',
    price: 1149,
    currency: 'AED',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    reviews: 2800,
    affiliateUrl: 'https://www.noon.com/uae-en/wh-1000xm5-wireless-noise-cancelling-over-ear-headphones-black/N53224754A/p/',
    retailer: 'Noon.com',
    isTrending: true,
    trendingRank: 3
  },
  {
    id: 'ps5-slim',
    nameEn: 'PlayStation 5 Slim Console',
    nameAr: 'منصة بلاي ستيشن 5 سليم',
    descriptionEn: 'Experience lightning-fast loading with an ultra-high speed SSD.',
    descriptionAr: 'استمتع بتحميل فائق السرعة مع محرك أقراص SSD فائق السرعة.',
    price: 1849,
    currency: 'AED',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    reviews: 3200,
    affiliateUrl: 'https://www.noon.com/uae-en/playstation-5-console-slim/N70034421A/p/',
    retailer: 'Noon.com',
    isBestSeller: true,
    trendingRank: 4
  },
  {
    id: 'noon-east-air-fryer',
    nameEn: 'Noon East Digital Air Fryer (5L)',
    nameAr: 'نون إيست مقلاة هوائية رقمية (5 لتر)',
    descriptionEn: 'Cook your favorite meals with 80% less oil.',
    descriptionAr: 'اطبخ وجباتك المفضلة بزيت أقل بنسبة 80٪.',
    price: 199,
    currency: 'AED',
    category: 'homeLifestyle',
    image: 'https://images.unsplash.com/photo-1558317374-067df5f1517d?auto=format&fit=crop&q=80&w=800',
    rating: 4.6,
    reviews: 4500,
    affiliateUrl: 'https://www.noon.com/uae-en/5l-digital-air-fryer-1450w-black/N40632360A/p/',
    retailer: 'Noon.com',
    isBestSeller: true,
    trendingRank: 5
  },
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
    trendingRank: 6
  },
  {
    id: 'nike-air-force-1',
    nameEn: 'Nike Air Force 1 \'07',
    nameAr: 'نايكي إير فورس 1 \'07',
    descriptionEn: 'The radiance lives on in the Nike Air Force 1 \'07.',
    descriptionAr: 'يستمر التألق في حذاء نايكي إير فورس 1 \'07.',
    price: 450,
    currency: 'AED',
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
    reviews: 5600,
    affiliateUrl: 'https://www.noon.com/uae-en/air-force-1-07-sneakers-white/N12345678A/p/',
    retailer: 'Noon.com',
    isBestSeller: true,
    trendingRank: 7
  },
  {
    id: 'the-ordinary-serum',
    nameEn: 'The Ordinary Hyaluronic Acid 2% + B5',
    nameAr: 'ذا أورديناري حمض الهيالورونيك 2٪ + B5',
    descriptionEn: 'A hydration support formula with ultra-pure, vegan hyaluronic acid.',
    descriptionAr: 'تركيبة دعم الترطيب مع حمض الهيالورونيك النباتي فائق النقاء.',
    price: 45,
    currency: 'AED',
    category: 'beauty',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800',
    rating: 4.7,
    reviews: 8900,
    affiliateUrl: 'https://www.noon.com/uae-en/hyaluronic-acid-2-b5-face-serum-30ml/N14952040A/p/',
    retailer: 'Noon.com',
    isBestSeller: true,
    trendingRank: 8
  },
  {
    id: 'optimum-nutrition-whey',
    nameEn: 'ON Gold Standard 100% Whey (5lb)',
    nameAr: 'أوبتيموم نوتريشن جولد ستاندرد 100٪ واي (5 رطل)',
    descriptionEn: 'The world\'s best-selling whey protein powder.',
    descriptionAr: 'مسحوق بروتين مصل اللبن الأكثر مبيعاً في العالم.',
    price: 299,
    currency: 'AED',
    category: 'wellness',
    image: 'https://images.unsplash.com/photo-1593095183571-2d5ff2499dca?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    reviews: 12000,
    affiliateUrl: 'https://www.noon.com/uae-en/gold-standard-100-whey-protein-powder-5-lb-double-rich-chocolate/N13245678A/p/',
    retailer: 'Noon.com',
    isBestSeller: true,
    trendingRank: 9
  },
  {
    id: 'ray-ban-aviator',
    nameEn: 'Ray-Ban Aviator Classic',
    nameAr: 'راي بان أفياتور كلاسيك',
    descriptionEn: 'The iconic sunglasses that started it all.',
    descriptionAr: 'النظارات الشمسية الأيقونية التي بدأت كل شيء.',
    price: 550,
    currency: 'AED',
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800',
    rating: 4.7,
    reviews: 1200,
    affiliateUrl: 'https://www.noon.com/uae-en/aviator-sunglasses-gold-frame-green-lens/N11002233A/p/',
    retailer: 'Noon.com',
    trendingRank: 10
  }
];
