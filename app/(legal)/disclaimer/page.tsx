import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Legal Disclaimer | Arabia Khaleej",
  description: "Official legal disclaimers for the Arabia Khaleej community guide.",
  path: "/disclaimer",
});

const points = [
  {
    title: "Not an Official Source",
    body: "Arabia Khaleej is an independent, unofficial hobbyist project. It is not affiliated with, endorsed by, or sponsored by any government body, ministry, municipality, or official institution in the GCC or elsewhere.",
  },
  {
    title: "Informational Purposes Only",
    body: "All content is published for general guidance. It does not constitute legal, immigration, financial, medical, or professional advice. Regulations, fees, and procedures change; always confirm critical information directly with the relevant authority.",
  },
  {
    title: "Accuracy & Completeness",
    body: "While we make reasonable efforts to ensure content is accurate at the time of writing, we cannot guarantee that every detail remains current. Arabia Khaleej makes no representation or warranty, express or implied, regarding the accuracy, completeness, or fitness for a particular purpose of any information published here.",
  },
  {
    title: "No Liability",
    body: "Arabia Khaleej and its contributors accept no liability for any loss, damage, inconvenience, or harm arising from reliance on information published on this site. Use of this site is entirely at your own risk.",
  },
  {
    title: "Trademarks & References",
    body: "Any trademarks, service marks, or government names referenced on this site remain the property of their respective owners. Their mention is purely for informational context and does not imply endorsement or affiliation.",
  },
];

export default function DisclaimerPage() {
  return (
    <>
      {/* Header */}
      <header className="mb-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold/50 mb-5">
          Legal
        </p>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-6">
          Disclaimer
        </h1>
        <div className="w-16 h-[2px] bg-gradient-to-r from-brand-gold to-transparent rounded-full mb-8" />
        <p className="text-base sm:text-lg font-light leading-relaxed opacity-70 max-w-xl">
          Please read before relying on any information you find here. We are
          honest about what we are — and what we are not.
        </p>
      </header>

      {/* Warning banner */}
      <div className="glass rounded-2xl px-8 py-6 mb-10 border border-brand-gold/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-gold/3 pointer-events-none" />
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold/70 mb-2">
          Important Notice
        </p>
        <p className="text-sm font-light leading-relaxed opacity-75">
          Arabia Khaleej is a hobbyist project — not a government portal, law
          firm, or advisory service. All information is provided{" "}
          <span className="font-semibold text-brand-gold/80">"as-is"</span> for
          guidance only. Verify everything with official sources before taking
          action.
        </p>
      </div>

      {/* Points */}
      <div className="space-y-4">
        {points.map(({ title, body }) => (
          <div
            key={title}
            className="glass rounded-xl border border-brand-gold/5 hover:border-brand-gold/15 transition-colors duration-500 px-7 py-6"
          >
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-gold/80 mb-3">
              {title}
            </h2>
            <p className="text-sm font-light leading-loose opacity-70">
              {body}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-brand-gold/10">
        <p className="text-[11px] font-light leading-relaxed opacity-40 uppercase tracking-widest text-center">
          Last reviewed — April 2026
        </p>
      </div>
    </>
  );
}
