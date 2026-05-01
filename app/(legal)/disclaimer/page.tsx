import { pageMeta } from "@/lib/seo";
import DisclaimerClient from "./DisclaimerClient";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";

export const metadata = pageMeta({
  title: "Disclaimer | Arabia Khaleej",
  titleAr: "Ø¥Ø®Ù„Ø§Ø¡ Ø§Ù„Ù…Ø³Ø¤ÙˆÙ„ÙŠØ© | Ø¹Ø±Ø¨ÙŠØ© Ø®Ù„ÙŠØ¬",
  description:
    "Official disclaimer regarding the nature of information provided by Arabia Khaleej. High-fidelity regional insights provided for convenience.",
  descriptionAr:
    "Ø¥Ø®Ù„Ø§Ø¡ Ù…Ø³Ø¤ÙˆÙ„ÙŠØ© Ø±Ø³Ù…ÙŠ Ø¨Ø´Ø£Ù† Ø·Ø¨ÙŠØ¹Ø© Ø§Ù„Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø§Ù„ØªÙŠ ØªÙ‚Ø¯Ù…Ù‡Ø§ Ø¹Ø±Ø¨ÙŠØ© Ø®Ù„ÙŠØ¬. Ø±Ø¤Ù‰ Ø¥Ù‚Ù„ÙŠÙ…ÙŠØ© Ø¹Ø§Ù„ÙŠØ© Ø§Ù„Ø¯Ù‚Ø© Ù…Ù‚Ø¯Ù…Ø© Ù„Ù„ØªØ³Ù‡ÙŠÙ„.",
  path: "/disclaimer",
});

import { getT } from "@/lib/i18n-server";

export default async function Page() {
  const t = await getT();
  const breadcrumbItems = [
    { name: t('home'), item: "/" },
    { name: t('disclaimer'), item: "/disclaimer" },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <DisclaimerClient />
    </>
  );
}

