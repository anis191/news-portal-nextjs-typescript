import React from "react";
import { NewsItem } from "@/types/news";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts: NewsItem[] = await fetch("https://news-portal-fastapi-server.vercel.app/news/", {
    next: { revalidate: 60 },
  }).then((res) => res.json());

  return posts.slice(0, 5).map((post) => ({ id: String(post.id) }));
}

interface Props {
  params: Promise<{ id: string }>;
}

const NewsDetailsPage = async ({ params }: Props) => {
  const { id } = await params;

  let post: NewsItem | null = null;

  try {
    const res = await fetch(`https://news-portal-fastapi-server.vercel.app/news/${id}`, {
      next: { revalidate: 60 },
      cache: "no-store",
    });

    if (!res.ok) {
      if (res.status === 404) notFound();
      console.error("Failed to fetch news item", res.status, await res.text());
    } else {
      post = await res.json();
    }
  } catch (error) {
    console.error("Error fetching news item:", error);
    notFound();
  }

  if (!post) return null;

  const categories: string[] = post.categories
    ? typeof post.categories === "string"
      ? post.categories.split(",").map((c) => c.trim()).filter(Boolean)
      : Array.isArray(post.categories)
      ? post.categories
      : []
    : [];

  const publishedAt = post.published_at ? new Date(post.published_at) : null;
  const publishedStr = publishedAt
    ? publishedAt.toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" })
    : "Unknown";

  return (
    <section className="py-10 sm:py-14 min-h-screen transition-colors duration-200">
      <article className="max-w-4xl mx-auto">

        {/* Back link */}
        <Link
          href="/news"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 mb-6 transition-colors duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to News
        </Link>

        {/* Card */}
        <div className="rounded-xl border shadow-sm overflow-hidden transition-colors duration-200 bg-white dark:bg-gray-800 border-neutral-100 dark:border-gray-700">

          {/* Hero Image */}
          {post.imageUrl && (
            <div className="w-full h-[260px] sm:h-[360px] md:h-[450px] relative">
              <Image
                src={post.imageUrl}
                alt={post.title ?? "news image"}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
                priority
              />
              {/* Category pills over image */}
              {categories.length > 0 && (
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <span
                      key={category}
                      className="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Content */}
          <div className="p-5 sm:p-8">

            {/* Categories (no image fallback) */}
            {!post.imageUrl && categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {categories.map((category) => (
                  <span
                    key={category}
                    className="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider"
                  >
                    {category}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl font-extrabold leading-snug mb-4 text-slate-800 dark:text-white">
              {post.title ?? "Untitled"}
            </h1>

            {/* Red accent */}
            <div className="w-10 h-[3px] bg-red-500 rounded-full mb-5" />

            {/* Meta row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-5 border-b border-neutral-100 dark:border-gray-700">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 dark:text-gray-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{publishedStr}</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 dark:text-gray-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v10a2 2 0 01-2 2z" />
                </svg>
                Source:{" "}
                <span className="font-semibold text-slate-600 dark:text-gray-300">
                  {post.source ?? "Unknown"}
                </span>
              </div>
            </div>

            {/* Body */}
            <div className="space-y-4">
              {post.snippet && (
                <p className="text-base sm:text-lg font-medium leading-relaxed text-slate-700 dark:text-gray-200">
                  {post.snippet}
                </p>
              )}
              {post.description && (
                <p className="text-sm sm:text-base leading-relaxed text-slate-500 dark:text-gray-400">
                  {post.description}
                </p>
              )}
            </div>

            {/* Bottom CTA */}
            <div className="mt-8 pt-6 border-t border-neutral-100 dark:border-gray-700">
              <Link
                href="/news"
                className="inline-flex items-center gap-2 bg-gray-900 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors duration-200"
              >
                <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                More News
              </Link>
            </div>

          </div>
        </div>
      </article>
    </section>
  );
};

export default NewsDetailsPage;