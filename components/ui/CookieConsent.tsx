"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/i18n";
import { X, ShieldCheck } from "lucide-react";

export default function CookieConsent() {
  const [show, setShow] = useState(false);
  const { isRTL, language } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem("ak_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("ak_cookie_consent", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-8 left-4 right-4 md:left-auto md:right-8 md:w-[400px] z-[150] animate-in slide-in-from-bottom-8 duration-700">
      <div className="glass rounded-[2rem] p-6 border-brand-gold/20 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
          <ShieldCheck size={120} />
        </div>
        
        <div className={`flex items-start gap-4 mb-6 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
          <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center text-accent shrink-0">
            <ShieldCheck size={20} />
          </div>
          <div>
            <h3 className="text-sm font-black serif mb-2">
              {language === 'ar' ? 'خصوصيتك تهمنا' : 'Privacy Matters'}
            </h3>
            <p className="text-[11px] font-medium text-foreground/60 leading-relaxed">
              {language === 'ar' 
                ? 'نحن نستخدم ملفات تعريف الارتباط لتحسين تجربتك وضمان أمن البيانات الإقليمية.' 
                : 'We use cookies to enhance your experience and ensure regional data security.'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={accept}
            className="flex-1 py-3 rounded-xl bg-brand-gold text-brand-obsidian text-[10px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg"
          >
            {language === 'ar' ? 'موافق' : 'Accept'}
          </button>
          <button 
            onClick={() => setShow(false)}
            className="px-4 py-3 rounded-xl glass border-brand-gold/10 text-foreground/40 hover:text-foreground transition-all"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
