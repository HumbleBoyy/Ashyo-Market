"use client"
import { IMAGE_API } from '@/hooks/getEnv'
import getBrands from '@/service/getBrands'
import { BrandType } from '@/types/BrandType'
import Image from 'next/image'
import React from 'react'

const Brands = () => {
  const {data:brandsList} = getBrands()
  return (
    <div className='containers brands_wrapper'>
       
          {brandsList.map((item:BrandType)=> (
            <div className='brand_item' key={item.id}>
                <Image className='w-[200px] h-[70px] object-contain' src={`${IMAGE_API}/${item.image}`} alt={item.name} priority width={200} height={70}/>
            </div>
          ))}
       
    </div>
  )
}

export default Brands
