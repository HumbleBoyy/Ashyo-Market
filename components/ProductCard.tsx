import { ShoppingBagIcon } from '@/assets'
import { IMAGE_API } from '@/hooks/getEnv'
import { ProductType } from '@/types/ProductType'
import Image from 'next/image'
import React, { FC } from 'react'
import { RiShoppingBag2Fill } from "react-icons/ri";
import { FaBalanceScaleLeft, FaRegHeart } from 'react-icons/fa'

const ProductCard:FC<{item:ProductType}> = ({item}) => {
  return (
    <div className='w-[270px] flex flex-col items-start gap-[15px]'>
        <div className='relative flex justify-center items-center rounded-[6px] w-full h-[270px] bg-[#EBEFF3]'>
           <Image className='w-[200px] h-[200px] object-cover' src={`${IMAGE_API}/${item.image}`} alt={item.name} width={200} height={200} priority/>
           <div className='absolute text-[24px] top-[10px] right-[20px]'>
               <FaRegHeart color='#545D6A'/>
           </div>
        </div>
        <p className='text-[14px] text-[#545D6A] line-clamp-2 text-start'>{item.description}</p>
        <div className='flex items-center gap-5'>
            <strong className='text-[20px] text-[#0A1729]'>{item.price} usz</strong>
            <div className='flex items-center gap-[10px]'>
               <button className='py-[10px] px-[15px] border-[1px] border-[#EBEFF3] text-[#545D6A] rounded-[6px] cursor-pointer'><FaBalanceScaleLeft /></button>
               <button className='py-[10px] px-[15px] bg-[#134E9B] border-[1px] border-[#134E9B] text-white rounded-[6px] cursor-pointer'><RiShoppingBag2Fill /></button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard