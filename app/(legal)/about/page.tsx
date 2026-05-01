import { pageMeta } from "@/lib/seo";
import AboutClient from "./AboutClient";
import { BreadcrumbSchema, WebPageSchema } from "@/components/seo/StructuredData";
import StructuredData from "@/components/seo/StructuredData";

export const metadata = pageMeta({
  title: "About Arabia Khaleej | The GCC Standard",
  titleAr: "Ø­ÙˆÙ„ Ø¹Ø±Ø¨ÙŠØ© Ø®Ù„ÙŠØ¬ | Ø§Ù„Ù…Ø¹ÙŠØ§Ø± Ø§Ù„Ø®Ù„ÙŠØ¬ÙŠ",
  description:
    "Arabia Khaleej is a premier independent digital platform for the Gulf Cooperation Council â€” providing prayer times, market data, and country guides across Qatar, UAE, Saudi Arabia, Kuwait, Oman, and Bahrain.",
  descriptionAr:
    "Ø¹Ø±Ø¨ÙŠØ© Ø®Ù„ÙŠØ¬ Ù…Ù†ØµØ© Ø±Ù‚Ù…ÙŠØ© Ù…ØªÙ…ÙŠØ²Ø© ÙˆÙ…Ø³ØªÙ‚Ù„Ø© Ù„Ø¯ÙˆÙ„ Ù…Ø¬Ù„Ø³ Ø§Ù„ØªØ¹Ø§ÙˆÙ† Ø§Ù„Ø®Ù„ÙŠØ¬ÙŠ â€” ØªÙˆÙØ± Ù…ÙˆØ§Ù‚ÙŠØª Ø§Ù„ØµÙ„Ø§Ø© ÙˆØ¨ÙŠØ§Ù†Ø§Øª Ø§Ù„Ø³ÙˆÙ‚ ÙˆØ£Ø¯Ù„Ø© Ø§Ù„Ø¯ÙˆÙ„ ÙÙŠ Ù‚Ø·Ø± ÙˆØ§Ù„Ø¥Ù…Ø§Ø±Ø§Øª ÙˆØ§Ù„Ø³Ø¹ÙˆØ¯ÙŠØ© ÙˆØ§Ù„ÙƒÙˆÙŠØª ÙˆØ¹Ù…Ø§Ù† ÙˆØ§Ù„Ø¨Ø­Ø±ÙŠÙ†.",
  path: "/about",
});

import { getT } from "@/lib/i18n-server";

export default async function Page() {
  const t = await getT();
  const breadcrumbItems = [
    { name: t('home'), item: "/" },
    { name: t('about'), item: "/about" },
  ];

  return (
    <>
      <WebPageSchema
        name="About Arabia Khaleej | The GCC Standard"
        description="Learn about Arabia Khaleej â€” the independent regional intelligence platform for the Gulf Cooperation Council."
        url="/about"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <StructuredData
        type="AboutPage"
        data={{
          name: "About Arabia Khaleej",
          alternateName: "Ø­ÙˆÙ„ Ø¹Ø±Ø¨ÙŠØ© Ø®Ù„ÙŠØ¬",
          description:
            "Arabia Khaleej is a premier independent digital platform for the Gulf Cooperation Council. Our mission: aggregate, simplify, and surface authoritative regional information â€” prayer schedules, market intelligence, and sovereign country data â€” for residents and visitors across the GCC.",
          url: "https://arabiakhaleej.com/about",
          isPartOf: { "@id": "https://arabiakhaleej.com/#website" },
          publisher: { "@id": "https://arabiakhaleej.com/#organization" },
          about: { "@id": "https://arabiakhaleej.com/#organization" },
          inLanguage: ["en", "ar"],
        }}
      />
      <AboutClient />
    </>
  );
}

