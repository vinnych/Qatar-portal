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
          className="bg-white rounded-xl border border-stone-200 hover:border-stone-300 hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden group"
        >
          {item.imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-28 object-cover group-hover:scale-[1.02] transition-transform duration-300"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-28 bg-gradient-to-br from-stone-100 to-stone-50 flex items-center justify-center">
              <span className="text-xl opacity-10 text-gray-400">◈</span>
            </div>
          )}
          <div className="p-2.5 flex flex-col flex-1">
            <span className="inline-flex items-center text-[9px] font-bold text-rose-700 uppercase tracking-widest mb-1.5">{item.source}</span>
            <h3 className="text-[13px] font-semibold text-gray-800 leading-snug line-clamp-2 flex-1">
              {item.title}
            </h3>
            <span className="text-[10px] text-gray-400 mt-2 tabular-nums">{item.pubDate}</span>
          </div>
        </a>
      ))}
    </div>
  );
}
