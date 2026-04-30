"use client";

import { useLanguage } from "@/lib/i18n";

export default function PrivacyPage() {
  const { t, isRTL } = useLanguage();

  const sections = [
    {
      title: "No Personal Account Data",
      body: "Arabia Khaleej does not require user accounts or sign-up flows. We do not store or process personally identifiable information (PII) like names or addresses in our internal databases.",
    },
    {
      title: "Cookies and Advertising",
      body: "We use cookies to improve your experience and serve relevant advertisements through Google AdSense. Google uses cookies to serve ads based on a user's previous visits to this website or other websites. You may opt out of personalized advertising by visiting Google's Ads Settings.",
    },
    {
      title: "Third-Party Partners",
      body: "We partner with Google AdSense to provide regional advertising. These third-party vendors use cookies to serve ads based on your interests. We also link to official government portals which have their own privacy policies.",
    },
    {
      title: "Server Logs",
      body: "Standard web server infrastructure may retain IP-level access logs for security and uptime monitoring. These logs are rotated regularly and are not used for individual user profiling.",
    },
    {
      title: "Transparency & Control",
      body: "You can control or delete cookies through your browser settings. By using this site, you consent to our use of cookies and third-party partners as described in this policy.",
    },
    {
      title: "Changes to This Policy",
      body: "We may update this policy to reflect changes in our services or legal requirements. Material changes will be reflected here with a revised date.",
    },
  ];

  return (
    <div className={isRTL ? 'font-serif-ar' : ''}>
      {/* Header */}
      <header className={`mb-16 ${isRTL ? 'text-right' : ''}`}>
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold/50 mb-5">
          {t('legal')}
        </p>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-6">
          {t('privacyPolicy')}
        </h1>
        <div className={`w-16 h-[2px] bg-gradient-to-r ${isRTL ? 'from-transparent to-brand-gold mr-auto ml-0' : 'from-brand-gold to-transparent'} rounded-full mb-8`} />
        <p className={`text-base sm:text-lg font-light leading-relaxed opacity-70 max-w-xl ${isRTL ? 'text-right' : ''}`}>
          {isRTL 
            ? "لقد بنينا عربية خليج لتُقرأ، لا لتُحصد. خصوصيتك ليست ميزة - إنها وضع افتراضي."
            : "We built Arabia Khaleej to be read, not to harvest. Your privacy is not a feature — it is a default."
          }
        </p>
      </header>

      {/* Privacy-first badge */}
      <div className={`glass rounded-2xl px-8 py-6 mb-10 border border-brand-gold/15 flex ${isRTL ? 'flex-row-reverse text-right' : ''} items-center gap-5`}>
        <div className="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center flex-shrink-0">
          <div className="w-3 h-3 rounded-full bg-brand-gold/80" />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-1">
            {isRTL ? 'الشفافية والخصوصية' : 'Transparency & Privacy'}
          </p>
          <p className="text-sm font-light opacity-70 leading-relaxed">
            {isRTL ? 'نحن نستخدم كوكيز الإعلانات لتقديم محتوى ذو صلة مع الحفاظ على سرية هويتك.' : 'We use advertising cookies to provide relevant content while maintaining your anonymity.'}
          </p>
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-3">
        {sections.map(({ title, body }, i) => (
          <details
            key={title}
            className="group glass rounded-xl border border-brand-gold/5 hover:border-brand-gold/15 transition-colors duration-500 overflow-hidden"
            open
          >
            <summary className={`flex ${isRTL ? 'flex-row-reverse' : ''} items-center gap-4 px-6 py-5 cursor-pointer list-none select-none`}>
              <span className="text-[10px] font-bold text-brand-gold/40 w-5 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className={`text-sm font-bold uppercase tracking-widest flex-grow ${isRTL ? 'text-right' : ''}`}>
                {title}
              </span>
              <span className="text-brand-gold/40 text-xs group-open:rotate-180 transition-transform duration-300">
                ▾
              </span>
            </summary>
            <p className={`px-6 pb-5 text-sm font-light leading-loose opacity-70 border-t border-brand-gold/5 pt-4 ${isRTL ? 'mr-9 text-right' : 'ml-9'}`}>
              {body}
            </p>
          </details>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-brand-gold/10">
        <p className="text-[11px] font-light leading-relaxed opacity-40 uppercase tracking-widest text-center">
          {t('lastReviewed')} — April 2026
        </p>
      </div>
    </div>
  );
}
