# Technical Infrastructure & SEO Architecture: Arabia Khaleej

This document details the external services, data architecture, and SEO strategy for the Arabia Khaleej platform.

---

## 🛠️ External Services Inventory

### 1. Official News Aggregation (RSS Feeds)
The "Press Terminal" fetches real-time news from official state agencies (QNA, WAM, SPA, BNA, ONA).

### 2. Financial & Market Data
| Service | Data Type | Refresh Rate | API Provider |
| :--- | :--- | :--- | :--- |
| **Currency Rates** | FX Spot Prices | 30 Minutes | `open.er-api.com` |
| **Market Indices** | GCC Stock Markets | Real-time (Sim) | Internal Algorithm |
| **Commodities** | Gold & Brent Crude | Real-time (Sim) | Internal Algorithm |

### 3. Infrastructure & Caching
| Service | Purpose | Provider | Retention |
| :--- | :--- | :--- | :--- |
| **Redis** | News Archiving & SEO | Upstash / Local | 30 Days |
| **Vercel Edge** | Deployment & Edge Middleware | Vercel | N/A |

### 4. Assets & Media
| Service | Usage | License | Integration Method |
| :--- | :--- | :--- | :--- |
| **Unsplash** | Smart Article Images | Free / Open | Keyword-based Dynamic Link |
| **Typography** | Apple System Stack | OS Native | -apple-system, SF Pro Display |
| **Lucide React** | UI Iconography | ISC | NPM Library |

---

## 🚀 SEO Ambition & Strategy

> *"Every data point we display must also exist as machine-readable, structured, indexable fact."*

### Philosophy
Arabia Khaleej is a **structured knowledge graph** for the GCC region. Every number, prayer time, and currency rate must be expressed as a formal Schema.org entity.

### Key Ambitions
1. **Knowledge Panel Domination**: Achieve Google Knowledge Panel eligibility as an Organization and for regional data.
2. **Rich Snippet Coverage**: Targeted snippets for Prayer Times, Country Guides, Market Data, and Economic Outlooks.
3. **Full Linked Data Graph**: Centralized `@id`-linked graph connecting Website -> Organization -> Services.
4. **Bilingual Indexing Parity**: Full support for English and Arabic (`ar-SA`, `ar-AE`, etc.) with `hreflang` alternates.
5. **Geo-Authority Signals**: High-precision geo-metadata (ISO 3166-2, ICBM, GeoCoordinates).
6. **AI Crawler Accessibility**: Explicitly allowing GPTBot, Claude-Web, and others to ensure visibility in AI answers.

### Schema.org Entities In Use
- `Organization`, `WebSite`, `WebPage`, `BreadcrumbList`
- `Country`, `Place`, `Service`, `Dataset`
- `Article`, `ContactPage`, `PropertyValue`

---

## ✅ SEO Health Checklist

- [x] `sitemap.xml` — dynamic route, optimized for news items.
- [x] `robots.txt` — allows AI crawlers, blocks internal paths.
- [x] Canonical URLs and `hreflang` implementation.
- [x] Unique `<title>` and `<meta description>` per page.
- [x] OpenGraph images (1200×630) and Twitter cards.
- [x] Dublin Core metadata implementation.

---
*Last Updated: April 29, 2026*
