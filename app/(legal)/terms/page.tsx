import { pageMeta } from "@/lib/seo";
import TermsClient from "./TermsClient";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";

export const metadata = pageMeta({
  title: "Terms & Conditions | Arabia Khaleej",
  titleAr: "Ø§Ù„Ø´Ø±ÙˆØ· ÙˆØ§Ù„Ø£Ø­ÙƒØ§Ù… | Ø¹Ø±Ø¨ÙŠØ© Ø®Ù„ÙŠØ¬",
  description:
    "Official terms of service for the Arabia Khaleej regional platform. Understanding our standards and your usage of the GCC Standard.",
  descriptionAr:
    "Ø§Ù„Ø´Ø±ÙˆØ· Ø§Ù„Ø±Ø³Ù…ÙŠØ© Ù„Ø®Ø¯Ù…Ø© Ù…Ù†ØµØ© Ø¹Ø±Ø¨ÙŠØ© Ø®Ù„ÙŠØ¬ Ø§Ù„Ø¥Ù‚Ù„ÙŠÙ…ÙŠØ©. ÙÙ‡Ù… Ù…Ø¹Ø§ÙŠÙŠØ±Ù†Ø§ ÙˆØ§Ø³ØªØ®Ø¯Ø§Ù…Ùƒ Ù„Ù„Ù…Ø¹ÙŠØ§Ø± Ø§Ù„Ø®Ù„ÙŠØ¬ÙŠ.",
  path: "/terms",
});

import { getT } from "@/lib/i18n-server";

export default async function Page() {
  const t = await getT();
  const breadcrumbItems = [
    { name: t('home'), item: "/" },
    { name: t('terms'), item: "/terms" },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <TermsClient />
    </>
  );
}

