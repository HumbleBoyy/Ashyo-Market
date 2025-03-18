import { ArrowDownIcon, MainLogo, SearchIcon } from "@/assets"
import CustomButton from "@/components/CustomButton"
import { Link } from "@/i18n/navigation"
import { useTranslations } from "next-intl"


const HeaderMiddle = () => {
const t = useTranslations('Header')
  return (
    <div className='containers flex items-center justify-between py-2'>
      <Link href={"/"} className="flex items-center">
       <MainLogo/>
       <strong className="text-[#134E9B] text-[36px] font-black">Ashyo</strong>
      </Link>
      <div className="flex items-center gap-1">
        <CustomButton extraClass="text-white cursor-pointer" icon={<ArrowDownIcon/>} iconPosition={"right"}>
          {t("category")}
        </CustomButton>
        <div className="flex items-center w-[518px] h-[53px] bg-[#EBEFF3] rounded-[6px]">
          <input type="text" placeholder={t("search")} className="w-full px-5 outline-none text-[13px] text-[#00000033]"/>
          <CustomButton extraClass="rounded-l-none text-white h-[53px] cursor-pointer">
             <SearchIcon/>
          </CustomButton>
        </div>
      </div>
    </div>
  )
}

export default HeaderMiddle
