// import React from 'react'

import NewsList from "@/components/news/NewsList"

const NewsPage = async() => {
  return(
    <div className="py-10">
      <h2 className="text-2xl font-bold mb-8">Latest News</h2>

      <NewsList />
    </div>
  )
}

export default NewsPage