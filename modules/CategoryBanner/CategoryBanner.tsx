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

    const moreObj:CategoryType = {
        id: 78,
        name:t("more"),
        image:"",
        icon:"",
        parentCategoryId: null,
        createdAt:"",
        updatedAt:"",
        subCategories: []
    }
    console.log([...categoriesBanner, moreObj])
  return (
    <div className='containers category_wrapper py-[100px] px-[2px]'>
        {[...categoriesBanner, moreObj].map((item:CategoryType)=> (
            <div className='category_item flex justify-center items-center rounded-[6px] py-[20px]' key={item.id}>
               {!item.image ? <strong className='text-[16px] text-[#134E9B] moreText'>{item.name}</strong> : <Image className='w-[250px] h-[250px] object-contain items-end' src={`${IMAGE_API}/${item.image}`} alt={item.name}width={200} height={70} priority />}
            </div>
         ))}
    </div>
  )
}

export default CategoryBanner
