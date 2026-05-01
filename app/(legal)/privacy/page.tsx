import { pageMeta } from "@/lib/seo";
import PrivacyClient from "./PrivacyClient";
import StructuredData from "@/components/seo/StructuredData";
import { SITE_URL } from "@/lib/seo";

import { BreadcrumbSchema } from "@/components/seo/StructuredData";

export const metadata = pageMeta({
  title: "Privacy Policy | Arabia Khaleej",
  titleAr: "Ø³ÙŠØ§Ø³Ø© Ø§Ù„Ø®ØµÙˆØµÙŠØ© | Ø¹Ø±Ø¨ÙŠØ© Ø®Ù„ÙŠØ¬",
  description: "Transparency regarding our use of cookies, Google AdSense, and analytics to provide a premium, secure regional experience.",
  descriptionAr: "Ø§Ù„Ø´ÙØ§ÙÙŠØ© Ø¨Ø´Ø£Ù† Ø§Ø³ØªØ®Ø¯Ø§Ù…Ù†Ø§ Ù„Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø· Ùˆ Google AdSense ÙˆØ§Ù„ØªØ­Ù„ÙŠÙ„Ø§Øª Ù„ØªÙˆÙÙŠØ± ØªØ¬Ø±Ø¨Ø© Ø¥Ù‚Ù„ÙŠÙ…ÙŠØ© Ù…ØªÙ…ÙŠØ²Ø© ÙˆØ¢Ù…Ù†Ø©.",
  path: "/privacy",
});

import { getT } from "@/lib/i18n-server";

export default async function Page() {
  const t = await getT();
  const breadcrumbItems = [
    { name: t('home'), item: "/" },
    { name: t('privacy'), item: "/privacy" }
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <PrivacyClient />
    </>
  );
}


