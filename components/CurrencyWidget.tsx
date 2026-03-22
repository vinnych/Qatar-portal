import { getQARRates } from "@/lib/currency";
import { TrendingUp } from "lucide-react";

export default async function CurrencyWidget() {
  const data = await getQARRates();

  if (!data) {
    return (
      <div className="bg-white ring-1 ring-stone-900/5 shadow-ambient rounded-xl p-4 flex items-center justify-center text-xs text-gray-400">
        Exchange rates unavailable
      </div>
    );
  }

  return (
    <div className="bg-white ring-1 ring-stone-900/5 shadow-ambient rounded-xl p-3 sm:p-4">
      <div className="mb-2">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1"><TrendingUp size={10} /> QAR</span>
      </div>
      <div className="flex flex-col gap-0.5">
        {data.rates.map((rate) => (
          <div
            key={rate.code}
            className="flex items-center justify-between px-1.5 py-1 rounded-lg hover:bg-stone-50 transition-colors"
          >
            <span className="text-[11px] font-semibold text-gray-700">{rate.code}</span>
            <span className="text-[11px] font-bold text-gray-900 tabular-nums">
              {rate.value < 1 ? rate.value.toFixed(4) : rate.value.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
