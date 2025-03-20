import { ReactNode } from "react";

export interface HeaderTopTypes{
      id:number,
      icon?:ReactNode | null,
      title: string | null
      path: string
}

export interface HeaderNotificationType {
      id:number,
      icon?:ReactNode,
      bage?:number | null | undefined
}

export interface CategoryType {
      id:number,
      createdAt:string
      icon:string
      image:string
      name:string
      parentCategoryId:null | number
      subCategories:CategoryType[]
      updatedAt:string
}