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

    const formatNumber = (num: number | null | undefined) => {
        if (num === null || num === undefined) return "N/A"; // Handle invalid numbers
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
  return (
    <div className='containers py-[50px]'>
       <h2 className='font-bold text-[32px]'>{singleData.name}</h2>
       <div className='flex items-center gap-[32px]'>
           <div className='relative flex justify-center items-center mt-[30px] w-[530px] h-[430px] bg-[#EBEFF3] rounded-[10px]'>
              <Image src={`${IMAGE_API}/${singleData.image}`} alt={`${singleData.name}`} width={340} height={340} priority/>
              <div className='absolute text-[24px] text-[#5F728B] font-light top-[25px] right-[30px] flex gap-[20px]'>
                <FaScaleUnbalanced className='cursor-pointer'/>
                <FaRegHeart className='cursor-pointer' />
              </div>
           </div>
           <div className='flex flex-col gap-[35px]'>
              <h3 className='text-[32px] font-bold text-[#06172D] flex items-baseline gap-[10px]'><span className='text-[16px] text-[#515D6C] font-normal'>{t("price")}</span>{formatNumber(singleData.price)} <span className='!text-[24px]'>UZS</span></h3>
              <div className='flex items-center justify-center w-[475px] h-[55px] rounded-[6px] bg-[#EBEFF3]'>
                   <p className='flex items-center gap-[2px] text-[16px] text-[#545D6A] font-normal'>{t("month")} {(Math.floor(singleData.price) / 100) * 2} {t("fixedPrice")}</p>
              </div>
           </div>
       </div>
    </div>
  )
}

export default Product
