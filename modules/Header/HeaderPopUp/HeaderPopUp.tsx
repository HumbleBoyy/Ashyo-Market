"use client"
import { Context } from '@/context/Context'
import { IMAGE_API } from '@/hooks/getEnv'
import getCategory from '@/service/getCategory'
import { CategoryType } from '@/types/HeaderType'
import Image from 'next/image'
import React, { useContext, useState } from 'react'

const HeaderPopUp = () => {
    const {openCategory} = useContext(Context)
    const {data:categoryList} = getCategory()
    const [childCategory, setChildCategory] = useState<CategoryType>()
    const [activeItem, setActiveItem] = useState<number | null>(null)
    const handleShowCategory = (obj:CategoryType) => {
        setChildCategory(obj)
        setActiveItem(obj.id)
    }
  return (
    <div className={`w-full ${openCategory === true ? "shadow-xl h-[500px]" : "h-0 overflow-hidden"}   duration-300 flex absolute top-[60%] z-50`}>
      <ul className='w-[30%] bg-[#EBEFF3] p-10'>
          {categoryList.map((item:CategoryType)=> 
            <li onMouseEnter={()=> handleShowCategory(item)} key={item.id} className={`flex items-center py-[12px] px-[40px] gap-2 ${activeItem === item.id && "bg-white"}  rounded-md cursor-pointer`}>
                <Image className='h-[20px] w-[22px]' src={`${IMAGE_API}/${item.icon}`} alt="Ashyo" priority width={22} height={20}/>
                <strong className='text-[16px] text-[#545D6A] font-normal'>{item.name}</strong>
            </li>
          )}
      </ul>
      <ul className='w-[70%] flex flex-col bg-[#FFFFFF] p-10 gap-[20px]'>
          <strong className='text-[16px] font-semibold leading-[100%]'>{childCategory?.name}</strong>
          {childCategory?.subCategories.map((item:CategoryType)=><li key={item.id} className='text-[#545D6A] text-[14px] font-normal'>{item.name}</li>)}
      </ul>
    </div>
  )
}

export default HeaderPopUp
