"use client"
import Link from "next/link"
import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "@/context/themeContext"

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

interface NewsItem {
  id: number;
  title: string;
  description: string;
  snippet: string | null;
  url: string | null;
  imageUrl: string | null;
  language: string;
  published_at: string | null;
  source: string | null;
  categories: string | null;
  is_featured: boolean;
}

const Banner = () => {
  const { isDarkMode } = useContext(ThemeContext) as ThemeContextType;
  const [featuredNews, setFeaturedNews] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedNews = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/news/featured/current`
        );

        if (!res.ok) {
          const errorText = await res.text();
          console.error(`API error ${res.status}:`, errorText);
          return;
        }

        // Safely handle null response when no featured news is set
        const text = await res.text();
        if (!text || text === "null") {
          setFeaturedNews(null);
          return;
        }

        const data = JSON.parse(text);
        setFeaturedNews(data);
      } catch (error) {
        console.error("Error fetching featured news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedNews();
  }, []);

  // --- Format date: fallback to today if null ---
  const formatDate = (dateStr: string | null) => {
    const date = dateStr ? new Date(dateStr) : new Date();
    return date.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  };

  // --- Get first category for pill ---
  const getCategory = (categories: string | null) => {
    if (!categories) return "General";
    return categories.split(",")[0].trim();
  };

  // --- Estimate read time from snippet ---
  const getReadTime = (snippet: string | null) => {
    if (!snippet) return "3 min read";
    const words = snippet.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  };

  // --- Fix image URL: append banner dimensions for Unsplash URLs ---
  const getBannerImage = (url: string | null) => {
    if (!url) return null;
    if (url.includes("unsplash.com") && !url.includes("fit=crop")) {
      const base = url.split("?")[0];
      return `${base}?w=1600&h=600&fit=crop&crop=center`;
    }
    return url;
  };

  // --- Skeleton loader ---
  if (loading) {
    return (
      <div className={`rounded-md overflow-hidden transition-colors duration-200 animate-pulse ${
        isDarkMode ? "bg-gray-800" : "bg-slate-100"
      }`}>
        <div className="px-4 py-8 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className={`rounded-sm w-full h-64 ${
            isDarkMode ? "bg-gray-700" : "bg-slate-300"
          }`} />
          <div className="space-y-4">
            <div className={`h-3 w-48 rounded ${isDarkMode ? "bg-gray-700" : "bg-slate-300"}`} />
            <div className={`h-6 w-full rounded ${isDarkMode ? "bg-gray-700" : "bg-slate-300"}`} />
            <div className={`h-6 w-3/4 rounded ${isDarkMode ? "bg-gray-700" : "bg-slate-300"}`} />
            <div className={`h-1 w-10 rounded ${isDarkMode ? "bg-gray-700" : "bg-slate-300"}`} />
            <div className={`h-3 w-full rounded ${isDarkMode ? "bg-gray-700" : "bg-slate-300"}`} />
            <div className={`h-3 w-5/6 rounded ${isDarkMode ? "bg-gray-700" : "bg-slate-300"}`} />
            <div className={`h-3 w-4/6 rounded ${isDarkMode ? "bg-gray-700" : "bg-slate-300"}`} />
            <div className={`h-9 w-32 rounded-md ${isDarkMode ? "bg-gray-700" : "bg-slate-300"}`} />
          </div>
        </div>
      </div>
    );
  }

  // --- No featured news fallback ---
  if (!featuredNews) {
    return null;
  }

  return (
    <div className={`rounded-md overflow-hidden transition-colors duration-200 ${
      isDarkMode ? "bg-gray-800 text-white" : "bg-slate-100"
    }`}>
      <div className="px-4 py-8 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8">

        {/* Image */}
        <div className="relative">
          {featuredNews.imageUrl ? (
            <img
              src={getBannerImage(featuredNews.imageUrl) ?? ""}
              alt={featuredNews.title}
              className="rounded-sm w-full h-64 md:h-72 object-cover"
            />
          ) : (
            <div className={`rounded-sm w-full h-64 flex items-center justify-center ${
              isDarkMode ? "bg-gray-700" : "bg-slate-300"
            }`}>
              <span className={`text-sm ${
                isDarkMode ? "text-gray-400" : "text-slate-500"
              }`}>
                No Image
              </span>
            </div>
          )}
          {/* Category pill */}
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
            {getCategory(featuredNews.categories)}
          </span>
        </div>

        {/* Content */}
        <div className="space-y-4 flex flex-col">

          {/* Meta */}
          <div className={`flex items-center gap-2 text-xs font-medium ${
            isDarkMode ? "text-gray-400" : "text-gray-400"
          }`}>
            <span>By {featuredNews.source ?? "Daily Spot"}</span>
            <span>•</span>
            <span>{formatDate(featuredNews.published_at)}</span>
            <span>•</span>
            <span>{getReadTime(featuredNews.snippet)}</span>
          </div>

          {/* Headline */}
          <h2 className={`text-2xl font-bold leading-snug ${
            isDarkMode ? "text-white" : "text-slate-800"
          }`}>
            {featuredNews.title}
          </h2>

          {/* Red accent */}
          <div className="w-10 h-[3px] bg-red-500 rounded-full" />

          {/* Body */}
          <p className={`text-sm leading-relaxed ${
            isDarkMode ? "text-gray-400" : "text-slate-500"
          }`}>
            {featuredNews.description}
          </p>

          {/* CTA */}
          <Link
            href={`/news/${featuredNews.id}`}
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-700 text-white text-sm font-medium px-5 py-2.5 rounded-md transition-colors duration-200 w-fit"
          >
            Read More
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

        </div>
      </div>
    </div>
  );
}

export default Banner