import { NextResponse } from 'next/server';
import { redis, CACHE_TIMES } from '@/lib/redis';
import { InsightItem } from '@/lib/insights';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

const SEED_ARTICLES: InsightItem[] = [
  {
    id: 'seed-001',
    slug: 'saudi-vision-2030-midpoint-review-gcc001',
    title: "Saudi Arabia's Vision 2030: Five Years In, the Transformation is Real",
    description: "From NEOM to the Saudi Stock Exchange, the Kingdom's economic diversification is ahead of schedule on several fronts. A deep-dive into what is working and what lies ahead...",
    link: '/insights/saudi-vision-2030-midpoint-review-gcc001',
    pubDate: '2026-05-03T08:00:00Z',
    source: 'Arabia Khaleej Editorial',
    category: 'gcc',
    language: 'en',
    image: 'https://images.pexels.com/photos/3522882/pexels-photo-3522882.jpeg',
    tags: ['gcc', 'vision2030', 'economy', 'saudi'],
    content: `# Saudi Arabia's Vision 2030: Five Years In, the Transformation is Real

When Crown Prince Mohammed bin Salman unveiled Vision 2030 in April 2016, the international community responded with measured scepticism. Could a petro-state genuinely pivot its economy within a single generation? A decade on, the answer is unfolding in real time — and on several critical metrics, the Kingdom is running ahead of schedule.

## Non-Oil Revenue: The Core Metric

The most closely watched indicator of Vision 2030's progress is non-oil revenue. In 2015, non-oil revenues accounted for roughly 10% of government income. By 2025, that figure had climbed to over 38%, with a medium-term target of 50% by 2030. The drivers include a tripled VAT rate (from 5% to 15%, introduced in 2020), a booming domestic tourism sector, and a surging Tadawul stock exchange that welcomed international institutional investors in 2019.

## Tourism: From Closed to Coveted

Perhaps no transformation has been more visible to the outside world than Saudi Arabia's tourism opening. In 2019, the Kingdom issued its first tourist visas. By 2024, it received over 100 million visitors, and the government has set a target of 150 million by 2030. Mega-projects like AlUla — a UNESCO-nominated heritage site reimagined as a luxury open-air museum — and the Red Sea Project, a coral-flanked archipelago resort, are drawing a demographic that would have been inconceivable a decade ago.

## The Labour Market Revolution

The Saudi labour market is undergoing a structural transformation. The Saudisation (Nitaqat) programme has placed quotas on foreign workers across sectors, incentivising companies to hire and train Saudi nationals. Female labour force participation has risen from under 20% in 2016 to over 33% by 2025, one of the sharpest increases recorded anywhere in the world in that timeframe. The entertainment economy — sports events, concerts, cinemas — has created tens of thousands of new jobs in sectors that simply did not exist before.

## What Remains Challenging

Execution risk remains real. NEOM's The Line has faced timeline adjustments as the scale of the project's engineering complexity became apparent. Some foreign investment targets have proven aspirational. Oil still funds the bulk of the budget in deficit years, and Aramco's IPO, while historic, did not attract the $2 trillion valuation MBS had once envisioned publicly.

Yet the trajectory is unmistakable. Saudi Arabia in 2026 is a profoundly different country from Saudi Arabia in 2016 — economically, socially, and in terms of its global positioning. The second half of Vision 2030 will determine whether this transformation proves durable, but the foundations are being laid with genuine intent and substantial capital.`,
  },
  {
    id: 'seed-002',
    slug: 'dubai-ai-economy-sovereign-infrastructure-gcc002',
    title: "Dubai's AI Strategy: Building the Backbone of a Sovereign Digital Economy",
    description: "The UAE is racing to establish sovereign AI infrastructure — from homegrown LLMs to a national cloud. Here's why Dubai's ambition could reshape the Middle East's digital future...",
    link: '/insights/dubai-ai-economy-sovereign-infrastructure-gcc002',
    pubDate: '2026-05-02T10:30:00Z',
    source: 'Arabia Khaleej Editorial',
    category: 'gcc',
    language: 'en',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
    tags: ['gcc', 'technology', 'ai', 'uae'],
    content: `# Dubai's AI Strategy: Building the Backbone of a Sovereign Digital Economy

The United Arab Emirates has made a calculated bet: that artificial intelligence is not merely a technology trend but a geopolitical asset. The country's AI strategy, first articulated in 2017 when it appointed the world's first Minister of State for AI, has evolved from aspirational policy into serious infrastructure. In 2026, the UAE is pursuing something rare in the global AI landscape — genuine digital sovereignty.

## Falcon and the Case for Homegrown AI

The Technology Innovation Institute (TII) in Abu Dhabi made global headlines in 2023 when it released Falcon, an open-source large language model that briefly topped leading benchmarks. For a country with fewer than 10 million citizens, building a world-class foundation model was a statement of intent. Falcon has since been iterated upon, with Falcon 2 establishing the UAE as one of a handful of non-Western nations capable of training frontier AI models.

The strategic logic is clear: a nation dependent on foreign AI infrastructure — OpenAI, Google, Anthropic — lacks control over its most sensitive data flows, its public sector applications, and its long-term digital competitiveness. Falcon provides a foundation that can be fine-tuned for Arabic language, Islamic jurisprudence, local governance, and sensitive government functions without routing data through foreign clouds.

## The National Cloud and Data Sovereignty

Alongside model development, the UAE has invested heavily in sovereign compute infrastructure. G42, the Abu Dhabi-based AI conglomerate, has constructed one of the region's largest GPU clusters, enabling domestic training and inference at scale. The company's complex relationship with Nvidia — navigating US export controls that restrict advanced chip sales to certain markets — illustrates the geopolitical dimensions of AI hardware acquisition.

The establishment of a national cloud, anchored by domestic data centres, is designed to ensure that government and critical sector data never leaves UAE jurisdiction. This mirrors strategies pursued by the EU under GAIA-X and by India's MeitY, but executed with the speed and capital deployment that only Gulf sovereign wealth can provide.

## Dubai's Role: The Commercial Hub

While Abu Dhabi leads on research and sovereign infrastructure, Dubai positions itself as the commercial AI hub. The Dubai International Financial Centre (DIFC) has attracted a cluster of AI startups, and the Dubai Future Foundation runs programmes that embed AI companies into government pilots. The emirate's ambition — articulated in its D33 economic agenda — is to add $100 billion in value to the economy by 2033, with AI-driven industries forming a core pillar.

For companies looking to access the Arab world's 400 million consumers with localised AI products, Dubai increasingly offers the regulatory clarity, talent, and capital connectivity to make it the gateway of choice.`,
  },
  {
    id: 'seed-003',
    slug: 'qatar-post-world-cup-economic-legacy-gcc003',
    title: "Qatar's Post-World Cup Economy: Diversification in the Fast Lane",
    description: "Three years after hosting football's greatest spectacle, Qatar is converting stadium legacy into economic momentum. Tourism, finance, and sport are the new pillars...",
    link: '/insights/qatar-post-world-cup-economic-legacy-gcc003',
    pubDate: '2026-05-01T09:00:00Z',
    source: 'Arabia Khaleej Editorial',
    category: 'gcc',
    language: 'en',
    image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg',
    tags: ['gcc', 'qatar', 'economy', 'sports'],
    content: `# Qatar's Post-World Cup Economy: Diversification in the Fast Lane

When the final whistle blew at Lusail Stadium in December 2022, it marked not an ending but a beginning for Qatar. The $300 billion infrastructure programme built to host the FIFA World Cup was never conceived as a one-event proposition. It was a platform — for tourism, for sports diplomacy, for financial services, and for a national rebranding that has fundamentally altered Qatar's position in the global imagination.

## The Tourism Flywheel

Qatar welcomed 1.4 million visitors during the World Cup month alone. The infrastructure built to accommodate them — hotels, metro lines, highways, cultural venues — did not disappear afterwards. The country has since leveraged these assets into a year-round tourism economy. Visitor arrivals in 2025 reached 4.7 million, up from 2.1 million in 2021, and the government's target of 6 million by 2030 appears increasingly achievable.

The Doha Film Institute, the Qatar Museums network (which includes MIA and the National Museum of Qatar), and a growing events calendar — including the Qatar ExxonMobil Open, MotoGP, and Formula 1 — have positioned Doha as a legitimate cultural and sporting destination, not merely a transit hub.

## Financial Services: The Quiet Expansion

Less visible but economically significant is Qatar's push to deepen its financial services sector. The Qatar Financial Centre (QFC) has aggressively attracted international fund managers, family offices, and fintech firms seeking a GCC base. Qatar's political stability — particularly in contrast to some regional neighbours — and its sovereign wealth fund (QIA), which manages assets exceeding $450 billion, make it an attractive anchor for regional capital markets activity.

The QIA itself has become increasingly visible as a direct investor in global infrastructure, real estate, and technology, with stakes ranging from Heathrow Airport to Credit Suisse (acquired in the 2023 emergency takeover by UBS). These investments channel returns back into the domestic economy through reinvestment mandates.

## Lessons the Region is Watching

Qatar's post-World Cup playbook — use a mega-event to force-build infrastructure, then convert that infrastructure into lasting economic assets — is being studied closely by Saudi Arabia as it prepares for the 2034 World Cup and the 2029 Asian Winter Games. The lesson Qatar demonstrates is that sovereign ambition, when backed by LNG revenues and executed with discipline, can compress decades of development into a single generation.`,
  },
  {
    id: 'seed-004',
    slug: 'abu-dhabi-sovereign-wealth-adnoc-mubadala-gcc004',
    title: "Abu Dhabi's Capital Machine: How ADNOC and Mubadala Are Reshaping Global Finance",
    description: "Abu Dhabi controls over $1.5 trillion in sovereign capital. The way it deploys that capital — through ADNOC's downstream expansion and Mubadala's tech bets — is redefining state capitalism...",
    link: '/insights/abu-dhabi-sovereign-wealth-adnoc-mubadala-gcc004',
    pubDate: '2026-04-30T11:00:00Z',
    source: 'Arabia Khaleej Editorial',
    category: 'gcc',
    language: 'en',
    image: 'https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg',
    tags: ['gcc', 'uae', 'finance', 'investment'],
    content: `# Abu Dhabi's Capital Machine: How ADNOC and Mubadala Are Reshaping Global Finance

Abu Dhabi sits atop one of the world's largest concentrations of sovereign capital. ADIA (Abu Dhabi Investment Authority), Mubadala, ADQ, and ADNOC collectively manage or influence the deployment of over $1.5 trillion in assets. Understanding how these entities operate — and how their mandates are evolving — is essential for anyone seeking to understand GCC capital markets and their increasing weight in global finance.

## ADNOC: From Oil Producer to Global Energy Company

ADNOC was once a straightforward national oil company: extract hydrocarbons, sell them, remit revenues to the government. That model has been deliberately dismantled under the leadership of Sultan Al Jaber, who serves as both ADNOC CEO and UAE Minister of Industry. The company has undergone a structural transformation — listing subsidiaries on the Abu Dhabi Securities Exchange, entering downstream petrochemicals through the BoroGe joint venture with Borealis, and acquiring stakes in international assets including a significant position in cokemaking coal through its ADNOC Logistics arm.

ADNOC's 2030 strategy commits $150 billion in capex to expand production capacity to 5 million barrels per day, while simultaneously investing in carbon capture and low-carbon hydrogen — a hedge that positions the company as viable regardless of the pace of the energy transition. The paradox of an oil major investing in its own long-term disruption is a calculated one: ADNOC understands that its window of maximum oil value may be closing, and it intends to extract maximum value before that window narrows.

## Mubadala: The Technology Sovereign

While ADIA focuses on diversified financial returns, Mubadala has carved out a distinct identity as a technology and innovation investor. Its portfolio includes cornerstone positions in SoftBank's Vision Fund, Waymo, GlobalFoundries (the semiconductor manufacturer it partially owns), and a growing roster of life sciences investments through its Mubadala Health platform.

The semiconductor investment thesis is particularly strategic. GlobalFoundries, which went public in 2021 with Mubadala retaining a majority stake, positions Abu Dhabi as a participant in the global chip supply chain — a sector that has become a focal point of US-China competition and that commands enormous geopolitical leverage.

## What This Means for Global Markets

Abu Dhabi's capital is patient, politically sophisticated, and increasingly capable of writing large cheques without external co-investors. This makes it a qualitatively different class of limited partner or direct investor compared to most pension funds or private equity firms. For founders, asset managers, and governments seeking strategic capital with long time horizons, Abu Dhabi has moved from peripheral to central.`,
  },
  {
    id: 'seed-005',
    slug: 'neom-construction-milestones-the-line-2026-gcc005',
    title: "NEOM in 2026: What's Actually Being Built and What Has Changed",
    description: "The Line's original 170km vision has been recalibrated. Sindalah is on track. Oxagon is operational in phases. Here is an honest assessment of NEOM's progress in 2026...",
    link: '/insights/neom-construction-milestones-the-line-2026-gcc005',
    pubDate: '2026-04-29T07:30:00Z',
    source: 'Arabia Khaleej Editorial',
    category: 'gcc',
    language: 'en',
    image: 'https://images.pexels.com/photos/2610756/pexels-photo-2610756.jpeg',
    tags: ['gcc', 'neom', 'saudi', 'construction'],
    content: `# NEOM in 2026: What's Actually Being Built and What Has Changed

NEOM remains the most ambitious construction project in human history by almost any measure — $500 billion in committed investment, a 26,500 square kilometre site in northwest Saudi Arabia, and a portfolio of sub-projects each of which would constitute a landmark development in any other country. In 2026, the project has matured from concept to active construction, and with that maturation has come the inevitable recalibration of ambition against engineering and financial reality.

## The Line: Revised but Not Abandoned

The original vision of The Line — 170 kilometres of mirrored linear city housing 9 million people, fully operational by 2030 — has been revised. Industry reporting in 2024 indicated that initial construction would focus on a 2.4 kilometre section near Sharma, with full-scale expansion contingent on proving the concept and securing additional financing. The 9 million residents target has been pushed beyond 2030, with a more realistic interim target of 300,000 residents in the first operational phase.

This recalibration does not represent a failure of ambition — it represents the engineering and financing reality of building something that has never been built before. The structural challenges of a 500-metre tall, 200-metre wide continuous building stretching across desert, mountain, and coastline terrain are genuinely unprecedented. The project's engineers are, in several respects, inventing solutions as they go.

## Sindalah: The Near-Term Showcase

While The Line captures headlines, Sindalah is NEOM's near-term showcase. The 840-hectare island in the Red Sea is being developed as a luxury yachting and water sports destination, with a 86-berth superyacht marina, hotels, beach clubs, and a golf course. Construction is on track for a phased opening in 2026, and it represents NEOM's most commercially immediate deliverable — a product that can generate revenue and international interest while the longer-horizon projects progress.

## Oxagon: Industrial Logic

Oxagon, the floating industrial city anchored to the coast near NEOM's northern boundary, is advancing in phases. The first phase focuses on advanced manufacturing — clean hydrogen production, autonomous systems, and modular construction technologies. Oxagon's design as an octagonal floating structure has been partially retained but adapted for pragmatic port and logistics functionality, reflecting the lessons of turning visionary renderings into operational industrial infrastructure.

## The Broader Picture

NEOM's significance extends beyond whether any individual sub-project meets its original timeline. It represents a genuine attempt to create a new urban paradigm — car-free, renewable-powered, AI-governed — and even a partial success will establish templates that future city-builders worldwide will study and adapt. The question for 2030 is not whether NEOM will be finished, but whether its first functional phases will be compelling enough to attract the residents, workers, and investors needed to sustain the broader vision.`,
  },
];

export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization');
  const { searchParams } = new URL(request.url);
  const cronSecret = searchParams.get('secret');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}` && cronSecret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const archiveKey = 'insights_archive_en';
  const current = ((await redis.get(archiveKey)) as InsightItem[] | null) || [];
  const existingSlugs = new Set(current.map((a) => a.slug));
  const unique = SEED_ARTICLES.filter((a) => !existingSlugs.has(a.slug));
  const updated = [...unique, ...current].slice(0, 1500);
  await redis.set(archiveKey, updated, { ex: CACHE_TIMES.INSIGHTS_ARCHIVE });

  return NextResponse.json({
    success: true,
    added: unique.length,
    alreadyExisted: SEED_ARTICLES.length - unique.length,
    slugs: unique.map((a) => a.slug),
  });
}
