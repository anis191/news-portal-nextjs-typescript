import NewsCard from "@/components/news/NewsCard";
import Banner from "@/components/shared/Banner";
import NewsLetter from "@/components/shared/NewsLetter";
import { NewsItem } from "@/types/news";

const Home = async () => {
  const [newsRes, featuredRes] = await Promise.all([
    fetch("https://news-portal-fastapi-server.vercel.app/news"),
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/news/featured/current`, {
      next: { revalidate: 3600 }
    })
  ]);

  const news: NewsItem[] = await newsRes.json();

  const featuredText = await featuredRes.text();
  const featuredNews = featuredText && featuredText !== "null"
    ? JSON.parse(featuredText)
    : null;

  return (
    <div className="py-12">
      <Banner featuredNews={featuredNews} />
      <div className="my-12">
        <h2 className="text-2xl lg:text-3xl font-bold mb-8">Latest News</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.slice(0, 3).map((item: NewsItem) => (
            <NewsCard key={item?.id} item={item} />
          ))}
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default Home;