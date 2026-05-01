# Arabia Khaleej: Official Documentation & Project Manifesto

Arabia Khaleej is a unified, premium digital insights platform and structured knowledge graph for the GCC region (Qatar, UAE, KSA, Kuwait, Oman, Bahrain). It provides deep editorial coverage, high-performance data dashboards, and authoritative regional guides with a focus on minimalist, high-end design and automated AI-driven editorial excellence.

Live: [arabiakhaleej.com](https://arabiakhaleej.com)

---

## 🏛️ Project Nature & Compliance

Arabia Khaleej is an **independent regional reference**. It is a mature, premium platform dedicated to high-quality information and insights. 

### ⚖️ Legal Manifesto
- **Independent Stance**: Not affiliated with any government body or official media agency.
- **Strict Analytical Focus**: Content is strictly analytical, factual, and mature.
- **No News Aggregation**: The platform does NOT aggregate real-time news. All content is original editorial work.
- **Data Integrity**: Utility data (Currency, Prayer, Weather) is sourced from reputable public APIs without manual interpretation.
- **Sovereign Respect**: Maintains a neutral, "Static Public Utility" stance across all GCC member states.

---

## 🛠️ Technical Infrastructure

### 1. Unified Premium Insights Engine
Editorial content is generated via the **Groq API** (`llama-3.3-70b-versatile`) with a focus on "Viral/Trending" GCC topics.
- **Standards**: Every article is 1200+ words/lines, formatted in clean Markdown.
- **Automation**: A daily batch generation system posts 10 high-quality, eye-catching articles to stay at the forefront of regional trends.
- **Storage**: A hybrid model merging hardcoded core articles with a dynamic Redis-backed archive.

### 2. Core Tech Stack
- **Framework**: Next.js (App Router) / TypeScript.
- **Data Layer**: Redis (Upstash) for transient caching and dynamic insights.
- **Aesthetics**: Vanilla CSS / Premium UI Components / Lucide Icons.
- **Assets**: Bespoke AI-Generated Imagery hosted locally.

### 3. SEO Strategy
- **Structured Knowledge Graph**: Every insight article uses a formal `Article` schema (via Schema.org) with deterministic, hydration-safe structured data injection — no nonce or random ID generation to avoid server/client mismatches.
- **Bilingual Excellence**: Full English and Arabic parity with optimized typography and `hreflang` support.
- **AI Accessibility**: Explicitly optimized for AI crawlers (GPTBot, Claude-Web) to ensure visibility in AI search results.

---

## 🤖 AI Development Guidelines

For AI assistants working on this repository:
1. **Senior Developer Mindset**: Take full ownership. Research and implement best-in-class solutions.
2. **Premium Aesthetics**: Prioritize high-end visual identity, curated palettes, and subtle motion.
3. **Extreme Performance**: Optimize for lightning-fast load times and edge-ready execution.
4. **Content Quality**: Every generated article must be eye-catching, authoritative, and deeply insightful.

---
*Last Updated: May 1, 2026 — Hydration-safe StructuredData refactor*
