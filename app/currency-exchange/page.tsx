import { pageMeta } from "@/lib/seo";
import { WebPageSchema, DatasetSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import CurrencyExchangeClient from "@/components/finance/CurrencyExchangeClient";

export const metadata = pageMeta({
  title: "Currency Exchange â€” Live GCC & World Currency Converter",
  titleAr: "ØªØ­ÙˆÙŠÙ„ Ø§Ù„Ø¹Ù…Ù„Ø§Øª â€” Ù…Ø­ÙˆÙ‘Ù„ Ø§Ù„Ø¹Ù…Ù„Ø§Øª Ø§Ù„Ø®Ù„ÙŠØ¬ÙŠØ© ÙˆØ§Ù„Ø¹Ø§Ù„Ù…ÙŠØ© Ø§Ù„Ù…Ø¨Ø§Ø´Ø±",
  description:
    "Convert between 40+ currencies with live exchange rates. GCC currencies (AED, SAR, QAR, KWD, OMR, BHD), major pairs (USD, EUR, GBP), and Asian currencies. Real-time rates updated every 30 minutes.",
  descriptionAr:
    "Ø­ÙˆÙ‘Ù„ Ø¨ÙŠÙ† Ø£ÙƒØ«Ø± Ù…Ù† 40 Ø¹Ù…Ù„Ø© Ø¨Ø£Ø³Ø¹Ø§Ø± ØµØ±Ù Ù…Ø¨Ø§Ø´Ø±Ø©. Ø¹Ù…Ù„Ø§Øª Ø§Ù„Ø®Ù„ÙŠØ¬ (Ø¯Ø±Ù‡Ù… Ø¥Ù…Ø§Ø±Ø§ØªÙŠØŒ Ø±ÙŠØ§Ù„ Ø³Ø¹ÙˆØ¯ÙŠØŒ Ø±ÙŠØ§Ù„ Ù‚Ø·Ø±ÙŠØŒ Ø¯ÙŠÙ†Ø§Ø± ÙƒÙˆÙŠØªÙŠØŒ Ø±ÙŠØ§Ù„ Ø¹Ù…Ø§Ù†ÙŠØŒ Ø¯ÙŠÙ†Ø§Ø± Ø¨Ø­Ø±ÙŠÙ†ÙŠ) ÙˆØ§Ù„Ø¹Ù…Ù„Ø§Øª Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ© ÙˆØ§Ù„Ø¹Ù…Ù„Ø§Øª Ø§Ù„Ø¢Ø³ÙŠÙˆÙŠØ©.",
  path: "/currency-exchange",
  keywords: [
    "currency exchange", "currency converter", "GCC exchange rates",
    "AED to USD", "SAR to USD", "QAR to USD", "KWD to USD",
    "live exchange rates", "money converter", "forex rates GCC",
    "ØªØ­ÙˆÙŠÙ„ Ø§Ù„Ø¹Ù…Ù„Ø§Øª", "Ø£Ø³Ø¹Ø§Ø± Ø§Ù„ØµØ±Ù", "Ù…Ø­ÙˆÙ„ Ø¹Ù…Ù„Ø§Øª",
    "Ø³Ø¹Ø± Ø§Ù„Ø¯ÙˆÙ„Ø§Ø±", "Ø³Ø¹Ø± Ø§Ù„Ø±ÙŠØ§Ù„", "Ø³Ø¹Ø± Ø§Ù„Ø¯Ø±Ù‡Ù…",
  ],
});

import { getT } from "@/lib/i18n-server";

export default async function CurrencyExchangePage() {
  const t = await getT();
  const breadcrumbItems = [
    { name: t("home"), item: "/" },
    { name: t("marketInsights"), item: "/market-insight" },
    { name: t("currencyExchange"), item: "/currency-exchange" },
  ];

  return (
    <>
      <WebPageSchema
        name={t("currencyExchangeSchemaName")}
        description={t("currencyExchangeSchemaDesc")}
        url="/currency-exchange"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <DatasetSchema
        name={t("currencyExchangeDatasetName")}
        description={t("currencyExchangeDatasetDesc")}
        url="/currency-exchange"
        keywords={[
          "exchange rates", "currency converter", "GCC currencies",
          "forex", "live rates", "ØªØ­ÙˆÙŠÙ„ Ø§Ù„Ø¹Ù…Ù„Ø§Øª", "Ø£Ø³Ø¹Ø§Ø± Ø§Ù„ØµØ±Ù",
        ]}
      />
      <CurrencyExchangeClient />
    </>
  );
}

