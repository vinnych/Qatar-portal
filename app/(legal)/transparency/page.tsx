import { pageMeta } from "@/lib/seo";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";
import StructuredData from "@/components/seo/StructuredData";
import { SITE_NAME, SITE_URL } from "@/lib/seo";
import TransparencyClient from "./TransparencyClient";

export const metadata = pageMeta({
  title: "Transparency & Neutrality | Arabia Khaleej",
  titleAr: "Ø§Ù„Ø´ÙØ§ÙÙŠØ© ÙˆØ§Ù„Ø­ÙŠØ§Ø¯ | Ø¹Ø±Ø¨ÙŠØ© Ø®Ù„ÙŠØ¬",
  description: "Our official statement on regulatory compliance, data transparency, and independent neutrality across the GCC region.",
  descriptionAr: "Ø¨ÙŠØ§Ù†Ù†Ø§ Ø§Ù„Ø±Ø³Ù…ÙŠ Ø­ÙˆÙ„ Ø§Ù„Ø§Ù…ØªØ«Ø§Ù„ Ø§Ù„ØªÙ†Ø¸ÙŠÙ…ÙŠ ÙˆØ´ÙØ§ÙÙŠØ© Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª ÙˆØ§Ù„Ø­ÙŠØ§Ø¯ Ø§Ù„Ù…Ø³ØªÙ‚Ù„ ÙÙŠ Ù…Ù†Ø·Ù‚Ø© Ø¯ÙˆÙ„ Ù…Ø¬Ù„Ø³ Ø§Ù„ØªØ¹Ø§ÙˆÙ† Ø§Ù„Ø®Ù„ÙŠØ¬ÙŠ.",
  path: "/transparency",
});

import { getT } from "@/lib/i18n-server";

export default async function Page() {
  const t = await getT();
  const breadcrumbItems = [
    { name: t('home'), item: "/" },
    { name: t('transparency'), item: "/transparency" },
  ];

  const serviceData = {
    "headline": t('transparencyTitle'),
    "description": t('transparencyDesc'),
    "author": {
      "@type": "Organization",
      "name": SITE_NAME
    },
    "publisher": {
      "@type": "Organization",
      "name": SITE_NAME,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/logo-premium-gold.png`
      }
    },
    "datePublished": "2024-04-18T00:00:00Z",
    "dateModified": new Date().toISOString()
  };

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <StructuredData type="Service" data={serviceData} />
      <TransparencyClient />
    </>
  );
}

