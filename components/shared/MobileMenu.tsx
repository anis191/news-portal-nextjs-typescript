"use client"
import { useState, useEffect, useContext } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AiOutlineClose, AiOutlineMenu, AiOutlineDown } from "react-icons/ai"
import { ThemeContext } from "@/context/themeContext"

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [servicesOpen, setServicesOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const { isDarkMode, toggleTheme } = useContext(ThemeContext) as ThemeContextType;

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setServicesOpen(false);
  };

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  return (
    <div>
      {/* Hamburger / Close Button */}
      <button
        onClick={toggleMenu}
        className={`lg:hidden p-2 rounded-md focus:outline-none hover:text-red-500 ${isDarkMode ? "text-white" : "text-gray-900"}`}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </button>

      {/* Backdrop Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={closeMenu}
        />
      )}

      {/* Slide-in Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-50 shadow-xl transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
      >
        {/* Drawer Header */}
        <div className={`flex justify-between items-center px-6 py-5 border-b ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}>
          <span className="text-xl font-bold">Daily Spot</span>
          <button
            onClick={closeMenu}
            className="hover:text-red-500 focus:outline-none"
            aria-label="Close menu"
          >
            <AiOutlineClose size={22} />
          </button>
        </div>

        {/* Nav Links */}
        <ul className="px-6 py-4 space-y-1 text-base font-medium">
          {/* News */}
          <li>
            <Link
              href="/news"
              onClick={closeMenu}
              className={`block py-2.5 hover:text-red-500 ${pathname === "/news" ? "text-red-500 font-bold" : ""}`}
            >
              News
            </Link>
          </li>

          {/* Services Accordion */}
          <li>
            <div className="flex items-center justify-between">
              <Link
                href="/services"
                onClick={closeMenu}
                className={`py-2.5 hover:text-red-500 ${pathname === "/services" ? "text-red-500 font-bold" : ""}`}
              >
                Services
              </Link>
              <button
                onClick={() => setServicesOpen(prev => !prev)}
                className="p-2 hover:text-red-500 focus:outline-none"
                aria-label="Toggle services"
              >
                <AiOutlineDown
                  size={14}
                  className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>
            </div>

            {/* Sub-links */}
            <div className={`overflow-hidden transition-all duration-300 ${servicesOpen ? "max-h-60" : "max-h-0"}`}>
              <ul className={`pl-4 pb-2 space-y-1 text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                <li><Link href="/services/web" onClick={closeMenu} className="block py-1.5 hover:text-red-500">Web Development</Link></li>
                <li><Link href="/services/app" onClick={closeMenu} className="block py-1.5 hover:text-red-500">App Development</Link></li>
                <li><Link href="/services/ai"  onClick={closeMenu} className="block py-1.5 hover:text-red-500">AI/ML</Link></li>
                <li><Link href="/services/seo" onClick={closeMenu} className="block py-1.5 hover:text-red-500">SEO</Link></li>
              </ul>
            </div>
          </li>

          {/* About */}
          <li>
            <Link
              href="/about"
              onClick={closeMenu}
              className={`block py-2.5 hover:text-red-500 ${pathname === "/about" ? "text-red-500 font-bold" : ""}`}
            >
              About
            </Link>
          </li>

          {/* Contact */}
          <li>
            <Link
              href="/contact"
              onClick={closeMenu}
              className={`block py-2.5 hover:text-red-500 ${pathname === "/contact" ? "text-red-500 font-bold" : ""}`}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Divider */}
        <div className={`mx-6 border-t ${isDarkMode ? "border-gray-700" : "border-gray-200"}`} />

        {/* Dark Mode & Login */}
        <div className="px-6 py-4 space-y-4">
          {/* Dark Mode Toggle */}
          <div onClick={toggleTheme} className="flex items-center justify-between cursor-pointer">
            <span className="text-sm font-medium">Dark Mode</span>
            <div className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${isDarkMode ? "bg-gray-600" : "bg-gray-300"}`}>
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform duration-200 ${isDarkMode ? "translate-x-6" : "translate-x-1"}`} />
            </div>
          </div>

          {/* Login Button */}
          <button className="w-full bg-gray-900 text-white px-4 py-2.5 rounded-md hover:bg-gray-700 transition-colors duration-200 text-sm font-medium">
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu