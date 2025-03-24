import { AppStore, FaceBook, Play, Skype, Telegram, YouTube } from "@/assets"
import { ReactNode } from "react"
import { useTranslations } from "use-intl"
import Instagram from "../../public/Insta.svg"
import { Link } from "@/i18n/navigation"
import { IoChatboxEllipsesOutline } from "react-icons/io5"

const Footer = () => {
    const t = useTranslations("Footer")
    const socialMediaBtn:{id:number, icon:ReactNode}[] = [
        {
            id:1,
            icon:<FaceBook/>
        },
        {
            id:2,
            icon:<YouTube/>
        },
        {
            id:3,
            icon:<Telegram/>
        },
        {
            id:4,
            icon:<Skype/>
        },
    ]

  return (
   <footer className='containers flex items-center justify-between py-[100px]'>
        <div className="flex flex-col gap-[40px]">
            <div className="flex flex-col gap-[20px]">
                <h2 className="text-[20px] text-[#000000B2] font-bold">{t("socialMedia")}</h2>
                <div className="flex items-center gap-[10px]">
                    {socialMediaBtn.map((item:{id:number, icon:ReactNode})=> (
                        <button className="py-[10px] px-[12px] rounded-[7px] w-[45px] h-[45px] cursor-pointer bg-[#EBEFF3]" key={item.id}>{item.icon}</button>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-[20px]">
                <h2 className="text-[20px] text-[#000000B2] font-bold">{t("download")}</h2>
                <div className="flex items-center gap-[10px]">
                   <button className="flex justify-center items-center gap-[12px] text-[16px] font-bold rounded-[7px] w-[190px] h-[65px] cursor-pointer bg-[#EBEFF3]"><AppStore/>App Store</button>
                   <button className="flex justify-center items-center gap-[12px] text-[16px] font-bold rounded-[7px] w-[190px] h-[65px] cursor-pointer bg-[#EBEFF3]"><Play/>Google Play</button>
                </div>
            </div>
            <div className="flex justify-items-start">
            <p className="text-[12px] text-[#00000066]">{t("date")}</p>
        </div>
        </div>
        <div className="flex flex-col gap-[20px]">
            <h2 className="text-[20px] font-bold">{t("menu")}</h2>
            <ul className="flex flex-col gap-[12px]">
              <li className="list-none text-[16px] text-[#000000B2] cursor-pointer">{t("about")}</li>
              <li className="list-none text-[16px] text-[#000000B2] cursor-pointer">{t("terms")}</li>
              <li className="list-none text-[16px] text-[#000000B2] cursor-pointer">{t("privacy")}</li>
              <li className="list-none text-[16px] text-[#000000B2] cursor-pointer">{t("returnItem")}</li>
              <li className="list-none text-[16px] text-[#000000B2] cursor-pointer">{t("contactUs")}</li>
            </ul>
        </div>
        <div className="flex flex-col gap-[32px]">
            <div className="flex flex-col gap-[15px]">
              <h2 className="text-[20px] text-[#000000B2] font-bold">{t("contact")}</h2>
              <Link href={"tel:+998711234567"} className="font-bold text-[24px] text-[#00000080]">+998 (71) 123-45-67</Link>
            </div>
            <div className="flex flex-col gap-[12px]">
                <h3 className="text-[16px] text-[#000000B2] font-normal">{t("question")}</h3>
                <div className="flex items-center justify-between px-[12px] w-[315px] h-[55px] py-[12px] bg-[#EBEFF3] rounded-[6px]">
                     <input type="text" placeholder={t("askQuestion")} className="bg-transparent outline-none w-full py-[10px] text-[12px] text-[#0000004D]" />
                     <IoChatboxEllipsesOutline   className="flex justify-end text-[30px]"/>
                </div>
            </div>
        </div>
   </footer>
  )
}

export default Footer
