"use client"
import getProducts from "@/service/getProducts"
import { useTranslations } from "next-intl"
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductType } from "@/types/ProductType";
import ProductCard from "@/components/ProductCard";


const Products = () => {
    const t = useTranslations('Hero')
    const {data:productsList} = getProducts()
  return (
    <div className="py-[100px] px-[10px]">
      <div className="containers">
        <h2 className="text-[25px] sm:text-[32px] font-bold text-start">{t("products")}</h2>
      </div>
        <div className="py-[100px] carousel">
          <Swiper
            slidesPerView={5}
            spaceBetween={10}
            loop={true}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            {productsList.map((item:ProductType)=> (
                <SwiperSlide key={item.id}>
                  <ProductCard item={item}/>
                </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="containers products">
           {productsList.map((item:ProductType)=> (
             <ProductCard item={item} key={item.id}/>
           ))}
           <div className="flex justify-center items-center mt-[30px]">
              <button className="mx-auto  py-[10px] px-[70px] bg-[#EBEFF3] text-[14px] font-normal">{t("more")}</button>
           </div>
        </div>
    </div> 
  )
}

export default Products
