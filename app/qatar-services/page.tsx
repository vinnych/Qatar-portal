import { pageMeta, SITE_URL } from "@/lib/seo";
import { safeJsonLd } from "@/lib/utils";

export const metadata = pageMeta({
  title: "Qatar Government Services & eServices Portal | Qatar Portal",
  description:
    "Complete guide to Qatar's official government portals: Hukoomi, MOI, MOFA, Dhareeba and more. Step-by-step instructions for QID, visa and business applications.",
  path: "/qatar-services",
  keywords: [
    "Qatar eservices",
    "Hukoomi portal",
    "MOI Qatar",
    "Qatar QID application",
    "Metrash2",
    "Qatar government online services",
    "Qatar residency permit",
    "Dhareeba tax Qatar",
  ],
});

const PORTALS = [
  {
    icon: "🏛️",
    name: "Hukoomi",
    url: "https://hukoomi.gov.qa/",
    desc: "Central government portal with 500+ e-services covering residency, health, education, business and more.",
    app: "Hukoomi app",
    note: "Support: 109 (Qatar) · +974 44069999",
  },
  {
    icon: "🪪",
    name: "Ministry of Interior (MOI)",
    url: "https://portal.moi.gov.qa/",
    desc: "Residency permits, Qatar ID, visas, traffic fines, vehicle registration and border affairs.",
    app: "Metrash2",
  },
  {
    icon: "🌐",
    name: "Ministry of Foreign Affairs (MOFA)",
    url: "https://mofa.gov.qa/",
    desc: "Visa information, document attestation, consular services and travel advisories.",
  },
  {
    icon: "🏥",
    name: "Ministry of Public Health (MOPH)",
    url: "https://moph.gov.qa/",
    desc: "Health regulations, medical licensing, public health campaigns and vaccination records.",
    app: "Nar'aakom",
  },
  {
    icon: "🏢",
    name: "Ministry of Commerce & Industry (MOCI)",
    url: "https://www.moci.gov.qa/",
    desc: "Business registration, trade licences, consumer protection and commercial regulations.",
  },
  {
    icon: "👷",
    name: "Ministry of Labour (MADLSA)",
    url: "https://www.madlsa.gov.qa/",
    desc: "Labour law compliance, employment contracts, worker welfare and dispute resolution.",
  },
  {
    icon: "💰",
    name: "General Tax Authority (Dhareeba)",
    url: "https://www.dhareeba.gov.qa/",
    desc: "Tax registration, e-filing, VAT and corporate tax compliance for businesses in Qatar.",
  },
  {
    icon: "✈️",
    name: "Hayya Portal",
    url: "https://www.hayya.qa/",
    desc: "Unified platform for visitor visas, event attendance and entry permits.",
  },
  {
    icon: "📋",
    name: "Government Tenders (Monaqasat)",
    url: "https://monaqasat.qtenders.gov.qa/",
    desc: "Official government procurement portal for tenders, bids and public contracts.",
  },
  {
    icon: "📮",
    name: "Qatar Post (Q-Post)",
    url: "https://qpost.qa/",
    desc: "Mail delivery, parcel tracking, PO boxes and courier services across Qatar.",
  },
  {
    icon: "⚡",
    name: "Kahramaa",
    url: "https://www.km.qa/",
    desc: "Water and electricity connections, bill payment, outage reports and conservation programmes.",
    note: "Helpline: 991",
  },
  {
    icon: "📡",
    name: "Communications Regulatory Authority (CRA)",
    url: "https://www.cra.gov.qa/",
    desc: "ICT regulations, spectrum management, equipment type-approval and consumer telecom rights.",
  },
];

const QID_STEPS = [
  "Your employer (sponsor) submits the residency permit (RP) application via the MOI portal or the Metrash2 app.",
  "Undergo a medical fitness examination at a Ministry-approved health centre and obtain clearance.",
  "Visit an MOI service centre or authorised typing centre for biometric data capture (fingerprints and photo).",
  "Pay the applicable fees online through Hukoomi, the MOI portal, or Metrash2.",
  "Collect your Qatar ID from the MOI service centre, or arrange delivery through Q-Post.",
];

const CONTACTS = [
  { service: "Emergency (Police/Ambulance/Fire)", number: "999" },
  { service: "Hukoomi Support (inside Qatar)", number: "109" },
  { service: "Hukoomi Support (outside Qatar)", number: "+974 44069999" },
  { service: "Kahramaa (Utilities)", number: "991" },
  { service: "Hamad Medical Corporation (HMC)", number: "+974 4439 5777" },
  { service: "Local Directory", number: "180" },
];

const FAQS = [
  {
    q: "What is Hukoomi?",
    a: "Hukoomi (حكومي) is Qatar's official e-government portal, aggregating over 500 digital services from multiple ministries in one place. You can access it at hukoomi.gov.qa or via the Hukoomi mobile app.",
  },
  {
    q: "What is Metrash2?",
    a: "Metrash2 is the official mobile app of the Ministry of Interior (MOI). It lets Qatar residents manage residency permits, report issues, pay fines, renew vehicle registrations and access dozens of MOI services without visiting a service centre.",
  },
  {
    q: "Can I apply for a Qatar ID (QID) without my employer?",
    a: "No. The residency permit — which leads to a QID — must be sponsored and initiated by your employer (or family sponsor) through the MOI portal. The individual applicant cannot submit this independently.",
  },
  {
    q: "What documents are typically required for residency applications?",
    a: "Generally: a valid passport (with at least 6 months validity), passport-size photographs, a medical fitness certificate from an approved centre, a copy of your employment contract, and any educational certificates your employer requires. Always verify the current checklist on the MOI portal as requirements change.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Qatar Government Services & eServices Portal",
  description:
    "Guide to Qatar's official government portals: Hukoomi, MOI, MOFA, Dhareeba and more, with step-by-step application instructions.",
  url: `${SITE_URL}/qatar-services`,
  inLanguage: "en",
  isPartOf: { "@type": "WebSite", name: "Qatar Portal", url: SITE_URL },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Qatar Government Services", item: `${SITE_URL}/qatar-services` },
  ],
};

export default function QatarServicesPage() {
  return (
    <div className="w-full">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbLd) }} />

      {/* Hero */}
      <h1 className="font-newsreader text-xl font-bold text-on-surface mb-2">
        Qatar Government Services
      </h1>
      <p className="text-xs text-gray-600 mb-6 leading-relaxed max-w-2xl">
        A directory of Qatar's official government portals and e-service platforms, with step-by-step
        guidance for common applications such as Qatar ID, residency permits and business registration.
        All links open the official government website in a new tab.
      </p>

      {/* Official Portals */}
      <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-3">
        Official Government Portals
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
        {PORTALS.map(({ icon, name, url, desc, app, note }) => (
          <div
            key={url}
            className="bg-white rounded-xl ring-1 ring-stone-900/5 shadow-ambient hover:shadow-ambient-hover transition-shadow p-4 flex flex-col"
          >
            <span className="text-2xl mb-2" aria-hidden="true">{icon}</span>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-xs font-semibold text-primary hover:underline leading-snug"
            >
              {name} ↗
            </a>
            <p className="text-[11px] text-gray-600 mt-1.5 leading-relaxed flex-grow">{desc}</p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {app && (
                <span className="text-[10px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full font-medium">
                  App: {app}
                </span>
              )}
              {note && (
                <span className="text-[10px] bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full font-medium">
                  {note}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* QID Step-by-Step */}
      <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-3">
        How to Apply for a Qatar ID (QID) — Example Guide
      </p>
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
        <p className="text-xs text-amber-800">
          <span className="font-semibold">Note:</span> This is a general guide. Steps and requirements
          change — always verify the current process on the{" "}
          <a
            href="https://portal.moi.gov.qa/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="underline font-medium"
          >
            MOI portal
          </a>{" "}
          or via Metrash2 before applying.
        </p>
      </div>
      <ol className="space-y-3 mb-8">
        {QID_STEPS.map((step, i) => (
          <li key={i} className="flex gap-3 items-start">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 text-amber-800 text-[11px] font-bold flex items-center justify-center mt-0.5">
              {i + 1}
            </span>
            <p className="text-xs text-gray-700 leading-relaxed">{step}</p>
          </li>
        ))}
      </ol>

      {/* Contacts */}
      <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-3">
        Essential Contacts
      </p>
      <div className="bg-white rounded-xl ring-1 ring-stone-900/5 shadow-ambient overflow-hidden mb-8">
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-stone-50 border-b border-stone-100">
              <th className="px-4 py-2.5 text-left font-semibold text-gray-700">Service</th>
              <th className="px-4 py-2.5 text-left font-semibold text-gray-700">Number</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {CONTACTS.map(({ service, number }) => (
              <tr key={service} className="hover:bg-stone-50 transition-colors">
                <td className="px-4 py-2.5 text-gray-700">{service}</td>
                <td className="px-4 py-2.5 font-mono font-semibold text-gray-900">{number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* FAQ */}
      <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-3">
        Frequently Asked Questions
      </p>
      <div className="space-y-2 mb-8">
        {FAQS.map(({ q, a }) => (
          <details
            key={q}
            suppressHydrationWarning
            className="bg-white rounded-xl ring-1 ring-stone-900/5 shadow-ambient"
          >
            <summary className="min-h-[44px] flex items-center px-4 text-xs font-semibold text-gray-800 cursor-pointer list-none">
              {q}
            </summary>
            <p className="px-4 pb-4 text-[11px] text-gray-600 leading-relaxed">{a}</p>
          </details>
        ))}
      </div>

      {/* Related Links */}
      <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-3">
        Related Guides
      </p>
      <ul className="space-y-2 text-xs">
        {[
          { href: "/qatar-labour-law", label: "Qatar Labour Law" },
          { href: "/qatar-visa-requirements", label: "Qatar Visa Requirements" },
          { href: "/work-in-qatar", label: "Work in Qatar" },
        ].map(({ href, label }) => (
          <li key={href}>
            <a href={href} className="text-primary hover:underline font-medium">
              {label} →
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
