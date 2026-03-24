import { getPrayerTimes, getMonthlyPrayerTimes } from "@/lib/prayer";
import PrayerSelector from "@/components/PrayerSelector";
import { safeJsonLd } from "@/lib/utils";
import { pageMeta, SITE_URL } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Prayer Times — Doha, Mecca, Dubai & 35 Cities | Qatar Portal",
  description: "Accurate Fajr, Sunrise, Dhuhr, Asr, Maghrib and Isha prayer times for Doha and 35+ Muslim cities worldwide — today and full monthly calendar.",
  path: "/prayer",
  keywords: ["Doha prayer times", "Qatar prayer times today", "Fajr time Doha", "Isha time Qatar", `prayer times ${new Date().getFullYear()} Qatar`, "salah times Doha", "Mecca prayer times", "Dubai prayer times", "Muslim prayer times"],
  ogTitle: "Prayer Times for Muslim Countries — Doha, Mecca, Dubai | Qatar Portal",
  ogDescription: "Accurate Fajr, Dhuhr, Asr, Maghrib and Isha prayer times for Doha and 35+ Muslim cities worldwide.",
});

export default async function PrayerPage() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;

  let today = null;
  let calendar: Awaited<ReturnType<typeof getMonthlyPrayerTimes>> = [];

  try {
    [today, calendar] = await Promise.all([
      getPrayerTimes(),
      getMonthlyPrayerTimes(year, month),
    ]);
  } catch {
    /* show error state below */
  }

  const jsonLd = today
    ? {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: `Doha Prayer Times — ${today.date}`,
        url: `${SITE_URL}/prayer`,
        description: `Fajr: ${today.Fajr}, Dhuhr: ${today.Dhuhr}, Asr: ${today.Asr}, Maghrib: ${today.Maghrib}, Isha: ${today.Isha}`,
        inLanguage: "en",
        isPartOf: { "@type": "WebSite", name: "Qatar Portal", url: SITE_URL },
        spatialCoverage: {
          "@type": "Place",
          "name": "Doha, Qatar",
          "geo": { "@type": "GeoCoordinates", "latitude": 25.2854, "longitude": 51.5310 },
          "address": { "@type": "PostalAddress", "addressLocality": "Doha", "addressCountry": "QA" },
        },
      }
    : null;

  if (!today) {
    return <p className="text-red-500">Could not load prayer times. Please try again later.</p>;
  }

  return (
    <div>
      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "Prayer Times", item: `${SITE_URL}/prayer` }] }) }} />
      <h1 className="font-newsreader text-xl font-bold text-on-surface mb-2">Prayer Times — Doha, Mecca, Dubai &amp; More</h1>
      <PrayerSelector defaultTimes={today} defaultCalendar={calendar} />
    </div>
  );
}
