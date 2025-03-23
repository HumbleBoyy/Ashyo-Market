import Brands from "@/modules/Brands/Brands"
import CategoryBanner from "@/modules/CategoryBanner/CategoryBanner"
import Hero from "@/modules/Hero/Hero"
import Products from "@/modules/Products/Products"
import ProductsSecond from "@/modules/Products/ProductsSecond"
const page = () => {
  return (
    <>
      <Hero/>
      <Brands/>
      <Products/>
      <ProductsSecond/>
      <CategoryBanner/>
    </>
  )
}
export default page
