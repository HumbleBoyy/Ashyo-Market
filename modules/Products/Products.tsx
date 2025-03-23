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
    console.log(productsList)
  return (
    <div className="py-[100px] px-[10px]">
      <div className="containers">
        <h2 className="text-[32px] font-bold text-start">{t("products")}</h2>
      </div>
        <div className="py-[100px]">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
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
    </div> 
  )
}

export default Products
