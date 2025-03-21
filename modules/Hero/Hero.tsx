"use client"
import getBanners from "@/service/getBanners"
import {  Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';
import { BannerType } from "@/types/BannerType";
import Image from "next/image";
import { IMAGE_API } from "@/hooks/getEnv";
import CustomButton from "@/components/CustomButton";
import { useTranslations } from "next-intl";

const Hero = () => {
    const {data:bannersList} = getBanners()
    const t = useTranslations("Hero")
  return (
    <div className="w-full bg-[#F3F0F0] h-[450px]">
      <div className="containers">
      <Swiper
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {bannersList.map((item:BannerType)=> (
            <SwiperSlide>
                <div className="flex items-center justify-between">
                     <div className="flex flex-col items-start text-start gap-[20px]">
                          <h2 className="font-black text-[44px] text-[#0A1729] leading-[120%]">{item.name}</h2>
                          <p className="font-normal text-[16px] text-[#545D6A] leading-[100%]">{item.description}</p>
                          <CustomButton extraClass={`font-normal text-white text-[16px] leading-[100%] w-[160px] !p-4`}>{t("more")}</CustomButton>
                     </div>
                     <Image className="w-[500px] h-[450px] object-cover" src={`${IMAGE_API}/${item.image}`} alt={item.name} priority width={750} height={730}/>
                </div>
            </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  )
}

export default Hero
