"use client"
import Link from "next/link";
import { useContext } from "react";
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";
import { ThemeContext } from "@/context/themeContext";

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Footer = () => {
  const { isDarkMode } = useContext(ThemeContext) as ThemeContextType;

  return (
    <footer className={`relative border-t py-10 overflow-hidden transition-colors duration-200 ${
      isDarkMode ? "bg-gray-900 border-gray-700" : "bg-gray-100 border-slate-200"
    }`}>
      {/* Decorative top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <h2 className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-slate-800"}`}>
              Daily <span className="text-red-500">Spot</span>
            </h2>
            <p className={`mt-1.5 text-sm ${isDarkMode ? "text-gray-400" : "text-slate-500"}`}>
              Building a better digital experience for everyone.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            {[
              { label: "About Us", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Contact", href: "/contact" },
              { label: "Privacy Policy", href: "/privacy" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-red-500 transition-colors duration-200 ${
                  isDarkMode ? "text-gray-400" : "text-slate-500"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-3">
            {[
              { href: "https://twitter.com", label: "Twitter", Icon: AiOutlineTwitter },
              { href: "https://instagram.com", label: "Instagram", Icon: AiOutlineInstagram },
              { href: "https://github.com", label: "Github", Icon: AiOutlineGithub },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`w-9 h-9 rounded-full border shadow-sm flex items-center justify-center transition-all duration-200 hover:bg-red-500 hover:text-white hover:border-red-500 ${
                  isDarkMode
                    ? "bg-gray-800 border-gray-600 text-gray-400"
                    : "bg-white border-slate-200 text-slate-500"
                }`}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className={`mt-8 border-t pt-6 md:flex md:justify-between md:items-center text-center ${
          isDarkMode ? "border-gray-700" : "border-slate-200"
        }`}>
          <p className={`text-sm ${isDarkMode ? "text-gray-500" : "text-slate-400"}`}>
            &copy; {new Date().getFullYear()}{" "}
            <span className={`font-medium ${isDarkMode ? "text-gray-300" : "text-slate-600"}`}>
              Daily Spot
            </span>. All rights reserved.
          </p>

          {/* Custom Subscribe Button */}
          <button className={`mt-4 md:mt-0 border text-sm px-5 py-2 rounded-md transition-all duration-200 hover:bg-red-500 hover:text-white hover:border-red-500 ${
            isDarkMode
              ? "border-red-400 text-red-400"
              : "border-red-400 text-red-500"
          }`}>
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;