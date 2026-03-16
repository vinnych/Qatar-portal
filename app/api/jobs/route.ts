import { NextRequest, NextResponse } from "next/server";
import { getJobs } from "@/lib/jobs";
import { checkRateLimit, getClientIp } from "@/lib/rateLimit";

export async function GET(request: NextRequest) {
  const allowed = await checkRateLimit(getClientIp(request));
  if (!allowed) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429, headers: { "Retry-After": "60" } });
  }
  try {
    const jobs = await getJobs();
    return NextResponse.json(jobs);
  } catch (err) {
    console.error("[api/jobs] error:", err instanceof Error ? err.message : err);
    return NextResponse.json({ error: "Failed to fetch jobs" }, { status: 500 });
  }
}
