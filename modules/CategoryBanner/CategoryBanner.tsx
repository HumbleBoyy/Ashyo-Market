"use client"
import getCategory from '@/service/getCategory'
import { CategoryType } from '@/types/HeaderType'
import { useTranslations } from 'next-intl'
import React from 'react'

const CategoryBanner = () => {
    const {data:categoriesBanner} = getCategory(6)
    const t = useTranslations("Hero")

    const moreObj:CategoryType = {
        id: 5,
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
    <div className='containers py-[100px] px-[2px]'>
      CategoryBanner
    </div>
  )
}

export default CategoryBanner
