import { pageMeta, SITE_NAME } from "@/lib/seo";
import FinanceClient from "@/components/FinanceClient";
import StructuredData from "@/components/StructuredData";

export const metadata = pageMeta({
  title: `Market Insights — GCC Gold & Currency Rates | ${SITE_NAME}`,
  description: "Live GCC market insights including gold rates and currency exchange for QAR, SAR, AED, KWD, BHD, and OMR.",
  path: "/finance",
  keywords: ["GCC finance", "gold rates", "currency exchange", "Qatari Riyal", "Saudi Riyal", "UAE Dirham", "Kuwaiti Dinar", "Omani Rial", "Bahraini Dinar"],
});

export default function FinancePage() {
  const breadcrumbData = {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://arabiakhaleej.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Market Insights",
        "item": "https://arabiakhaleej.com/finance"
      }
    ]
  };

  return (
    <>
      <StructuredData type="BreadcrumbList" data={breadcrumbData} />
      <FinanceClient />
    </>
  );
}

