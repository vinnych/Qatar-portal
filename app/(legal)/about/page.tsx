import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About Arabia Khaleej | Independent Community Guide",
  description: "Learn more about the Arabia Khaleej independent hobby project.",
  path: "/about",
});

const pillars = [
  {
    label: "Independence",
    body:
      "Wholly unaffiliated with any government, corporation, or official body. Our only obligation is to the reader.",
  },
  {
    label: "Simplicity",
    body:
      "Speed and clarity over noise. Every word earns its place; every page loads in an instant.",
  },
  {
    label: "Transparency",
    body:
      "We are a hobbyist project. We say so plainly, and we link to authoritative sources so you can verify everything.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <header className="mb-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold/50 mb-5">
          About
        </p>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-6">
          Arabia Khaleej
        </h1>
        <div className="w-16 h-[2px] bg-gradient-to-r from-brand-gold to-transparent rounded-full mb-8" />
        <p className="text-base sm:text-lg font-light leading-relaxed opacity-70 max-w-xl">
          An independent, unofficial hobbyist project dedicated to providing
          static informational guides for the GCC region — fast, honest, and
          free.
        </p>
      </header>

      {/* Mission */}
      <section className="glass rounded-2xl p-8 sm:p-10 mb-8 border border-brand-gold/8">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold/60 mb-4">
          Mission
        </h2>
        <p className="text-sm sm:text-base font-light leading-loose opacity-80">
          Arabia Khaleej exists to bridge the gap between curious visitors and
          the wealth of official information available across the GCC. We
          aggregate, simplify, and surface what matters — then point you back to
          the authoritative source. We build the bridge; you walk across it.
        </p>
      </section>

      {/* Pillars */}
      <section className="mb-8">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold/50 mb-6">
          Our Pillars
        </h2>
        <div className="grid gap-4">
          {pillars.map(({ label, body }) => (
            <div
              key={label}
              className="group flex gap-5 items-start glass rounded-xl px-6 py-5 border border-brand-gold/5 hover:border-brand-gold/20 transition-colors duration-500"
            >
              <div className="mt-[3px] w-[6px] h-[6px] rounded-full bg-brand-gold/60 flex-shrink-0 group-hover:bg-brand-gold transition-colors duration-300" />
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-1">
                  {label}
                </p>
                <p className="text-sm font-light leading-relaxed opacity-70">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer note */}
      <div className="mt-12 pt-8 border-t border-brand-gold/10">
        <p className="text-[11px] font-light leading-relaxed opacity-40 uppercase tracking-widest text-center">
          Arabia Khaleej is a passion project — not an official source.
          <br />
          Always verify information with the relevant government authority.
        </p>
      </div>
    </>
  );
}
