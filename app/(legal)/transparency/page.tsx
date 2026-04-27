import { pageMeta } from "@/lib/seo";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";
import StructuredData from "@/components/seo/StructuredData";
import { SITE_NAME, SITE_URL } from "@/lib/seo";
import TransparencyClient from "./TransparencyClient";

export const metadata = pageMeta({
  title: "Transparency & Neutrality | Arabia Khaleej",
  titleAr: "الشفافية والحياد | عربية خليج",
  description: "Our official statement on regulatory compliance, data transparency, and independent neutrality across the GCC region.",
  descriptionAr: "بياننا الرسمي حول الامتثال التنظيمي وشفافية البيانات والحياد المستقل في منطقة دول مجلس التعاون الخليجي.",
  path: "/transparency",
});

export default function Page() {
  const breadcrumbItems = [
    { name: "Home", item: "/" },
    { name: "Transparency", item: "/transparency" },
  ];

  const serviceData = {
    "headline": "Transparency & Neutrality",
    "description": "Our official statement on regulatory compliance, data transparency, and independent neutrality across the GCC region.",
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
