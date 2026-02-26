// import React from 'react'
// import Link from "next/link"
import NewsCard from "@/components/news/NewsCard"
import Banner from "../../components/shared/Banner"

const NewsPage = () => {
  return (
    <div className="py-12">
        <Banner />

        {/* latest news */}
        <div className="my-12">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8">Latest News</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <NewsCard />
          </div>
        </div>
    </div>
  )
}

export default NewsPage