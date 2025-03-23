"use client"
import getProducts from "@/service/getProducts"
import "./style.css"
import { useTranslations } from "next-intl"

const Products = () => {
    const t = useTranslations('Hero')
    const {data:productsList} = getProducts()
    console.log(productsList)
  return (
    <div className="containers py-[100px]">
      <h2 className="text-[32px] font-bold text-start px-[10px]">{t("products")}</h2>
    </div>
  )
}

export default Products
