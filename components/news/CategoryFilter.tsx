import { CategoryProps } from '@/types/news'
import React from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

const CategoryFilter = ({onCategory}: CategoryProps) => {
    const categories = ["all",'Science','Technology','Environment','General','Economy','Finance']
  return (
    <div className='flex gap-2 items-center justify-center mx-4'>
        <h3 className='font-bold text-lg mb-2'>Filter</h3>
        <div>
            <Select onValueChange={(value) => onCategory(value === 'all' ? "" : value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                    {
                        categories.map((item, idx) => (
                            <SelectItem key={idx} value={item}>{item}</SelectItem>
                        ))
                    }
                </SelectGroup>
              </SelectContent>
            </Select>
        </div>
    </div>
  )
}

export default CategoryFilter