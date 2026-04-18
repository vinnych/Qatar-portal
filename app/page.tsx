import { pageMeta, SITE_NAME, SITE_DESCRIPTION } from "@/lib/seo";
import HomeClient from "@/components/HomeClient";

export const metadata = pageMeta({
  title: `${SITE_NAME} | Independent GCC Community Guide`,
  description: SITE_DESCRIPTION,
  path: "/",
  keywords: ["GCC Guide", "Qatar", "Saudi Arabia", "UAE", "Dubai", "Riyadh", "Doha", "Prayer Times", "Gold Rates"],
});

export default function Home() {
  return <HomeClient />;
}

