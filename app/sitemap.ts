import { MetadataRoute } from "next";

const SITE_URL = "https://arabiakhaleej.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/privacy", "/terms", "/disclaimer"].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}
