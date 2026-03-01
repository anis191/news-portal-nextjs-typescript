"use client"
import { useContext } from 'react'
import { SearchProps } from '@/types/news'
import { ThemeContext } from '@/context/themeContext'

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const SearchBar = ({ onSearch }: SearchProps) => {
  const { isDarkMode } = useContext(ThemeContext) as ThemeContextType;

  return (
    <div className='mb-2 w-full'>
      <h3 className={`font-bold text-sm sm:text-base mb-1.5 ${isDarkMode ? "text-white" : "text-slate-700"}`}>
        Search News
      </h3>
      <input
        onChange={(e) => onSearch(e.target.value)}
        type='text'
        placeholder='Search news...'
        className={`w-full px-3 py-2 text-sm sm:text-base rounded-md border outline-none transition-colors duration-200 focus:ring-2 focus:ring-red-400 ${
          isDarkMode
            ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
            : "bg-white border-gray-300 text-slate-800 placeholder-gray-400"
        }`}
      />
    </div>
  )
}

export default SearchBar