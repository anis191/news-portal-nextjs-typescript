"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu"
import { useContext, useState, useRef, useEffect } from "react"
import { ThemeContext } from "@/context/themeContext"

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar = () => {
  const pathname = usePathname()
  const { isDarkMode, toggleTheme } = useContext(ThemeContext) as ThemeContextType;
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={`py-3 lg:py-4 shadow-md ${isDarkMode ? "bg-gray-900 text-white" : ""}`}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5 select-none">
          <span className={`text-xl sm:text-2xl font-extrabold tracking-tight ${isDarkMode ? "text-white" : "text-slate-800"}`}>
            Daily
          </span>
          <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white bg-red-500 px-1.5 py-0.5 rounded-md leading-tight">
            Spot
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-sm xl:text-base">

          {/* News */}
          <Link
            href="/news"
            className={`${pathname === '/news' ? "text-red-500 font-bold" : ""} hover:text-red-500`}
          >
            News
          </Link>

          {/* Services with Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <div className="flex items-center gap-1">
              <Link
                href="/services"
                className={`${pathname === '/services' ? "text-red-500 font-bold" : ""} hover:text-red-500`}
              >
                Services
              </Link>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="focus:outline-none hover:text-red-500"
              >
                <svg
                  className={`w-3.5 h-3.5 xl:w-4 xl:h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {servicesOpen && (
              <div className={`absolute top-full left-0 mt-2 w-44 xl:w-48 shadow-lg rounded-md z-50 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
                <ul className={`text-sm px-3 py-3 space-y-2 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  <li>
                    <Link href="#" className="block hover:text-red-500" onClick={() => setServicesOpen(false)}>Web Development</Link>
                  </li>
                  <li>
                    <Link href="#" className="block hover:text-red-500" onClick={() => setServicesOpen(false)}>App Development</Link>
                  </li>
                  <li>
                    <Link href="#" className="block hover:text-red-500" onClick={() => setServicesOpen(false)}>AI/ML</Link>
                  </li>
                  <li>
                    <Link href="#" className="block hover:text-red-500" onClick={() => setServicesOpen(false)}>SEO</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* About */}
          <Link
            href="/about"
            className={`${pathname === '/about' ? "text-red-500 font-bold" : ""} hover:text-red-500`}
          >
            About
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            className={`${pathname === '/contact' ? "text-red-500 font-bold" : ""} hover:text-red-500`}
          >
            Contact
          </Link>
        </div>

        {/* Dark Mode Toggle & Login */}
        <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
          <div onClick={toggleTheme} className="flex items-center cursor-pointer">
            <span className="text-sm xl:text-base mx-2">Dark Mode</span>
            <div
              className={`relative inline-flex h-5 w-10 xl:h-6 xl:w-11 items-center rounded-full transition-colors duration-200 ${
                isDarkMode ? "bg-gray-600" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-3.5 w-3.5 xl:h-4 xl:w-4 transform rounded-full bg-white shadow transition-transform duration-200 ${
                  isDarkMode ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </div>
          </div>

          <button className="bg-gray-900 text-white px-3 py-1.5 xl:px-4 xl:py-2 rounded-md hover:bg-gray-700 transition-colors duration-200 text-xs xl:text-sm font-medium">
            Login
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden">
          <MobileMenu />
        </div>
      </nav>
    </header>
  )
}

export default Navbar