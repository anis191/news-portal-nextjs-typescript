"use client"

import fetchNews from '@/lib/fetchNews';
import { NewsItem } from '@/types/news';
import React, { useEffect, useState, useContext } from 'react'
import NewsCard from './NewsCard';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import { ThemeContext } from '@/context/themeContext';

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const SkeletonCard = ({ isDarkMode }: { isDarkMode: boolean }) => (
  <div className={`rounded-md border overflow-hidden animate-pulse ${
    isDarkMode ? "bg-gray-800 border-gray-700" : "bg-slate-50 border-neutral-100"
  }`}>
    {/* Image placeholder */}
    <div className={`w-full h-48 ${isDarkMode ? "bg-gray-700" : "bg-slate-200"}`} />
    {/* Content */}
    <div className="p-4 space-y-3">
      <div className={`h-3 w-20 rounded-full ${isDarkMode ? "bg-gray-700" : "bg-slate-200"}`} />
      <div className={`h-4 w-full rounded-full ${isDarkMode ? "bg-gray-700" : "bg-slate-200"}`} />
      <div className={`h-4 w-4/5 rounded-full ${isDarkMode ? "bg-gray-700" : "bg-slate-200"}`} />
      <div className={`h-3 w-full rounded-full ${isDarkMode ? "bg-gray-700" : "bg-slate-200"}`} />
      <div className={`h-3 w-3/4 rounded-full ${isDarkMode ? "bg-gray-700" : "bg-slate-200"}`} />
      <div className={`h-8 w-24 rounded-md mt-2 ${isDarkMode ? "bg-gray-700" : "bg-slate-200"}`} />
    </div>
  </div>
);

const NewsList = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const { isDarkMode } = useContext(ThemeContext) as ThemeContextType;

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      const data = await fetchNews(search, category);
      setNews(data);
      setLoading(false);
    }
    getNews();
  }, [search, category])

  return (
    <div>
      {/* Filter Bar */}
      <div className={`rounded-sm shadow-sm border px-5 py-2 mb-8 flex flex-col sm:flex-row sm:items-center gap-1 transition-colors duration-200 ${
        isDarkMode
          ? "bg-gray-800 border-gray-700"
          : "bg-slate-50 border-neutral-100"
      }`}>
        <div className="flex-1">
          <SearchBar onSearch={setSearch} />
        </div>
        <div className="sm:w-auto">
          <CategoryFilter onCategory={setCategory} />
        </div>
      </div>

      {/* News Cards or Skeleton */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-between'>
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} isDarkMode={isDarkMode} />
            ))
          : news.map((item) => (
              <NewsCard key={item?.id} item={item} />
            ))
        }
      </div>
    </div>
  )
}

export default NewsList