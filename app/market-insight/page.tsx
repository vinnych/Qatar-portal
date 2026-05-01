import { pageMeta, SITE_NAME, SITE_NAME_AR } from "@/lib/seo";
import MarketInsightClient from "@/components/finance/MarketInsightClient";
import {
  BreadcrumbSchema,
  DatasetSchema,
  WebPageSchema,
  ExchangeRateSchema,
  CommoditySchema,
} from "@/components/seo/StructuredData";
import StructuredData from "@/components/seo/StructuredData";
import { getT } from "@/lib/i18n-server";

export const metadata = pageMeta({
  title: `Market Insight â€” GCC Stocks, Gold & Currencies | ${SITE_NAME}`,
  titleAr: `Ø±Ø¤Ù‰ Ø§Ù„Ø³ÙˆÙ‚ â€” Ø§Ù„Ø£Ø³Ù‡Ù… Ø§Ù„Ø®Ù„ÙŠØ¬ÙŠØ© ÙˆØ§Ù„Ø°Ù‡Ø¨ ÙˆØ§Ù„Ø¹Ù…Ù„Ø§Øª | ${SITE_NAME_AR}`,
  description:
    "Real-time GCC market data: Tadawul (TASI) 12,450 pts, ADX 9,230 pts, DFM 4,210 pts, QE Index 10,150 pts. Gold XAU/USD ~$2,385. GCC currency rates vs USD. Updated every 30 seconds.",
  descriptionAr:
    "Ø¨ÙŠØ§Ù†Ø§Øª Ø§Ù„Ø³ÙˆÙ‚ Ø§Ù„Ø®Ù„ÙŠØ¬ÙŠ Ø§Ù„ÙÙˆØ±ÙŠØ©: ØªØ¯Ø§ÙˆÙ„ (ØªØ§Ø³ÙŠ)ØŒ Ø³ÙˆÙ‚ Ø£Ø¨ÙˆØ¸Ø¨ÙŠØŒ Ø³ÙˆÙ‚ Ø¯Ø¨ÙŠ Ø§Ù„Ù…Ø§Ù„ÙŠØŒ Ù…Ø¤Ø´Ø± Ù‚Ø·Ø±. Ø£Ø³Ø¹Ø§Ø± Ø§Ù„Ø°Ù‡Ø¨ ÙˆØ§Ù„Ø¹Ù…Ù„Ø§Øª. ØªØ­Ø¯ÙŠØ« ÙƒÙ„ 30 Ø«Ø§Ù†ÙŠØ©.",
  path: "/market-insight",
  keywords: [
    "GCC stocks", "Tadawul", "TASI", "ADX", "DFM", "QE Index", "Boursa Kuwait",
    "gold rates", "XAU/USD", "GCC currencies", "AED USD", "SAR USD", "QAR USD",
    "KWD USD", "OMR USD", "BHD USD", "Brent crude", "GCC economy",
    "Ø£Ø³Ù‡Ù… Ø§Ù„Ø®Ù„ÙŠØ¬", "ØªØ¯Ø§ÙˆÙ„", "Ø£Ø³Ø¹Ø§Ø± Ø§Ù„Ø°Ù‡Ø¨", "Ø£Ø³Ø¹Ø§Ø± Ø§Ù„ØµØ±Ù",
  ],
});

// Static currency data (used for schema â€” live data loads client-side)
const STATIC_CURRENCIES = [
  { code: "AED", name: "UAE Dirham", nameAr: "Ø¯Ø±Ù‡Ù… Ø¥Ù…Ø§Ø±Ø§ØªÙŠ", rate: 3.6725, country: "United Arab Emirates" },
  { code: "SAR", name: "Saudi Riyal", nameAr: "Ø±ÙŠØ§Ù„ Ø³Ø¹ÙˆØ¯ÙŠ", rate: 3.7500, country: "Saudi Arabia" },
  { code: "QAR", name: "Qatari Riyal", nameAr: "Ø±ÙŠØ§Ù„ Ù‚Ø·Ø±ÙŠ", rate: 3.6400, country: "Qatar" },
  { code: "KWD", name: "Kuwaiti Dinar", nameAr: "Ø¯ÙŠÙ†Ø§Ø± ÙƒÙˆÙŠØªÙŠ", rate: 0.3070, country: "Kuwait" },
  { code: "OMR", name: "Omani Rial", nameAr: "Ø±ÙŠØ§Ù„ Ø¹Ù…Ø§Ù†ÙŠ", rate: 0.3850, country: "Oman" },
  { code: "BHD", name: "Bahraini Dinar", nameAr: "Ø¯ÙŠÙ†Ø§Ø± Ø¨Ø­Ø±ÙŠÙ†ÙŠ", rate: 0.3770, country: "Bahrain" },
];

export default async function MarketInsightPage() {
  const t = await getT();
  const breadcrumbItems = [
    { name: t('home'), item: "/" },
    { name: t('marketInsights'), item: "/market-insight" },
  ];

  return (
    <>
      <WebPageSchema
        name="GCC Market Insight â€” Stocks, Gold & Currencies"
        description="Live GCC equity indices, gold spot price, Brent crude, and all GCC currency exchange rates vs USD."
        url="/market-insight"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <DatasetSchema
        name="GCC Market Intelligence Dataset"
        description="Aggregated real-time and delayed data for GCC stock exchanges (Tadawul, ADX, DFM, QE, Boursa Kuwait), precious metals (Gold XAU/USD, Brent Crude), and all GCC currency exchange rates vs USD."
        url="/market-insight"
        keywords={["Tadawul", "ADX", "DFM", "QE Index", "gold", "Brent crude", "AED", "SAR", "QAR", "KWD", "OMR", "BHD"]}
      />
      {/* Stock Exchanges as ItemList */}
      <StructuredData
        type="ItemList"
        data={{
          name: "GCC Stock Market Indices",
          alternateName: "Ù…Ø¤Ø´Ø±Ø§Øª Ø£Ø³ÙˆØ§Ù‚ Ø§Ù„Ø£Ø³Ù‡Ù… Ø§Ù„Ø®Ù„ÙŠØ¬ÙŠØ©",
          description: "Major stock exchange indices across the Gulf Cooperation Council region.",
          numberOfItems: 5,
          itemListElement: [
            {
              "@type": "ListItem", position: 1,
              item: {
                "@type": "Thing", name: "Tadawul All Share Index (TASI)",
                description: "Saudi Arabia's main stock exchange index. Largest bourse in the MENA region.",
                url: "https://www.saudiexchange.sa",
                additionalProperty: [
                  { "@type": "PropertyValue", name: "Ticker", value: "TASI" },
                  { "@type": "PropertyValue", name: "Country", value: "Saudi Arabia" },
                  { "@type": "PropertyValue", name: "Currency", value: "SAR" },
                ],
              },
            },
            {
              "@type": "ListItem", position: 2,
              item: {
                "@type": "Thing", name: "ADX General Index",
                description: "Abu Dhabi Securities Exchange general index.",
                url: "https://www.adx.ae",
                additionalProperty: [
                  { "@type": "PropertyValue", name: "Ticker", value: "ADI" },
                  { "@type": "PropertyValue", name: "Country", value: "United Arab Emirates" },
                  { "@type": "PropertyValue", name: "Currency", value: "AED" },
                ],
              },
            },
            {
              "@type": "ListItem", position: 3,
              item: {
                "@type": "Thing", name: "Dubai Financial Market Index (DFMGI)",
                description: "Dubai Financial Market general index.",
                url: "https://www.dfm.ae",
                additionalProperty: [
                  { "@type": "PropertyValue", name: "Ticker", value: "DFMGI" },
                  { "@type": "PropertyValue", name: "Country", value: "United Arab Emirates" },
                  { "@type": "PropertyValue", name: "Currency", value: "AED" },
                ],
              },
            },
            {
              "@type": "ListItem", position: 4,
              item: {
                "@type": "Thing", name: "Qatar Exchange Index (QE)",
                description: "Qatar Stock Exchange main index.",
                url: "https://www.qe.com.qa",
                additionalProperty: [
                  { "@type": "PropertyValue", name: "Ticker", value: "QE" },
                  { "@type": "PropertyValue", name: "Country", value: "Qatar" },
                  { "@type": "PropertyValue", name: "Currency", value: "QAR" },
                ],
              },
            },
            {
              "@type": "ListItem", position: 5,
              item: {
                "@type": "Thing", name: "Boursa Kuwait All-Share Index",
                description: "Kuwait Stock Exchange all-share index.",
                url: "https://www.boursakuwait.com.kw",
                additionalProperty: [
                  { "@type": "PropertyValue", name: "Ticker", value: "KWSE" },
                  { "@type": "PropertyValue", name: "Country", value: "Kuwait" },
                  { "@type": "PropertyValue", name: "Currency", value: "KWD" },
                ],
              },
            },
          ],
        }}
      />
      {/* Commodities */}
      <CommoditySchema
        name="Gold Spot Price"
        nameAr="Ø³Ø¹Ø± Ø§Ù„Ø°Ù‡Ø¨ Ø§Ù„ÙÙˆØ±ÙŠ"
        symbol="XAU/USD"
        priceCurrency="USD"
        price={2385.40}
        change={1.20}
      />
      <CommoditySchema
        name="Brent Crude Oil"
        nameAr="Ø®Ø§Ù… Ø¨Ø±Ù†Øª"
        symbol="OIL/USD"
        priceCurrency="USD"
        price={87.50}
        change={-0.45}
      />
      {/* GCC Currency Rates */}
      <ExchangeRateSchema currencies={STATIC_CURRENCIES} />
      <MarketInsightClient />
    </>
  );
}

