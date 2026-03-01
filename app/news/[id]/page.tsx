import React from "react";
import { NewsItem } from "@/types/news";
import Image from "next/image";
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
    <section className="py-12">
      <article className="max-w-4xl mx-auto p-6 shadow-md border rounded-lg">
        {post.imageUrl && (
          <div className="w-full h-[450px] rounded-md overflow-hidden relative">
            <Image
              src={post.imageUrl}
              alt={post.title ?? "news image"}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
            />
          </div>
        )}

        <div className="my-5">
          <h2 className="text-3xl font-bold mb-4">{post.title ?? "Untitled"}</h2>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm mb-4 gap-2">
            <p className="text-gray-600">{publishedStr}</p>
            <p className="text-gray-600">
              Source: <span className="font-medium">{post.source ?? "Unknown"}</span>
            </p>
          </div>
        </div>

        <div className="mb-4">
          {categories.map((category) => (
            <span
              key={category}
              className="bg-blue-100 text-blue-600 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
            >
              {category}
            </span>
          ))}
        </div>

        {post.snippet && <p className="mb-2 text-gray-800">{post.snippet}</p>}
        {post.description && <p className="mb-4 text-gray-700">{post.description}</p>}

        {/* <p className="text-sm text-gray-500">Displayed: id {post.id}</p> */}
      </article>
    </section>
  );
};

export default NewsDetailsPage;
