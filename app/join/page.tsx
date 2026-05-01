import { pageMeta, SITE_NAME, SITE_URL } from "@/lib/seo";
import JoinClient from "@/components/join/JoinClient";
import {
  BreadcrumbSchema,
  WebPageSchema,
  ContactPageSchema,
} from "@/components/seo/StructuredData";
import StructuredData from "@/components/seo/StructuredData";
import { getT } from "@/lib/i18n-server";

export const metadata = pageMeta({
  title: `Submit an Inquiry â€” Arabia Khaleej | ${SITE_NAME}`,
  titleAr: `Ø¥Ø±Ø³Ø§Ù„ Ø§Ø³ØªÙØ³Ø§Ø± â€” Ø¹Ø±Ø¨ÙŠØ© Ø®Ù„ÙŠØ¬ | ${SITE_NAME}`,
  description:
    "A direct channel for partnership proposals and specialised regional inquiries across the GCC. Submit your request to the Arabia Khaleej team.",
  descriptionAr:
    "Ù‚Ù†Ø§Ø© Ù…Ø¨Ø§Ø´Ø±Ø© Ù„Ù…Ù‚ØªØ±Ø­Ø§Øª Ø§Ù„Ø´Ø±Ø§ÙƒØ© ÙˆØ§Ù„Ø§Ø³ØªÙØ³Ø§Ø±Ø§Øª Ø§Ù„Ø¥Ù‚Ù„ÙŠÙ…ÙŠØ© Ø§Ù„Ù…ØªØ®ØµØµØ© ÙÙŠ Ù…Ù†Ø·Ù‚Ø© Ø§Ù„Ø®Ù„ÙŠØ¬. Ø£Ø±Ø³Ù„ Ø·Ù„Ø¨Ùƒ Ø¥Ù„Ù‰ ÙØ±ÙŠÙ‚ Ø¹Ø±Ø¨ÙŠØ© Ø®Ù„ÙŠØ¬.",
  path: "/join",
  keywords: [
    "GCC inquiry", "GCC partnership", "Arabia Khaleej contact",
    "boutique services GCC", "regional partnership",
    "Qatar business", "Saudi Arabia business", "UAE business",
    "Ø§Ø³ØªÙØ³Ø§Ø± Ø®Ù„ÙŠØ¬ÙŠ", "Ø´Ø±Ø§ÙƒØ© Ø¥Ù‚Ù„ÙŠÙ…ÙŠØ©",
  ],
});

export default async function JoinPage() {
  const t = await getT();
  const breadcrumbItems = [
    { name: t('home'), item: "/" },
    { name: t('boutiqueEnquiry'), item: "/join" },
  ];

  return (
    <>
      <WebPageSchema
        name="Submit an Inquiry â€” Arabia Khaleej"
        description="Direct inquiry channel for partnership proposals and regional inquiries across Qatar, UAE, Saudi Arabia, Kuwait, Oman, and Bahrain."
        url="/join"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ContactPageSchema />
      <StructuredData
        type="Service"
        data={{
          name: "Arabia Khaleej Direct Inquiry Channel",
          alternateName: "Ù‚Ù†Ø§Ø© Ø§Ø³ØªÙØ³Ø§Ø± Ø¹Ø±Ø¨ÙŠØ© Ø®Ù„ÙŠØ¬ Ø§Ù„Ù…Ø¨Ø§Ø´Ø±Ø©",
          description:
            "A direct channel for partnership proposals and specialised regional inquiries across all Gulf Cooperation Council member states.",
          serviceType: "Partnership & Inquiry Service",
          provider: { "@id": "https://arabiakhaleej.com/#organization" },
          areaServed: [
            { "@type": "Country", name: "Qatar" },
            { "@type": "Country", name: "Saudi Arabia" },
            { "@type": "Country", name: "United Arab Emirates" },
            { "@type": "Country", name: "Kuwait" },
            { "@type": "Country", name: "Oman" },
            { "@type": "Country", name: "Bahrain" },
          ],
          availableLanguage: [
            { "@type": "Language", name: "English" },
            { "@type": "Language", name: "Arabic", alternateName: "Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©" },
          ],
          additionalProperty: [
            { "@type": "PropertyValue", name: "Response Time", value: "Within 48 hours" },
            { "@type": "PropertyValue", name: "Channel Type", value: "Direct form submission" },
            { "@type": "PropertyValue", name: "Languages Accepted", value: "English, Arabic" },
          ],
          url: `${SITE_URL}/join`,
        }}
      />
      <JoinClient />
    </>
  );
}

