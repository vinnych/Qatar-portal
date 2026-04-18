"use client";

import { useState, useEffect } from "react";
import { Coins, TrendingUp, TrendingDown, ArrowLeftRight, Globe } from "lucide-react";
import FinanceTicker from "@/components/FinanceTicker";

export default function FinanceClient() {
  const [rates, setRates] = useState<any>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    async function fetchRates() {
      try {
        const res = await fetch("https://open.er-api.com/v6/latest/USD");
        const data = await res.json();
        if (data && data.rates) {
          setRates(data.rates);
        }
      } catch (e) {
        console.log("Finance Page API failed");
      }
    }
    fetchRates();
  }, []);

  if (!mounted) return null;

  const gccCurrencies = [
    { code: "AED", name: "UAE Dirham", country: "United Arab Emirates", flag: "🇦🇪" },
    { code: "SAR", name: "Saudi Riyal", country: "Saudi Arabia", flag: "🇸🇦" },
    { code: "KWD", name: "Kuwaiti Dinar", country: "Kuwait", flag: "🇰🇼" },
    { code: "QAR", name: "Qatari Riyal", country: "Qatar", flag: "🇶🇦" },
    { code: "OMR", name: "Omani Rial", country: "Oman", flag: "🇴🇲" },
    { code: "BHD", name: "Bahraini Dinar", country: "Bahrain", flag: "🇧🇭" },
  ];

  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-20 pb-20 px-4 relative">
      {/* Header */}
      <div className="mb-16 animate-in fade-in slide-in-from-top-4 duration-1000">
        <h1 className="sr-only">GCC Finance, Market Insights & Currency Exchange Rates</h1>
        <p className="text-xs tracking-[0.6em] uppercase font-bold text-accent mb-4 text-center">Market Insights</p>
        <p className="text-2xl font-black serif text-foreground text-center" aria-hidden="true">GCC Finance & Currency</p>
      </div>


      <div className="w-full max-w-5xl space-y-8">
        {/* Main Ticker - Repurposed as a Featured Bar */}
        <FinanceTicker />

        {/* Detailed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          {gccCurrencies.map((curr) => (
            <div key={curr.code} className="glass p-8 rounded-[2.5rem] border-brand-gold/15 hover:border-brand-gold/40 transition-all group">
              <div className="flex justify-between items-start mb-6">
                <span className="text-3xl">{curr.flag}</span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent px-3 py-1 bg-accent/5 rounded-full border border-accent/10">
                  {curr.code}
                </span>
              </div>
              <h2 className="text-lg font-black serif mb-1">{curr.name}</h2>
              <p className="text-[10px] uppercase font-bold tracking-widest text-foreground/40 mb-6">{curr.country}</p>
              
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[9px] uppercase font-bold tracking-tighter text-foreground/30 mb-1">vs 1 USD</p>
                  <p className="text-3xl font-black tabular-nums tracking-tighter">
                    {rates ? rates[curr.code]?.toFixed(3) : "..."}
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-green-600 dark:text-green-400 text-xs font-bold flex items-center gap-1">
                    <TrendingUp size={12} />
                    0.00%
                  </span>
                  <span className="text-[9px] uppercase font-bold text-foreground/20 tracking-widest">Pegged</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="text-center pt-12">
          <p className="text-[11px] text-foreground/50 font-bold uppercase tracking-[0.4em] max-w-lg mx-auto leading-loose">
            Market data provided for informational purposes. 
            Verification with local financial institutions is recommended.
          </p>
        </div>
      </div>

      {/* Back to Home */}
      <div className="mt-20">
        <a href="/" className="text-[11px] font-bold uppercase tracking-[0.4em] text-accent hover:tracking-[0.6em] transition-all">
          ← Home
        </a>
      </div>
    </div>
  );
}
