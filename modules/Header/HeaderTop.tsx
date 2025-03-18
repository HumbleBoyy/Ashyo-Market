import { LocationIcon } from "@/assets"
import LangConfig from "@/components/LangConfig"
import { Link } from "@/i18n/navigation"
import { HeaderTopTypes } from "@/types/HeaderType"
import { useTranslations } from "next-intl"



const HeaderTop = () => {
  const t = useTranslations('Header')
  const navList:HeaderTopTypes[] = [
    {
       id:1,
       icon:<LocationIcon/>,
       title:t("cityName"),
       path:"/"
    },
    {
      id:2,
      icon:null,
      title:t("about"),
      path:"/aboutus"
    },
    {
      id:3,
      icon:null,
      title:t("products"),
      path:"/products"
    },
    {
        id:4,
        icon:null,
        title:t("contact"),
        path:"/contacts"
    },
  ]
  return (
    <div className='bg-[#EBEFF3] w-full p-5 hidden sm:block'>
        <div className="containers flex justify-between items-center">
            <nav className=" flex items-center gap-5">
              {navList.map((item:HeaderTopTypes) => <Link className="flex items-center gap-1 text-[14px] hover:text-[#134E9B] duration-300 text-[#545D6A]" href={item.path} key={item.id}><span>{item.icon  && item.icon}</span> {item.title}</Link>)}
            </nav>

            <div className="flex items-center gap-[25px]">
               <Link className="text-[#545D6A] text-[14px] hover:text-[#134E9B] duration-300 font-semibold" href={"tel:+998711234567"}>+998 (71) 123-45-67</Link>
               <LangConfig/>
            </div>
        </div>
    </div>
  )
}

export default HeaderTop
