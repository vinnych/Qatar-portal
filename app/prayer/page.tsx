import { pageMeta, SITE_NAME } from "@/lib/seo";
import PrayerClient from "@/components/PrayerClient";
import StructuredData from "@/components/StructuredData";

export const metadata = pageMeta({
  title: `Prayer Times GCC — Qatar, UAE, Saudi Arabia, Kuwait, Oman, Bahrain | ${SITE_NAME}`,
  description: "Comprehensive prayer times for all GCC countries. Accurate schedules for Doha, Dubai, Riyadh, Kuwait City, Muscat, and Manama using the Umm Al-Qura calculation method.",
  path: "/prayer",
  keywords: ["prayer times", "salat times", "adhan", "GCC", "Middle East", "Doha", "Dubai", "Riyadh", "Kuwait", "Oman", "Bahrain"],
});


export default function PrayerPage() {
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
        "name": "Prayer Times",
        "item": "https://arabiakhaleej.com/prayer"
      }
    ]
  };

  return (
    <>
      <StructuredData type="BreadcrumbList" data={breadcrumbData} />
      <PrayerClient />
    </>
  );
}

