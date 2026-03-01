"use client"

import fetchNews from '@/lib/fetchNews';
import { NewsItem } from '@/types/news';
import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';

const NewsList = () => {
    const [news, setNews] = useState<NewsItem[]>([]);
    const [search, setSearch] = useState<string>("");
    const [category, setCategory] = useState<string>("");

    useEffect(() => {
        const getNews = async() => {
            const data = await fetchNews(search, category);
            setNews(data);
        }
        getNews();
    },[search, category])
    // console.log(news);

  return (
    <div>
      <div className="bg-slate-50 rounded-2xl shadow-sm border border-neutral-100 px-5 py-2 mb-8 flex flex-col sm:flex-row sm:items-center gap-1">
        <div className="flex-1">
          <SearchBar onSearch={setSearch}/>
        </div>
        <div className="sm:w-auto">
          <CategoryFilter onCategory={setCategory}/>
        </div>
      </div>


        {/* all latest news cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-between'>
            {news.map((item) => (
                <NewsCard key={item?.id} item={item}/>
            ))}
        </div>
    </div>
  )
}

export default NewsList