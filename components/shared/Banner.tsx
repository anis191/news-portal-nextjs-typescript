// import React from 'react'
import Image from "next/image"
import { Button } from "../ui/button"
import bannerImage from "@/public/assests/banner-img.jpg"

const Banner = () => {
  return (
    <div className="bg-slate-100">
        <div className="px-4 py-8 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            {/* images */}
            <div>
                <Image src={bannerImage} alt="banner-image"/>
                {/* <Image src="https://images.unsplash.com/photo-1712002641088-9d76f9080889?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="dynamic-image" width={500} height={500}/> */}
            </div>
            {/* content */}
            <div className="space-y-4 flex flex-col">
                <h4 className="text-sm font-medium text-gray-500">Technology</h4>
                <h2 className="text-2xl font-bold">DBS pilots system that lets AI agents make payments for customers</h2>
                <p>
                    Artificial intelligence is moving closer to the point where it can act, not advise. A new pilot by DBS Bank shows how that change may soon affect everyday payments, as financial institutions begin testing systems that allow AI agents to complete purchases on behalf of customers. <br/><br/>
                    DBS is working with Visa to trial Visa Intelligent Commerce, a framework designed to support transactions initiated by AI software not humans.
                </p>
                <Button variant="default">Read More</Button>
            </div>
        </div>
    </div>
  )
}

export default Banner