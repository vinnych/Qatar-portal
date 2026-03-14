import { Suspense } from "react";
import PrayerTimes from "@/components/PrayerTimes";
import NewsFeed from "@/components/NewsFeed";
import JobList from "@/components/JobList";
import WeatherWidget from "@/components/WeatherWidget";
import CurrencyWidget from "@/components/CurrencyWidget";
import { safeJsonLd } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Doha Prayer Times Today — Qatar News & Jobs | Qatar Portal",
  description: "Accurate Doha prayer times for today including Fajr, Dhuhr, Asr, Maghrib and Isha. Plus latest Qatar news and job listings.",
  alternates: { canonical: "https://qatar-portal.vercel.app" },
  openGraph: {
    title: "Doha Prayer Times Today — Qatar News & Jobs | Qatar Portal",
    description: "Accurate Doha prayer times for today including Fajr, Dhuhr, Asr, Maghrib and Isha. Plus latest Qatar news and job listings.",
    url: "https://qatar-portal.vercel.app",
    siteName: "Qatar Portal",
    type: "website",
    images: [{ url: "https://qatar-portal.vercel.app/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Doha Prayer Times Today | Qatar Portal", description: "Accurate Doha prayer times for today. Plus latest Qatar news and job listings." },
};

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "name": "Doha Prayer Times Today — Qatar News & Jobs | Qatar Portal",
  "url": "https://qatar-portal.vercel.app",
  "mainEntity": [
    { "@type": "Question", "name": "What time is Fajr in Doha today?", "acceptedAnswer": { "@type": "Answer", "text": "Fajr prayer time in Doha today can be found on Qatar Portal, updated daily from the Aladhan API using the Muslim World League calculation method." } },
    { "@type": "Question", "name": "What time is Maghrib in Doha today?", "acceptedAnswer": { "@type": "Answer", "text": "Maghrib prayer time in Doha today is available on Qatar Portal, updated daily with accurate sunset-based calculation." } },
    { "@type": "Question", "name": "What are today's prayer times in Qatar?", "acceptedAnswer": { "@type": "Answer", "text": "Today's prayer times in Qatar (Fajr, Dhuhr, Asr, Maghrib, Isha) are listed on Qatar Portal's homepage and prayer page, updated daily." } },
    { "@type": "Question", "name": "Where can I find jobs in Qatar?", "acceptedAnswer": { "@type": "Answer", "text": "Qatar Portal lists the latest job vacancies in Doha and Qatar, updated daily from top Gulf job boards." } },
  ],
};

export default async function Home() {
  return (
    <div className="space-y-6 sm:space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: safeJsonLd(homeJsonLd)}} />
      {/* Prayer Times */}
      <section>
        <Suspense fallback={<div className="bg-white rounded-2xl p-6 animate-pulse h-32" />}>
          <PrayerTimes />
        </Suspense>
      </section>

      {/* Weather + Currency */}
      <div className="grid md:grid-cols-2 gap-6">
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-amber-800"><span aria-hidden="true">🌤️</span> Weather in Doha</h2>
            <a href="/weather" className="text-xs text-amber-700 hover:underline">7-day forecast →</a>
          </div>
          <Suspense fallback={<div className="bg-amber-50 rounded-2xl h-36 animate-pulse" />}>
            <WeatherWidget />
          </Suspense>
        </section>
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-rose-800"><span aria-hidden="true">💱</span> QAR Exchange Rates</h2>
            <a href="/currency" className="text-xs text-rose-700 hover:underline">All rates →</a>
          </div>
          <Suspense fallback={<div className="bg-stone-100 rounded-2xl h-36 animate-pulse" />}>
            <CurrencyWidget />
          </Suspense>
        </section>
      </div>

      {/* News + Jobs side by side on large screens */}
      <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {/* News — takes 2/3 */}
        <section className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-sky-900"><span aria-hidden="true">📰</span> Latest News</h2>
            <a href="/news" className="text-sm text-sky-700 hover:underline">View all →</a>
          </div>
          <Suspense fallback={<div className="grid gap-4 sm:grid-cols-2"><div className="bg-white rounded-xl h-32 animate-pulse" /><div className="bg-white rounded-xl h-32 animate-pulse" /></div>}>
            <NewsFeed limit={12} />
          </Suspense>
        </section>

        {/* Jobs — takes 1/3 */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-emerald-900"><span aria-hidden="true">💼</span> Jobs in Qatar</h2>
            <a href="/jobs" className="text-sm text-emerald-700 hover:underline">View all →</a>
          </div>
          <Suspense fallback={<div className="space-y-3"><div className="bg-white rounded-xl h-16 animate-pulse" /><div className="bg-white rounded-xl h-16 animate-pulse" /></div>}>
            <JobList limit={5} />
          </Suspense>
        </section>
      </div>
    </div>
  );
}
