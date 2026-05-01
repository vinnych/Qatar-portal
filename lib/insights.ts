import { redis } from './redis';

export interface InsightItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  link: string;
  pubDate: string;
  source: string;
  category: 'gcc' | 'expat';
  language: 'en' | 'ar' | 'regional';
  image?: string;
  tags?: string[];
  content?: string;
}

/**
 * Hardcoded Base Articles
 */
export const PREMIUM_ARTICLES: Record<string, InsightItem[]> = {
  en: [
    {
      id: "prem-1",
      slug: "cinema-excellence-women",
      title: "The Art of Performance: Leading Movie Actresses of the GCC",
      description: "A refined look at the iconic movie actresses shaping the regional film industry with grace and artistic depth.",
      link: "/insights/cinema-excellence-women",
      pubDate: "2026-04-30T10:00:00Z",
      source: "Arabia Khaleej Premium",
      category: "gcc",
      language: "en",
      image: "/images/insights/cinema-actress.png",
      tags: ["entertainment", "women", "cinema", "lifestyle"],
      content: `# The Art of Performance: Leading Movie Actresses of the GCC

The Gulf Cooperation Council has undergone a remarkable cultural renaissance over the past decade. Among the most visible signs of this transformation is the emergence of a vibrant film industry, with talented actresses from Saudi Arabia, the UAE, Kuwait, Bahrain, Qatar, and Oman earning recognition both regionally and internationally.

## The Rise of GCC Cinema

Vision 2030 in Saudi Arabia, alongside cultural liberalization across Gulf states, has opened new avenues for creative expression. Cinemas reopened in Saudi Arabia in 2018 after a 35-year ban, and since then the regional film industry has grown dramatically. The Red Sea International Film Festival in Jeddah has become a significant platform for regional talent, drawing global attention to GCC filmmakers and performers.

## Trailblazing Actresses Shaping the Industry

### Mila Al Zahrani (Saudi Arabia)

Mila Al Zahrani made history as one of the first Saudi actresses to gain international recognition. Her role in the critically acclaimed film *Scales* (2019) — the first Saudi production selected for the Cannes Film Festival — established her as a formidable presence in world cinema. Her nuanced portrayal of a young woman challenging societal norms resonated with audiences globally, winning praise for both the film and its lead actress.

### Fatima Al Banawi (Saudi Arabia)

Fatima Al Banawi is a multifaceted talent — actress, filmmaker, and cultural ambassador. Known for her work in *Barakah Meets Barakah* (2016), the first Saudi film to compete at the Berlin International Film Festival, Al Banawi brought depth and authenticity to a love story set in Riyadh. Her ability to capture the nuance of contemporary Saudi life has made her one of the most respected voices in regional cinema.

### Reem Abdullah (Saudi Arabia)

With a career spanning television, film, and theater, Reem Abdullah is one of the most experienced and beloved actresses in the GCC. Her work in Arabic-language drama has earned her numerous accolades and a devoted following across the Arab world. Abdullah represents the bridge between classical Arabic performance tradition and the modern sensibilities of a new generation of Gulf audiences.

## The UAE's Growing Film Presence

The United Arab Emirates has established itself as a regional hub for film production, with Dubai and Abu Dhabi hosting major international festivals and co-productions. Emirati actresses are increasingly visible in Arab cinema, bringing stories of ambition, identity, and modernity to screens across the region.

The UAE Film Fund and the Abu Dhabi Film Commission have invested significantly in developing local talent, creating pathways for Emirati women to pursue careers in performance and direction. International platforms including Netflix have begun commissioning original GCC content, further elevating regional actresses to global audiences.

## Cultural Significance

The prominence of women in GCC cinema carries significance beyond entertainment. These actresses navigate complex questions of identity, tradition, and modernity — themes that resonate deeply with Gulf audiences. Their work challenges stereotypes while honoring cultural heritage, creating a uniquely Gulf cinematic voice distinct from both Hollywood and traditional Arab cinema.

## Film Festivals as Launchpads

The Red Sea International Film Festival (Jeddah), the Dubai International Film Festival, and the Abu Dhabi Film Festival have become essential platforms for regional talent. These events connect GCC actresses with international industry figures, creating opportunities for cross-border collaborations and co-productions that were previously out of reach.

## Looking Ahead

The trajectory of GCC cinema points firmly upward. With increasing government investment, growing domestic audiences, and international streaming platforms actively seeking diverse content, the conditions are favorable for GCC actresses to achieve even greater global prominence.

The generation of performers emerging today — trained in regional film schools, mentored by veterans, and supported by new funding structures — represents a depth of talent that will shape Gulf cultural output for decades to come. The art of performance in the GCC is no longer an emerging story. It is an established, internationally recognized force.`
    },
  ],
  ar: [
    {
      id: "prem-1-ar",
      slug: "cinema-excellence-women",
      title: "فن الأداء: أبرز ممثلات السينما في دول الخليج",
      description: "نظرة راقية على ممثلات السينما اللواتي يشكلن صناعة الأفلام الإقليمية بالنعمة والعمق الفني.",
      link: "/insights/cinema-excellence-women",
      pubDate: "2026-04-30T10:00:00Z",
      source: "عربية خليج بريميوم",
      category: "gcc",
      language: "ar",
      image: "/images/insights/cinema-actress.png",
      tags: ["entertainment", "women", "cinema", "lifestyle"],
      content: `# فن الأداء: أبرز ممثلات السينما في دول مجلس التعاون الخليجي

شهدت دول مجلس التعاون الخليجي نهضة ثقافية بارزة خلال العقد الماضي، كان أبرز ملامحها صعود صناعة سينمائية متنامية تزخر بالمواهب الأنثوية من المملكة العربية السعودية والإمارات والكويت والبحرين وقطر وعُمان.

## نهضة السينما الخليجية

فتحت رؤية المملكة العربية السعودية 2030 والانفتاح الثقافي في دول الخليج آفاقاً جديدة للتعبير الإبداعي. أعادت المملكة افتتاح دور السينما عام 2018 بعد غياب دام خمسة وثلاثين عاماً، لتشهد صناعة السينما الإقليمية منذ ذلك الحين نمواً استثنائياً. وقد غدا مهرجان البحر الأحمر السينمائي الدولي في جدة منصةً محورية للمواهب الإقليمية، يستقطب الأنظار العالمية نحو صنّاع السينما الخليجية.

## ممثلات يصنعن التاريخ

### ميلا الزهراني (المملكة العربية السعودية)

سطع نجم ميلا الزهراني دولياً من خلال دورها في فيلم *حوت* الذي أُدرج ضمن عروض مهرجان كان السينمائي، لتصبح واحدة من أبرز الأصوات السينمائية الخليجية على الساحة العالمية. جسّدت الزهراني شخصية امرأة شابة تتحدى الأعراف الاجتماعية بأداء مُتقن أثنى عليه النقاد في أرجاء العالم.

### فاطمة البنوي (المملكة العربية السعودية)

تمثل فاطمة البنوي نموذجاً للفنانة المتكاملة؛ ممثلة ومخرجة وسفيرة ثقافية. أدّت دور البطولة في فيلم *بركة يقابل بركة* الذي شارك في مسابقة مهرجان برلين الدولي، وتُعدّ اليوم من أكثر الأصوات الفنية احتراماً في المشهد السينمائي الخليجي.

### ريم عبدالله (المملكة العربية السعودية)

تمتد مسيرة ريم عبدالله الفنية عبر التلفزيون والسينما والمسرح، لتُرسّخ مكانتها بوصفها من أبرز الممثلات وأكثرهن خبرةً في منطقة الخليج. تمثّل عبدالله الجسر الذي يربط التراث الأدائي العربي الكلاسيكي بالذائقة المعاصرة لجيل جديد من المشاهدين الخليجيين.

## حضور الإمارات في عالم الفن السينمائي

رسّخت الإمارات العربية المتحدة مكانتها مركزاً إقليمياً لإنتاج الأفلام، إذ تحتضن دبي وأبوظبي مهرجانات دولية كبرى وإنتاجات مشتركة متعددة. وتتصاعد مشاركة الممثلات الإماراتيات في السينما العربية، حاملاتٍ معهن قصص الطموح والهوية والحداثة إلى الشاشات الإقليمية والعالمية.

## الأهمية الثقافية

تحمل ظاهرة صعود المرأة الخليجية في عالم السينما دلالات تتجاوز الترفيه؛ إذ تطرح هؤلاء الممثلات أسئلة عميقة حول الهوية والتراث والحداثة في حوار فني رفيع مع الجمهور. يتحدى عملهن الصور النمطية في الوقت الذي يُكرّم فيه الموروث الثقافي، ليُفرز صوتاً سينمائياً خليجياً متميزاً يختلف عن هوليوود والسينما العربية التقليدية على حدٍّ سواء.

## المهرجانات منصةً للانطلاق

باتت مهرجانات البحر الأحمر السينمائي في جدة ومهرجان دبي السينمائي الدولي ومهرجان أبوظبي السينمائي منصات أساسية تربط المواهب الخليجية بالصناعة العالمية، وتفتح أمامها آفاق التعاون الدولي وصفقات التوزيع في الأسواق الأوروبية والأمريكية الشمالية.

## آفاق مستقبلية واعدة

تشير المؤشرات كافة إلى مستقبل واعد للسينما الخليجية، في ظل استثمارات حكومية متصاعدة وجمهور محلي متحمس ومنصات بث عالمية تسعى بنشاط إلى محتوى خليجي أصيل. الممثلات الخليجيات اليوم لسن قصة ناشئة، بل قوة إبداعية راسخة تتشكل على أيديهن ملامح المشهد الثقافي الخليجي لعقود مقبلة.`
    },
  ]
};

/**
 * Unified fetcher that merges hardcoded and Redis-stored dynamic insights.
 */
export async function getUnifiedInsights(options: { 
  lang: 'en' | 'ar', 
  category?: string | null,
  limit?: number 
}): Promise<InsightItem[]> {
  const { lang, category, limit = 100 } = options;
  
  // 1. Get hardcoded base
  const baseItems = PREMIUM_ARTICLES[lang] || [];
  
  // 2. Get dynamic archive from Redis
  let dynamicItems: InsightItem[] = [];
  try {
    const archiveKey = `insights_archive_${lang}`;
    const stored = await redis.get(archiveKey) as InsightItem[] | null;
    if (stored && Array.isArray(stored)) {
      dynamicItems = stored;
    }
  } catch (e) {
    console.error("Failed to fetch dynamic insights from Redis:", e);
  }

  // 3. Merge, Deduplicate and Sort
  // Use a Map for O(N) deduplication by slug
  const allMap = new Map<string, InsightItem>();
  
  // Add base items first (so they can be overwritten by newer dynamic items if slug matches)
  baseItems.forEach(item => allMap.set(item.slug, item));
  // Add dynamic items (overwrite base if slug matches, assuming dynamic is newer)
  dynamicItems.forEach(item => allMap.set(item.slug, item));

  let allItems = Array.from(allMap.values());

  // Sort by date descending
  allItems.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

  // 4. Filter by category if needed
  if (category) {
    const catLower = category.toLowerCase();
    allItems = allItems.filter(n => {
      return n.tags?.some(t => t.toLowerCase() === catLower) || 
             n.title.toLowerCase().includes(catLower) || 
             (n.description || "").toLowerCase().includes(catLower);
    });
  }

  return allItems.slice(0, limit);
}

export async function getArticleBySlug(slug: string, lang: 'en' | 'ar'): Promise<InsightItem | null> {
  const allInsights = await getUnifiedInsights({ lang, limit: 1000 });
  const article = allInsights.find(p => p.slug === slug);
  if (article) return article;

  // Check other language as fallback
  const otherLang = lang === 'en' ? 'ar' : 'en';
  const allOther = await getUnifiedInsights({ lang: otherLang, limit: 1000 });
  return allOther.find(p => p.slug === slug) || null;
}

export async function getAllInsightSlugs(): Promise<{ slug: string, lang: 'en' | 'ar', pubDate: string }[]> {
  const enItems = await getUnifiedInsights({ lang: 'en', limit: 1000 });
  const arItems = await getUnifiedInsights({ lang: 'ar', limit: 1000 });

  const enSlugs = enItems.map(n => ({ slug: n.slug, lang: 'en' as const, pubDate: n.pubDate }));
  const arSlugs = arItems.map(n => ({ slug: n.slug, lang: 'ar' as const, pubDate: n.pubDate }));

  return [...enSlugs, ...arSlugs];
}
