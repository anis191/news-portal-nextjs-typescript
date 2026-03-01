"use client"
import Image from "next/image"
import Link from "next/link"
import { useContext } from "react"
import { ThemeContext } from "@/context/themeContext"
import bannerImage from "@/public/assests/banner-img.jpg"

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Banner = () => {
  const { isDarkMode } = useContext(ThemeContext) as ThemeContextType;

  return (
    <div className={`rounded-md overflow-hidden transition-colors duration-200 ${
      isDarkMode ? "bg-gray-800 text-white" : "bg-slate-100"
    }`}>
      <div className="px-4 py-8 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8">

        {/* Image */}
        <div className="relative">
          <Image
            src={bannerImage}
            alt="banner-image"
            className="rounded-sm w-full h-auto object-cover"
          />
          {/* Category pill over image */}
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
            Technology
          </span>
        </div>

        {/* Content */}
        <div className="space-y-4 flex flex-col">

          {/* Meta */}
          <div className={`flex items-center gap-2 text-xs font-medium ${isDarkMode ? "text-gray-400" : "text-gray-400"}`}>
            <span>By Daily Spot</span>
            <span>•</span>
            <span>June 2025</span>
            <span>•</span>
            <span>3 min read</span>
          </div>

          {/* Headline */}
          <h2 className={`text-2xl font-bold leading-snug ${isDarkMode ? "text-white" : "text-slate-800"}`}>
            DBS pilots system that lets AI agents make payments for customers
          </h2>

          {/* Red accent */}
          <div className="w-10 h-[3px] bg-red-500 rounded-full" />

          {/* Body */}
          <p className={`text-sm leading-relaxed ${isDarkMode ? "text-gray-400" : "text-slate-500"}`}>
            Artificial intelligence is moving closer to the point where it can act, not advise. A new pilot by DBS Bank shows how that change may soon affect everyday payments, as financial institutions begin testing systems that allow AI agents to complete purchases on behalf of customers. <br /><br />
            DBS is working with Visa to trial Visa Intelligent Commerce, a framework designed to support transactions initiated by AI software — not humans.
          </p>

          {/* CTA */}
          <Link
            href="/news"
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
  )
}

export default Banner