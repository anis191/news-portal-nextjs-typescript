// import React from 'react'
import Image from "next/image"
import Link from "next/link"
import image from "@/public/assests/banner-img.jpg"
import { Button } from "../ui/button"

const NewsCard = () => {
  return (
    <div className="border p-4 rounded-md shadow-md">
        <Link href={"/"}>
            <Image src={image} alt="news-image" className="mb-5 md:h-56 rounded hover:scale-105 cursor-pointer transition-all duration-200"/>
        </Link>
        <div>
          <h2 className="text-xl font-semibold my-3">
            Bangladesh Boosts Renewable Energy Investment
          </h2>
          <p className="mb-4">
            The government of Bangladesh has announced new incentives to attract foreign investors in solar and wind energy.
          </p>
          <Link href={"/"}><Button variant="default">Read More</Button></Link>
        </div>
    </div>
  )
}

export default NewsCard