import { getNews } from "@/lib/rss";

export default async function NewsFeed({ limit = 6 }: { limit?: number }) {
  let news;
  try {
    news = await getNews(limit);
  } catch {
    return <p className="text-red-400 text-xs">Could not load news.</p>;
  }

  if (news.length === 0) {
    return <p className="text-gray-400 text-xs">No news available right now.</p>;
  }

  return (
    <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {news.map((item) => (
        <a
          key={item.link}
          href={`/news/${item.slug}`}
          className="bg-white rounded-lg border border-stone-200 hover:border-rose-300 hover:shadow-sm transition-all flex flex-col overflow-hidden group"
        >
          {item.imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-28 object-cover group-hover:brightness-95 transition-all"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-28 bg-stone-100 flex items-center justify-center">
              <span className="text-2xl opacity-20">◈</span>
            </div>
          )}
          <div className="p-2.5 flex flex-col flex-1">
            <span className="text-[10px] font-semibold text-rose-700 uppercase tracking-wide mb-1">{item.source}</span>
            <h3 className="text-xs font-semibold text-gray-800 leading-snug line-clamp-3 flex-1">
              {item.title}
            </h3>
            <span className="text-[10px] text-gray-400 mt-1.5">{item.pubDate}</span>
          </div>
        </a>
      ))}
    </div>
  );
}
