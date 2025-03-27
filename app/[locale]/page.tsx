"use client"
import Brands from "@/modules/Brands/Brands"
import CategoryBanner from "@/modules/CategoryBanner/CategoryBanner"
import Footer from "@/modules/Footer/Footer"
import Hero from "@/modules/Hero/Hero"
import Music from "@/modules/Music/Music"
import Products from "@/modules/Products/Products"
import ProductsSecond from "@/modules/Products/ProductsSecond"
import RecentlyViewed from "@/modules/Products/RecentlyViwed"
const page = () => {
  return (
    <>
      <Hero/>
      <Brands/>
      <Products/>
      <CategoryBanner/>
      <ProductsSecond/>
      <Music/>
      <RecentlyViewed/>
      {/* <Footer/> */}
    </>
  )
}
export default page
