import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/prayer",
    "/prayer/qatar",
    "/prayer/uae",
    "/prayer/saudi-arabia",
    "/prayer/kuwait",
    "/prayer/oman",
    "/prayer/bahrain",
    "/finance",
    "/join",
    "/about",
    "/privacy",
    "/terms",
    "/disclaimer"
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : route === "/join" ? 0.9 : 0.8,
  }));

  return routes;
}

