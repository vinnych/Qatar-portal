export const COUNTRY_TO_CURRENCY: Record<string, string> = {
  'QA': 'QAR',
  'AE': 'AED',
  'SA': 'SAR',
  'KW': 'KWD',
  'OM': 'OMR',
  'BH': 'BHD',
};

export const DEFAULT_CURRENCY = 'AED';

export async function getExchangeRates() {
  try {
    const res = await fetch('/api/exchange-rates');
    const data = await res.json();
    if (data.status === 'success') {
      return data.rates;
    }
  } catch (e) {
    console.error('Failed to fetch exchange rates', e);
  }
  return null;
}

export function convertPrice(price: number, from: string, to: string, rates: Record<string, number> | null): number {
  if (!rates || !rates[from] || !rates[to]) return price;
  // (Price / FromRate) * ToRate = Converted Price
  // Note: Most rates in the API are relative to USD
  return (price / rates[from]) * rates[to];
}

export function formatPrice(price: number, currency: string) {
  const options: Intl.NumberFormatOptions = {
    minimumFractionDigits: currency === 'KWD' || currency === 'BHD' || currency === 'OMR' ? 3 : 2,
    maximumFractionDigits: currency === 'KWD' || currency === 'BHD' || currency === 'OMR' ? 3 : 2,
  };
  
  // For large numbers, round to nearest integer if not KWD/BHD/OMR
  if (price > 1000 && !['KWD', 'BHD', 'OMR'].includes(currency)) {
    options.minimumFractionDigits = 0;
    options.maximumFractionDigits = 0;
  }

  return price.toLocaleString(undefined, options);
}
