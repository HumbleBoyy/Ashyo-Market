"use client"
import { Context } from '@/context/Context'
import { IMAGE_API } from '@/hooks/getEnv'
import getCategory from '@/service/getCategory'
import { CategoryType } from '@/types/HeaderType'
import Image from 'next/image'
import React, { useContext } from 'react'

const HeaderPopUp = () => {
    const {openCategory} = useContext(Context)
    const {data:categoryList, isLoading} = getCategory()
    console.log(categoryList)
  return (
    <div className={`w-full ${openCategory === true ? "h-0" : "border-1 h-[500px]"}   duration-300 flex absolute top-[100%]`}>
      <ul className='w-[30%] bg-[#EBEFF3] p-10'>
          {categoryList.map((item:CategoryType)=> 
            <li key={item.id} className='flex items-center py-[12px] px-[40px]'>
                <Image className='h-[20px] w-[22px]' src={`${IMAGE_API}/${item.icon}`} alt="Ashyo" priority width={22} height={20}/>
                <strong className='text-[16px] text-[#545D6A] font-normal'>{item.name}</strong>
            </li>
          )}
      </ul>
      <div className='w-[70%] bg-[#FFFFFF]'></div>
    </div>
  )
}

export default HeaderPopUp
