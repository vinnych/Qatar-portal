import { pageMeta } from "@/lib/seo";
import ContactClient from "./ContactClient";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";

export const metadata = pageMeta({
  title: "Contact Us | Arabia Khaleej",
  titleAr: "Ø§ØªØµÙ„ Ø¨Ù†Ø§ | Ø¹Ø±Ø¨ÙŠØ© Ø®Ù„ÙŠØ¬",
  description: "Get in touch with Arabia Khaleej for editorial inquiries, strategic partnerships, and regional regulatory dialogue.",
  descriptionAr: "ØªÙˆØ§ØµÙ„ Ù…Ø¹ Ø¹Ø±Ø¨ÙŠØ© Ø®Ù„ÙŠØ¬ Ù„Ù„Ø§Ø³ØªÙØ³Ø§Ø±Ø§Øª Ø§Ù„ØªØ­Ø±ÙŠØ±ÙŠØ© ÙˆØ§Ù„Ø´Ø±Ø§ÙƒØ§Øª Ø§Ù„Ø§Ø³ØªØ±Ø§ØªÙŠØ¬ÙŠØ© ÙˆØ§Ù„Ø­ÙˆØ§Ø± Ø§Ù„ØªÙ†Ø¸ÙŠÙ…ÙŠ Ø§Ù„Ø¥Ù‚Ù„ÙŠÙ…ÙŠ.",
  path: "/contact",
});

import { getT } from "@/lib/i18n-server";

export default async function ContactPage() {
  const t = await getT();
  const breadcrumbItems = [
    { name: t('home'), item: "/" },
    { name: t('contact'), item: "/contact" }
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <ContactClient />
    </>
  );
}

