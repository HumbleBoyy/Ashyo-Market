import {MainLogo } from "@/assets"
import { Link } from "@/i18n/navigation"
import { useTranslations } from "next-intl"
import HeaderSearch from "./HeaderSearch/HeaderSearch"
import HeaderNotification from "./HeaderNotification/HeaderNotification"


const HeaderMiddle = () => {
const t = useTranslations('Header')
  return (
    <div className='containers flex items-center justify-between py-2'>
      <Link href={"/"} className="flex items-center">
       <MainLogo/>
       <strong className="text-[#134E9B] text-[36px] font-black">Ashyo</strong>
      </Link>
      <div className="flex items-center gap-[15px]">
       <HeaderSearch/>
       <HeaderNotification/>
      </div>
    </div>
  )
}

export default HeaderMiddle
