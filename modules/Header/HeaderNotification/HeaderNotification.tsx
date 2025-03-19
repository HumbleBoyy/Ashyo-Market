import CustomButton from '@/components/CustomButton'
import { LibraIcon, LikedIcon, ShoppingBagIcon, UserIcon } from "@/assets"

const HeaderNotification = () => {
  return (
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
  )
}

export default HeaderNotification
