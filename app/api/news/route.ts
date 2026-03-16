import { NextRequest, NextResponse } from "next/server";
import { getNews } from "@/lib/rss";
import { checkRateLimit, getClientIp } from "@/lib/rateLimit";

export async function GET(request: NextRequest) {
  const allowed = await checkRateLimit(getClientIp(request));
  if (!allowed) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429, headers: { "Retry-After": "60" } });
  }
  try {
    const news = await getNews();
    return NextResponse.json(news);
  } catch (err) {
    console.error("[api/news] error:", err instanceof Error ? err.message : err);
    return NextResponse.json({ error: "Failed to fetch news" }, { status: 500 });
  }
}
