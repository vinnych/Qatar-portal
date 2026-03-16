import { NextRequest, NextResponse } from "next/server";
import { getPrayerTimes } from "@/lib/prayer";
import { checkRateLimit, getClientIp } from "@/lib/rateLimit";

export async function GET(req: NextRequest) {
  const allowed = await checkRateLimit(getClientIp(req));
  if (!allowed) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429, headers: { "Retry-After": "60" } });
  }
  const city = req.nextUrl.searchParams.get("city") || "Doha";
  const country = req.nextUrl.searchParams.get("country") || "Qatar";
  try {
    const times = await getPrayerTimes(city, country);
    return NextResponse.json(times);
  } catch (err) {
    console.error("[api/prayer] error:", err instanceof Error ? err.message : err);
    return NextResponse.json({ error: "Failed to fetch prayer times" }, { status: 500 });
  }
}
