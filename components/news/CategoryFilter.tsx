"use client"
import { useContext, useState } from 'react'
import { CategoryProps } from '@/types/news'
import { ThemeContext } from '@/context/themeContext'
import { AiOutlineDown } from 'react-icons/ai'

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const CategoryFilter = ({ onCategory }: CategoryProps) => {
  const { isDarkMode } = useContext(ThemeContext) as ThemeContextType;
  const [selected, setSelected] = useState("Select Category");
  const [isOpen, setIsOpen] = useState(false);

  const categories = ["all", "Science", "Technology", "Environment", "General", "Economy", "Finance"];

  const handleSelect = (item: string) => {
    setSelected(item === "all" ? "All" : item);
    onCategory(item === "all" ? "" : item);
    setIsOpen(false);
  };

  return (
    <div className='flex gap-2 items-center justify-center mx-2 sm:mx-4 mb-2'>
      <h3 className={`font-bold text-sm sm:text-base whitespace-nowrap ${isDarkMode ? "text-white" : "text-slate-700"}`}>
        Filter
      </h3>

      {/* Custom Select */}
      <div className="relative w-[150px] sm:w-[180px]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full flex items-center justify-between px-3 py-2 text-sm sm:text-base rounded-md border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 ${
            isDarkMode
              ? "bg-gray-700 border-gray-600 text-white"
              : "bg-white border-gray-300 text-slate-700"
          }`}
        >
          <span className="truncate">{selected}</span>
          <AiOutlineDown
            size={14}
            className={`ml-2 flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isOpen && (
          <ul className={`absolute z-50 mt-1 w-full rounded-md border shadow-lg overflow-hidden ${
            isDarkMode
              ? "bg-gray-800 border-gray-600"
              : "bg-white border-gray-200"
          }`}>
            {categories.map((item, idx) => (
              <li
                key={idx}
                onClick={() => handleSelect(item)}
                className={`px-3 py-2 text-sm sm:text-base cursor-pointer capitalize transition-colors duration-150 ${
                  isDarkMode
                    ? "text-gray-200 hover:bg-gray-700"
                    : "text-slate-700 hover:bg-red-50 hover:text-red-500"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default CategoryFilter