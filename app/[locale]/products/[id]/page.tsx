"use client"
import { LikedIcon } from '@/assets'
import { IMAGE_API } from '@/hooks/getEnv'
import getSingleProduct from '@/service/getSingleProduct'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { FaRegHeart } from 'react-icons/fa'
import { FaScaleUnbalanced } from 'react-icons/fa6'

const Product = () => {
    const {id} = useParams()
    const {data:singleData} = getSingleProduct(id)
    const t = useTranslations("SinglePage")
    console.log(singleData)
  return (
    <div className='containers py-[50px]'>
       <h2 className='font-bold text-[32px]'>{singleData.name}</h2>
       <div className='flex gap-[32px]'>
           <div className='relative flex justify-center items-center mt-[30px] w-[530px] h-[430px] bg-[#EBEFF3] rounded-[10px]'>
              <Image src={`${IMAGE_API}/${singleData.image}`} alt={`${singleData.name}`} width={340} height={340} priority/>
              <div className='absolute text-[24px] text-[#5F728B] font-light top-[25px] right-[30px] flex gap-[20px]'>
                <FaScaleUnbalanced className='cursor-pointer'/>
                <FaRegHeart className='cursor-pointer' />
              </div>
           </div>
           <div className='flex gap-[35px]'>
              <div className='flex items-center'><span></span></div>
           </div>
       </div>
    </div>
  )
}

export default Product
