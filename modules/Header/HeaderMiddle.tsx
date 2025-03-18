import { MainLogo } from "@/assets"
import { Link } from "@/i18n/navigation"


const HeaderMiddle = () => {
  return (
    <div className='containers'>
      <Link href={"/"} className="flex items-center">
       <MainLogo/>
       <strong className="text-[#134E9B] text-[36px] font-black">Ashyo</strong>
      </Link>
    </div>
  )
}

export default HeaderMiddle
