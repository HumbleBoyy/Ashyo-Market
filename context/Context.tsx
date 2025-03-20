"use client"
import { ContextType } from "@/types/ContextType";
import { createContext, FC, ReactNode, useState } from "react";


export const Context = createContext<ContextType>({
    openCategory:false,
    setOpenCategory:()=> null
})

export const GlobalContextProvider:FC<{children:ReactNode}> = ({children}) => {
    const [openCategory,setOpenCategory] = useState<boolean>(false)
    return <Context.Provider value={{openCategory, setOpenCategory}}>{children}</Context.Provider>
}