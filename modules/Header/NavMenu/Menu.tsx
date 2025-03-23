"use client"
import { MenuIcon } from "@/assets"
import { Context } from "@/context/Context"
import { useContext } from "react"

const Menu = () => {
  const {openCategory, setOpenCategory} = useContext(Context)
  return (
    <div className='block sm:hidden' onClick={()=> setOpenCategory(!openCategory)}>
        <MenuIcon />
    </div>
  )
}

export default Menu
