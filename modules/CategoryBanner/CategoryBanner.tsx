"use client"
import { IMAGE_API } from '@/hooks/getEnv'
import getCategory from '@/service/getCategory'
import { CategoryType } from '@/types/HeaderType'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import "./style.css"
const CategoryBanner = () => {
    const {data:categoriesBanner} = getCategory(6)
    const t = useTranslations("Hero")
  return (
    <div className='containers category_wrapper py-[100px] px-[2px]'>
        {...categoriesBanner.map((item:CategoryType)=> (
            <>
            <div className='category_item relative  flex justify-center items-center rounded-[6px] py-[20px]' key={item.id}>
               {!item.image ? <strong className='text-[16px] text-white moreText'>{item.name}</strong> : <Image className='w-[300px] h-[200px] object-contain items-end' src={`${IMAGE_API}/${item.image}`} alt={item.name}width={200} height={70} priority />}
               <button className='absolute text-[14px] p-[4px] border-[1px] top-[5px] left-[5px] rounded-[30px] border-white bg-transparent text-white text-center'>{item.name}</button>
            </div>
            
            </>
         ))}
    </div>
  )
}

export default CategoryBanner
