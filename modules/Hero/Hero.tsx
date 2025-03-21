"use client"
import getBanners from "@/service/getBanners"

const Hero = () => {
    const {data:bannersList} = getBanners()
    console.log(bannersList)
  return (
    <div className="w-full bg-[#F3F0F0] h-[450px]">
      <div className="containers">

      </div>
    </div>
  )
}

export default Hero
