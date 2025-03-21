import { ProductType } from "./ProductType"

export interface BannerType{
    id: number
    product_id: number
    category_id: number | null | string
    title: string | null
    description:string
    image:string,
    name:string,
    createdAt:string,
    updatedAt:string,
    product:ProductType
    category: null
}