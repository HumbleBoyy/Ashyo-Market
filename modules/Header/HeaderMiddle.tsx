import {MainLogo } from "@/assets"
import { Link } from "@/i18n/navigation"
import HeaderSearch from "./HeaderSearch/HeaderSearch"
import HeaderNotification from "./HeaderNotification/HeaderNotification"
import Menu from "./NavMenu/Menu"
import HeaderSearchMobile from "./HeaderSearchMobile/HeaderSearchMobile"
import HeaderPopUp from "./HeaderPopUp/HeaderPopUp"
import HeaderCategory from "./HeaderCategory"


const HeaderMiddle = () => {
  return (
    <div className='containers relative flex flex-col py-1 px-1'>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-0 sm:gap-[10px]">
            <Link href={"/"} className="flex items-center">
            <MainLogo/>
            <strong className="text-[#134E9B] text-[33px] sm:text-[36px] font-black">Ashyo</strong>
            </Link>
          </div>
            <HeaderSearch/>
            <HeaderNotification/>
            <Link href={"tel:+998711234567"} className="blcok sm:hidden font-semibold text-[15px] text-[#203F68] phoneNumberMobile">+998 (71) 123-45-67</Link>
            <Menu/>
        </div>
        <HeaderPopUp/>
        <HeaderSearchMobile/>
        <HeaderCategory/>
    </div>
  )
}

export default HeaderMiddle
