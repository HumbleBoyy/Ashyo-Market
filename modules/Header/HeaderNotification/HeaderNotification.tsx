import CustomButton from '@/components/CustomButton'
import { LibraIcon, LikedIcon, ShoppingBagIcon, UserIcon } from "@/assets"
import { HeaderNotificationType } from '@/types/HeaderType'

const HeaderNotification = () => {
    const actionList:HeaderNotificationType[] = [
        {
            id:1,
            icon:<LibraIcon/>,
            bage:10,
        },
        {
            id:2,
            icon:<LikedIcon/>,
            bage:15,
        },
        {
            id:3,
            icon: <ShoppingBagIcon/>,
            bage:24,
        },
        {
            id:4,
            icon: <UserIcon/>,
            bage:undefined,
        }
    ]
  return (
    <div className="items-center gap-[5px] hidden sm:flex">
        {actionList.map((item:HeaderNotificationType)=> (
            <CustomButton key={item.id} bage={item.bage} extraClass="bg-[#EBEFF3] cursor-pointer !w-[60px] !h-[50px] !p-0 text-[#545D6A] text-center">
              {item.icon}
            </CustomButton>
        ))}

  </div>
  )
}

export default HeaderNotification
