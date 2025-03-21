"use client"
import HeaderCategorySkeleton from '@/components/HeaderCategorySkeleton'
import { Link } from '@/i18n/navigation'
import getCategory from '@/service/getCategory'
import { CategoryType } from '@/types/HeaderType'
import React from 'react'

const HeaderCategory = () => {
    const {data:categoryList} = getCategory()
    console.log(categoryList)
  return (
    <div className='containers w-full py-5'>
        <HeaderCategorySkeleton/>
      <ul className='hidden lg:flex items-center justify-between'>
        {categoryList.map((item:CategoryType)=> <Link className='text-[16px] font-normal text-[#545D6A]' href={"#"} key={item.id}>{item.name}</Link>)}
      </ul>
    </div>
  )
}

export default HeaderCategory
