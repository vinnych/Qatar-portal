import { pageMeta } from "@/lib/seo";
import NewsClient from "@/components/news/NewsClient";
import PublicSurvey from "@/components/news/PublicSurvey";

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ category: string }> 
}) {
  const { category } = await params;
  const title = category.charAt(0).toUpperCase() + category.slice(1);
  
  return pageMeta({
    title: `${title} News | Arabia Khaleej`,
    description: `Latest ${category} news and updates from the GCC and international community.`,
    path: `/news/category/${category}`,
  });
}

export default async function CategoryNewsPage({ 
  params 
}: { 
  params: Promise<{ category: string }> 
}) {
  const { category } = await params;
  
  return (
    <div className="pt-20">
      <NewsClient category={category} />
      <PublicSurvey />
    </div>
  );
}
