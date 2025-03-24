"use client"
import getProducts from "@/service/getProducts"
import { useTranslations } from "next-intl"
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductType } from "@/types/ProductType";
import ProductCard from "@/components/ProductCard";


const  RecentlyViewed = () => {
    const t = useTranslations('Hero')
    const {data:productsList} = getProducts()
  return (
    <div className="py-[100px] px-[10px]">
      <div className="containers">
        <h2 className="text-[25px] sm:text-[32px] font-bold text-start">{t("lastSeen")}</h2>
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
        </div>
    </div> 
  )
}

export default RecentlyViewed
