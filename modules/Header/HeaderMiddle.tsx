import {MainLogo } from "@/assets"
import { Link } from "@/i18n/navigation"
import { useTranslations } from "next-intl"
import HeaderSearch from "./HeaderSearch/HeaderSearch"
import HeaderNotification from "./HeaderNotification/HeaderNotification"
import Menu from "./NavMenu/Menu"


const HeaderMiddle = () => {
const t = useTranslations('Header')
  return (
    <div className='containers flex items-center justify-between py-2 px-2'>
      <div className="flex items-center gap-0 sm:gap-[10px]">
        <Link href={"/"} className="flex items-center">
         <MainLogo/>
         <strong className="text-[#134E9B] text-[33px] sm:text-[36px] font-black">Ashyo</strong>
        </Link>
      </div>
       <HeaderSearch/>
       <HeaderNotification/>
       <Link href={"tel:+998711234567"} className="blcok sm:hidden font-semibold text-[15px] text-[#203F68]">+998 (71) 123-45-67</Link>
       <Menu/>
    </div>
  )
}

export default HeaderMiddle
