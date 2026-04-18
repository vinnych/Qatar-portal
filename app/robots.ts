import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/static/",
        ],
      },
      {
        userAgent: ["GPTBot", "Claude-Web", "CCBot", "PerplexityBot"],
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        crawlDelay: 1,
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

