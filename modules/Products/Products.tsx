"use client"
import getProducts from "@/service/getProducts"
import "./style.css"

const Products = () => {
    const {data:productsList} = getProducts()
    console.log(productsList)
  return (
    <div className="containers py-[100px]">
      <h2></h2>
    </div>
  )
}

export default Products
