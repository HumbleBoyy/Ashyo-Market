"use client"
import { LikedIcon } from '@/assets'
import { IMAGE_API } from '@/hooks/getEnv'
import Footer from '@/modules/Footer/Footer'
import ProductsSecond from '@/modules/Products/ProductsSecond'
import Comments from '@/modules/Products/SinglePage/Comments'
import Features from '@/modules/Products/SinglePage/Features'
import getSingleProduct from '@/service/getSingleProduct'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { FaScaleUnbalanced, FaTruckFast } from 'react-icons/fa6'
import { IoMdTime } from 'react-icons/io'
import { IoStorefrontSharp } from 'react-icons/io5'
import "../style.css"

const Product = () => {
    const formatNumber = (num: number | null | undefined) => {
        if (num === null || num === undefined) return "N/A"; 
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    const {id} = useParams()
    const {data:singleData} = getSingleProduct(id)
    const t = useTranslations("SinglePage")

    const price = (Math.floor(singleData.price) / 100) * 2.5;
    const formattedPice = `${price.toLocaleString()}`
    const [variationACtive, setVariationActive] = useState<"features" | "comments">("features")

  return (
  <>
   <div className='containers flex flex-col py-[50px] px-[5px] sm:px-[10px]'>
  <div className='single_page'>
   <div className='flex flex-col'>
      <h2 className='singlePage_title font-bold text-[32px]'>{singleData.name}</h2>
      <div className='relative singLepage_image_wrapper flex justify-center items-center mt-[30px] w-[550px] h-[430px] bg-[#EBEFF3] rounded-[10px]'>
         <Image 
            src={`${IMAGE_API}/${singleData.image}`} 
            alt={`${singleData.name}`} 
            width={340} 
            height={340} 
            priority
            className="object-contain singlePage_image" 
         />
         <div className='absolute text-[24px] text-[#5F728B] font-light top-[25px] right-[30px] flex gap-[20px]'>
            <FaScaleUnbalanced className='cursor-pointer'/>
            <FaRegHeart className='cursor-pointer' />
         </div>
      </div>
      
      </div>
       <div className='price_shipping_div flex flex-col gap-[35px] px-[2px]'>
              <h3 className='text-[32px] font-bold text-[#06172D] flex items-baseline gap-[10px]'><span className='text-[16px] text-[#515D6C] font-normal'>{t("price")}</span>{formatNumber(singleData.price)} <span className='!text-[24px]'>UZS</span></h3>
              <div className='flex flex-col gap-[10px]'>
                 <div className='discount_wrapper flex items-center justify-center w-[475px] h-[55px] rounded-[6px] bg-[#EBEFF3]'>
                      <p className='flex items-center gap-[2px] text-[16px] text-[#545D6A] font-normal'>{t("month")} {formattedPice} {t("fixedPrice")}</p>
                 </div>
                 <div className='flex items-center gap-[15px]'>
                     <button className='singlePage_two_buttons w-[230px] cursor-pointer text-[16px] font-normal border-[1px] border-[#134E9B] text-[#134E9B] rounded-[6px] bg-none py-[15px] px-[40px]'>{t("addToBasket")}</button>
                     <button className='singlePage_two_buttons w-[230px] cursor-pointer text-[16px] font-normal border-[1px] border-[#134E9B] text-white rounded-[6px] bg-[#134E9B] py-[15px] px-[40px]'>{t("buy")}</button>
                 </div>
              </div>
              <div className='flex flex-col gap-[20px]'>
                 <p className='text-[16px] flex gap-[15px] items-center font-normal text-[#06172DB2]'><FaTruckFast />{t("shipping")}</p>
                 <p className='text-[16px] flex gap-[15px] items-center font-normal text-[#06172DB2]'><IoStorefrontSharp />{t("fromStore")}</p>
                 <p className='text-[16px] flex gap-[15px] items-center font-normal text-[#06172DB2]'><IoMdTime/>{t("deliveryTime")}</p>
              </div>
      </div>
   </div>   
      <div className='features_wrapper flex flex-col'>
       <div className='flex items-center gap-[80px] mb-[40px] mt-[80px]'>
          <strong onClick={()=> setVariationActive("features")} className={` ${variationACtive === "features" ? "font-bold" : "text-[18px] font-normal text-[#515D6C]"} cursor-pointer`}>{t("features")}</strong>
          <strong onClick={()=> setVariationActive("comments")} className={` ${variationACtive === "comments" ? "font-bold" : "text-[18px] font-normal text-[#515D6C]"} cursor-pointer`}>{t("opinion")}</strong>
       </div>
        {variationACtive === "features" ? <Features id={id}/> : <Comments/>}
       </div>   
    </div>
    <ProductsSecond/>
    <Footer/>
  </>
  )
}

export default Product
