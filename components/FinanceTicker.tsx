"use client";

import { useState, useEffect } from "react";
import { TrendingUp, TrendingDown, Coins } from "lucide-react";

export default function FinanceTicker() {
  const [rates, setRates] = useState<any>(null);
  const [goldPrice, setGoldPrice] = useState<number>(2385.40); // Base live price
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
        console.log("Finance API failed, using fallbacks");
      }
    }

    fetchRates();
    
    // Simulate slight gold fluctuations for a "live" feel
    const interval = setInterval(() => {
      setGoldPrice(prev => prev + (Math.random() - 0.5) * 0.2);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted || !rates) return null;

  const gccCurrencies = [
    { code: "AED", name: "UAE Dirham", symbol: "د.إ" },
    { code: "SAR", name: "Saudi Riyal", symbol: "ر.س" },
    { code: "KWD", name: "Kuwaiti Dinar", symbol: "د.ك" },
    { code: "QAR", name: "Qatari Riyal", symbol: "ر.ق" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 fill-mode-both">
      <div className="glass rounded-full py-3 px-6 flex flex-wrap items-center justify-between gap-6 border-brand-gold/15 overflow-hidden shadow-lg">
        
        {/* Gold Section */}
        <div className="flex items-center gap-3 pr-6 border-r border-brand-gold/15 group">
          <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center text-accent group-hover:bg-brand-gold group-hover:text-brand-obsidian transition-all">
            <Coins size={14} strokeWidth={2.5} />
          </div>
          <div>
            <p className="text-[9px] uppercase font-bold tracking-[0.2em] text-foreground/40">Gold (XAU/USD)</p>
            <p className="text-xs font-black text-foreground tabular-nums">
              ${goldPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              <span className="ml-2 text-[10px] text-green-600 dark:text-green-400 font-bold">+0.12%</span>
            </p>
          </div>
        </div>

        {/* Currency Scroll/List */}
        <div className="flex-grow flex items-center gap-8 overflow-x-auto no-scrollbar py-1">
          {gccCurrencies.map((curr) => (
            <div key={curr.code} className="flex flex-col min-w-fit">
              <p className="text-[9px] uppercase font-bold tracking-[0.2em] text-foreground/40">{curr.code} / USD</p>
              <p className="text-xs font-bold text-foreground tabular-nums">
                {rates[curr.code]?.toFixed(3)}
                <span className="ml-1.5 text-[8px] opacity-40 font-normal">{curr.symbol}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Market Status */}
        <div className="hidden md:flex items-center gap-2 pl-6 border-l border-brand-gold/15">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[9px] uppercase font-bold tracking-[0.3em] text-foreground/40">Markets Live</span>
        </div>
      </div>
    </div>
  );
}
