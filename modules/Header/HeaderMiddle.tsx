import { ArrowDownIcon, LibraIcon, LikedIcon, MainLogo, SearchIcon, ShoppingBagIcon, UserIcon } from "@/assets"
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
      <div className="flex items-center gap-[15px]">
        <CustomButton extraClass="text-white cursor-pointer" icon={<ArrowDownIcon/>} iconPosition={"right"}>
          {t("category")}
        </CustomButton>
        <div className="flex items-center w-[518px] h-[53px] bg-[#EBEFF3] rounded-[6px]">
          <input type="text" placeholder={t("search")} className="w-full px-5 outline-none text-[15px] text-[#000000]"/>
          <CustomButton extraClass="rounded-l-none text-white h-[53px] cursor-pointer">
             <SearchIcon/>
          </CustomButton>
        </div>
        <div className="flex items-center gap-[10px]">
          <CustomButton bage={10} extraClass="bg-[#EBEFF3] cursor-pointer !w-[60px] !h-[50px] !p-0 text-[#545D6A] text-center">
             <LibraIcon/>
          </CustomButton>
          <CustomButton bage={20} extraClass="bg-[#EBEFF3] cursor-pointer !w-[60px] !h-[50px] !p-0 text-[#545D6A] text-center">
             <LikedIcon/>
          </CustomButton>
          <CustomButton bage={30} extraClass="bg-[#EBEFF3] cursor-pointer !w-[60px] !h-[50px] !p-0 text-[#545D6A] text-center">
             <ShoppingBagIcon/>
          </CustomButton>
          <CustomButton extraClass="bg-[#EBEFF3] cursor-pointer !w-[60px] !h-[50px] !p-0 text-[#545D6A] text-center">
             <UserIcon/>
          </CustomButton>
        </div>
      </div>
    </div>
  )
}

export default HeaderMiddle
