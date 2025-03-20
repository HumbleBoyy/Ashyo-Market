"use client"
import { ArrowDownIcon, SearchIcon } from '@/assets'
import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/CustomInput'
import { Context } from '@/context/Context'
import { useTranslations } from 'next-intl'
import { useContext } from 'react'

const HeaderSearch = () => {
    const t = useTranslations('Header')
    const {setOpenCategory, openCategory} = useContext(Context)
  return (
     <>
      <div className="flex items-center searchDiv">
          <CustomButton onBlur={()=> setOpenCategory(false)} onClick={()=> setOpenCategory(!openCategory)} extraClass="text-white cursor-pointer" icon={<ArrowDownIcon arrowClassName={`${openCategory ?  "rotate-x-[180deg]": ""} duration-300`}/>} iconPosition={"right"}>
            {t("category")}
          </CustomButton>
          <div className="flex items-center w-[400px]  xl:w-[518px] h-[53px] bg-[#EBEFF3] rounded-[6px]">
            <CustomInput type={"text"} placeholder={t("search")}/>
            <CustomButton extraClass="rounded-l-none text-white h-[53px] cursor-pointer">
              <SearchIcon/>
            </CustomButton>
          </div>
      </div>
    
     </>
  )
}

export default HeaderSearch
