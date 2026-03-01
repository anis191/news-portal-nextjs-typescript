import { SearchProps } from '@/types/news'
import React from 'react'
import { Input } from '../ui/input'

const SearchBar = ({onSearch}: SearchProps) => {
  return (
    <div className='mb-4 md:w-2/4'>
        <h3 className='font-bold text-lg mb-2'>Search News</h3>
        <Input onChange={(e) => onSearch(e.target.value)} type='text' placeholder='Search news...' className='p-2 border-gray-300 rounded-md w-full'/>
    </div>
  )
}

export default SearchBar