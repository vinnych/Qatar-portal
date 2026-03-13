import { GoogleGenerativeAI } from "@google/generative-ai";
import { redis } from "./redis";

const apiKey = process.env.GEMINI_API_KEY;

export async function summarizeArticle(
  slug: string,
  title: string,
  snippet: string | undefined,
  source: string
): Promise<string | null> {
  // 1. Check Redis cache first
  if (redis) {
    try {
      const cached = await redis.get<string>(`news:summary:${slug}`);
      if (cached) return cached;
    } catch { /* fall through */ }
  }

  // 2. No API key — nothing to do
  if (!apiKey) return null;

  // 3. Generate with Gemini
  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `You are a neutral news summarizer. Write a concise 2–3 sentence summary of the following news article in your own words. Do not copy the original text. Be factual and objective.

Title: ${title}
Source: ${source}
Snippet: ${snippet ?? "No snippet available."}

Summary:`;

    const result = await model.generateContent(prompt);
    const summary = result.response.text().trim();
    if (!summary) return null;

    // 4. Cache in Redis for 7 days
    if (redis) {
      try {
        await redis.set(`news:summary:${slug}`, summary, { ex: 60 * 60 * 24 * 7 });
      } catch { /* ignore */ }
    }

    return summary;
  } catch {
    return null;
  }
}
