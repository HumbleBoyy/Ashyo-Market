import { useTranslations } from 'next-intl'
import HeadPhone from "../../public/HeadPhone.svg"
import Image from 'next/image'
const Music = () => {
    const t = useTranslations("Hero")
  return (
    <div className='relative containers bg-[#282828] w-full h-[420px] rounded-[10px] py-[100px]'>
       <div className=' flex justify-end'>
         <div className='flex flex-col gap-[20px]'>
            <h2 className='text-[32px] font-bold text-white w-[438px]'>{t("music")}</h2>
            <button className='w-[160px] bg-[#FFFFFF] text-[16px] py-[18px] px-[16px] rounded-[6px]'>{t("more")}</button>
         </div>
       </div>
       <div className='absolute top-0'>
          <Image  src={HeadPhone} alt='HeadPhone' width={520} height={490} priority/>
       </div>
    </div>
  )
}

export default Music
