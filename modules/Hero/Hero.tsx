"use client"
import getBanners from "@/service/getBanners"
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

const Hero = () => {
    const {data:bannersList} = getBanners()
  return (
    <div className="w-full bg-[#F3F0F0] h-[450px]">
      <div className="containers">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
      </div>
    </div>
  )
}

export default Hero
