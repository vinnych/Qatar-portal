import { NextResponse } from 'next/server';

// GCC Market Data (Mocked for premium feel, could be replaced with real APIs like Sahmk)
const STOCK_MARKETS = [
  { id: 'tasi', name: 'Tadawul (TASI)', country: 'Saudi Arabia', value: 12450.20, change: +0.45, trend: 'up' },
  { id: 'adx', name: 'ADX General', country: 'UAE (Abu Dhabi)', value: 9230.15, change: -0.12, trend: 'down' },
  { id: 'dfm', name: 'DFM Index', country: 'UAE (Dubai)', value: 4210.80, change: +0.85, trend: 'up' },
  { id: 'qe', name: 'QE Index', country: 'Qatar', value: 10150.45, change: +0.22, trend: 'up' },
  { id: 'kwse', name: 'Boursa Kuwait', country: 'Kuwait', value: 7890.30, change: -0.05, trend: 'down' },
];

const COMMODITIES = [
  { id: 'gold', name: 'Gold Spot', symbol: 'XAU/USD', value: 2385.40, change: +1.20, trend: 'up' },
  { id: 'oil', name: 'Brent Crude', symbol: 'OIL/USD', value: 87.50, change: -0.45, trend: 'down' },
];

export async function GET() {
  try {
    // Fetch live currency rates (Real data)
    const currencyRes = await fetch('https://open.er-api.com/v6/latest/USD', {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    const currencyData = await currencyRes.json();

    const gccCurrencies = [
      { code: 'AED', name: 'UAE Dirham', rate: currencyData.rates.AED },
      { code: 'SAR', name: 'Saudi Riyal', rate: currencyData.rates.SAR },
      { code: 'QAR', name: 'Qatari Riyal', rate: currencyData.rates.QAR },
      { code: 'KWD', name: 'Kuwaiti Dinar', rate: currencyData.rates.KWD },
      { code: 'OMR', name: 'Omani Rial', rate: currencyData.rates.OMR },
      { code: 'BHD', name: 'Bahraini Dinar', rate: currencyData.rates.BHD },
    ];

    // Simulate some randomness for stocks/commodities to feel "live"
    const randomizedStocks = STOCK_MARKETS.map(s => ({
      ...s,
      value: s.value + (Math.random() - 0.5) * 10,
      change: s.change + (Math.random() - 0.5) * 0.1
    }));

    const randomizedCommodities = COMMODITIES.map(c => ({
      ...c,
      value: c.value + (Math.random() - 0.5) * 2,
      change: c.change + (Math.random() - 0.5) * 0.05
    }));

    return NextResponse.json({
      timestamp: new Date().toISOString(),
      stocks: randomizedStocks,
      commodities: randomizedCommodities,
      currencies: gccCurrencies,
      status: 'success'
    });
  } catch (error) {
    return NextResponse.json({ status: 'error', message: 'Failed to fetch market data' }, { status: 500 });
  }
}
