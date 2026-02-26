// import Image from "next/image";
import NewsCard from "@/components/news/NewsCard";
import Banner from "@/components/shared/Banner";
import { NewsItem } from "@/types/news";

const Home = async() => {
  // fetch the data from api endpoint:
  const data = await fetch('https://news-portal-fastapi-server.vercel.app/news')
  const news = await data.json();
  // console.log(news);

  return (
    <div className="py-12">
        <Banner />
        {/* latest news */}
        <div className="my-12">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8">Latest News</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {
              news.slice(0,3).map((item: NewsItem) => (
                <NewsCard key={item?.id} item={item} />
              ))
            }
          </div>
        </div>
    </div>
  );
}

export default Home