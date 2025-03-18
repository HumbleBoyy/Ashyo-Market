import { ArrowDownIcon, MainLogo } from "@/assets"
import CustomButton from "@/components/CustomButton"
import { Link } from "@/i18n/navigation"
import { useTranslations } from "next-intl"


const HeaderMiddle = () => {
const t = useTranslations('Header')
  return (
    <div className='containers'>
      <Link href={"/"} className="flex items-center">
       <MainLogo/>
       <strong className="text-[#134E9B] text-[36px] font-black">Ashyo</strong>
      </Link>
      <div>
        <CustomButton extraClass="text-white" icon={<ArrowDownIcon/>} iconPosition={"right"}>
          
          {t("category")}
        </CustomButton>
      </div>
    </div>
  )
}

export default HeaderMiddle
