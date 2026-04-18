"use client";

import { useEffect, useState } from "react";
import { X, Calendar as CalendarIcon } from "lucide-react";

interface HijriDate {
  gregorian: string;
  hijri: string;
  day: string;
}

export default function HijriCalendar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [calendar, setCalendar] = useState<HijriDate[]>([]);

  useEffect(() => {
    // We use the local Intl API which is highly reliable and avoids network failures
    // "islamic-uma" is the Umm Al-Qura calendar used in the GCC
    const gregFormatter = new Intl.DateTimeFormat("en-US", { day: "numeric", month: "short" });
    const dayFormatter = new Intl.DateTimeFormat("en-US", { weekday: "long" });
    const hijriFormatter = new Intl.DateTimeFormat("en-u-ca-islamic-uma-nu-latn", {
      day: "numeric", month: "long", year: "numeric",
    });

    const dates: HijriDate[] = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      dates.push({
        day: dayFormatter.format(d),
        gregorian: gregFormatter.format(d),
        hijri: hijriFormatter.format(d),
      });
    }
    setCalendar(dates);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-xl glass p-8 sm:p-10 rounded-[3rem] border-brand-gold/30 shadow-2xl animate-in zoom-in duration-500">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-accent transition-all hover:rotate-90"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 rounded-2xl bg-brand-gold/10 text-accent">
            <CalendarIcon size={24} />
          </div>
          <div>
            <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-accent mb-1">Calendar</h3>
            <p className="text-xl font-black serif text-foreground">7-Day Hijri Schedule</p>
          </div>
        </div>

        <div className="space-y-3">
          {calendar.map((date, idx) => (
            <div 
              key={idx} 
              className={`flex items-center justify-between p-5 rounded-3xl border transition-all hover:scale-[1.02] ${
                idx === 0 
                ? "bg-brand-gold/10 border-brand-gold/30" 
                : "bg-white/5 dark:bg-brand-obsidian/20 border-brand-gold/10"
              }`}
            >
              <div className="flex flex-col">
                <span className={`text-[10px] font-black uppercase tracking-widest ${idx === 0 ? "text-accent" : "text-foreground/40"}`}>
                  {date.day} {idx === 0 && "(Today)"}
                </span>
                <span className="text-sm font-bold text-foreground/80">{date.gregorian}</span>
              </div>
              <div className="text-right">
                <p className="text-lg font-black serif text-brand-gold">{date.hijri}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-[10px] text-foreground/30 font-bold uppercase tracking-[0.3em]">
          Umm Al-Qura (Unified) Islamic Calendar
        </p>
      </div>
    </div>
  );
}
