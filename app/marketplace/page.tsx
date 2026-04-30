import { pageMeta } from "@/lib/seo";
import MarketplaceClient from "@/components/marketplace/MarketplaceClient";
import {
  DatasetSchema,
  WebPageSchema,
} from "@/components/seo/StructuredData";

export const metadata = pageMeta({
  title: "Boutique Marketplace | Arabia Khaleej — Premium GCC Selection",
  titleAr: "سوق البوتيك | عربية خليج — مختارات خليجية متميزة",
  description:
    "Explore a curated selection of premium electronics, fashion, and lifestyle products from top GCC retailers. Exclusive deals for Qatar, UAE, Saudi Arabia, and the Gulf.",
  descriptionAr:
    "استكشف مجموعة مختارة من الإلكترونيات والأزياء ومنتجات أسلوب الحياة المتميزة من كبار تجار التجزئة في الخليج. عروض حصرية لقطر والإمارات والسعودية والخليج.",
  path: "/marketplace",
  keywords: [
    "GCC marketplace", "online shopping UAE", "Saudi Arabia deals", 
    "Qatar premium shopping", "Noon affiliate", "Amazon.ae offers",
    "Namshi fashion GCC", "luxury products Gulf",
    "سوق الخليج", "تسوق أونلاين الإمارات", "عروض السعودية",
  ],
});

export default function MarketplacePage() {
  return (
    <>
      <WebPageSchema
        name="Boutique Marketplace — Arabia Khaleej"
        description="Premium retail marketplace for the GCC region featuring electronics, fashion, and lifestyle excellence."
        url="/marketplace"
      />
      <DatasetSchema
        name="Arabia Khaleej Marketplace Data"
        description="Structured product data for premium GCC retail offerings."
        url="/marketplace"
        keywords={["shopping", "GCC", "retail", "electronics", "fashion"]}
      />
      <MarketplaceClient />
    </>
  );
}
