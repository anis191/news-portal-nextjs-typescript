// import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { NewsCardProps } from "@/types/news"
import missingImage from "@/public/assests/missing-image.jpg"

const NewsCard = ({item}: NewsCardProps) => {
  return (
    <div className="border p-4 rounded-md shadow-md">
        <Link href={`/news/${item?.id}`}>
            <Image src={item?.imageUrl || missingImage} width={500} height={500} alt="news-image" className="mb-5 md:h-56 rounded hover:scale-105 cursor-pointer transition-all duration-200"/>
        </Link>
        <div>
          <h2 className="text-xl font-semibold my-3">
            {item?.title.substring(0,30)}..
          </h2>
          <p className="mb-4">
            {item?.description.substring(0,85)}..
          </p>
          <Link href={`/news/${item?.id}`}><Button variant="default">Read More</Button></Link>
        </div>
    </div>
  )
}

export default NewsCard