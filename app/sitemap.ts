import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  
  const mainRoutes = [
    { url: "", priority: 1.0, changeFrequency: "daily" as const },
    { url: "/prayer", priority: 0.9, changeFrequency: "daily" as const },
    { url: "/market-insight", priority: 0.9, changeFrequency: "daily" as const },
    { url: "/currency-exchange", priority: 0.9, changeFrequency: "daily" as const },
    { url: "/join", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  const countryRoutes = [
    "saudi-arabia",
    "united-arab-emirates",
    "qatar",
    "kuwait",
    "oman",
    "bahrain"
  ].map(slug => ({
    url: `/countries/${slug}`,
    priority: 0.8,
    changeFrequency: "weekly" as const
  }));

  const prayerSubRoutes = [
    "qatar",
    "uae",
    "saudi-arabia",
    "kuwait",
    "oman",
    "bahrain"
  ].map(slug => ({
    url: `/prayer/${slug}`,
    priority: 0.7,
    changeFrequency: "daily" as const
  }));

  const insightSubRoutes = [
    "stocks",
    "currencies",
    "commodities"
  ].map(slug => ({
    url: `/market-insight/${slug}`,
    priority: 0.7,
    changeFrequency: "daily" as const
  }));

  const legalRoutes = [
    "/about",
    "/privacy",
    "/terms",
    "/disclaimer",
    "/transparency"
  ].map(route => ({
    url: route,
    priority: 0.3,
    changeFrequency: "monthly" as const
  }));

  return [...mainRoutes, ...countryRoutes, ...prayerSubRoutes, ...insightSubRoutes, ...legalRoutes].map(route => ({
    url: `${SITE_URL}${route.url}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority
  }));
}

