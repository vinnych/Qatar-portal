import { getQARRates } from "@/lib/currency";

export default async function CurrencyWidget() {
  const data = await getQARRates();

  if (!data) {
    return (
      <div className="bg-white border border-stone-200 rounded-xl p-4 flex items-center justify-center text-xs text-gray-400">
        Exchange rates unavailable
      </div>
    );
  }

  return (
    <div className="bg-white border border-stone-200 rounded-xl p-3.5">
      <div className="flex items-center justify-between mb-2.5">
        <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide">1 QAR equals</span>
        <span className="text-base">🇶🇦</span>
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        {data.rates.map((rate) => (
          <div
            key={rate.code}
            className="flex items-center justify-between bg-stone-50 rounded-lg px-2.5 py-1.5 border border-stone-100"
          >
            <span className="flex items-center gap-1.5 text-xs text-gray-600">
              <span>{rate.flag}</span>
              <span className="font-medium">{rate.code}</span>
            </span>
            <span className="text-xs font-semibold text-gray-900">
              {rate.value < 1 ? rate.value.toFixed(4) : rate.value.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
