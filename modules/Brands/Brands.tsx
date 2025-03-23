"use client"
import { IMAGE_API } from '@/hooks/getEnv'
import getBrands from '@/service/getBrands'
import { BrandType } from '@/types/BrandType'
import Image from 'next/image'
import "./style.css"

const Brands = () => {
  const {data:brandsList} = getBrands()
  console.log(brandsList)
  return (
    <div className='containers brands_wrapper py-[100px]'>
         {brandsList.map((item:BrandType)=> (
            <div className='brand_item flex justify-center items-center rounded-[6px] py-[20px]' key={item.id}>
               {!item.image ? <strong className='text-[16px] text-[#134E9B] moreText'>{item.name}</strong> : <Image className='w-[200px] h-[70px] object-contain' src={`${IMAGE_API}/${item.image}`} alt={item.name}width={200} height={70} priority />}
            </div>
          ))}
    </div>
  )
}

export default Brands
