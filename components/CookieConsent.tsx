"use client";
import { useState, useEffect } from "react";
import Script from "next/script";
import Link from "next/link";

export default function CookieConsent() {
  const [consent, setConsent] = useState<boolean | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent");
    if (stored === null) {
      setVisible(true);
    } else {
      setConsent(stored === "true");
    }
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "true");
    setConsent(true);
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie-consent", "false");
    setConsent(false);
    setVisible(false);
  }

  return (
    <>
      {consent && (
        <>
          <Script
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7212871157824722"
            strategy="afterInteractive"
            crossOrigin="anonymous"
          />
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-VPREJS079K"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VPREJS079K');
          `}</Script>
        </>
      )}
      {visible && (
        <div className="fixed bottom-[72px] left-0 right-0 z-[60] md:bottom-4 md:left-4 md:right-auto md:max-w-sm bg-primary-dark text-white shadow-2xl md:rounded-xl px-4 py-3 flex flex-col gap-3">
          <p className="text-sm leading-relaxed text-qatar-sand/90">
            We use cookies for analytics and personalised ads. See our{" "}
            <Link href="/privacy" className="underline hover:text-white transition-colors">
              Privacy Policy
            </Link>
            .
          </p>
          <div className="flex gap-2">
            <button
              onClick={accept}
              className="flex-1 bg-qatar-maroon hover:bg-primary text-white text-sm font-semibold py-2 rounded-lg transition-colors"
            >
              Accept
            </button>
            <button
              onClick={decline}
              className="flex-1 border border-white/30 hover:border-white/60 text-sm py-2 rounded-lg transition-colors"
            >
              Decline
            </button>
          </div>
        </div>
      )}
    </>
  );
}
