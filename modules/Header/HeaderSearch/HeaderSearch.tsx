"use client"
import { ArrowDownIcon, SearchIcon } from '@/assets'
import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/CustomInput'
import { Context } from '@/context/Context'
import debounce from '@/hooks/debounce'
import { instance } from '@/hooks/instance'
import { CategoryType } from '@/types/HeaderType'
import { useTranslations } from 'next-intl'
import { useContext, useEffect, useState } from 'react'

const HeaderSearch = () => {
    const t = useTranslations('Header')
    const {setOpenCategory, openCategory} = useContext(Context)

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [searchValue, setSearchValue] = useState<string>("empty")
    const [value, setValue] = useState<string>("")
    const [categorySearchData, setCategorySearchData] = useState<CategoryType[]>([])
    const name = debounce(searchValue, 800)

    const handleSearch = (text:string) => {
      setIsLoading(true)
      setValue(text)
       if(text){
        setSearchValue(text)
       }else{
         setSearchValue("empty")
         setIsLoading(false)
       }
    }
    useEffect(()=> {
       instance().get("/categories/search", {params:{name}}).then(res => {
         setIsLoading(false)
         setCategorySearchData(res.data)
       })
    },[name])

    console.log(categorySearchData)

    const handleSearchClick = (data:string)=> {
       setValue(data)
       setSearchValue("empty")
    }
  return (
     <>
      <div className="flex items-center searchDiv">
          <CustomButton onBlur={()=> setOpenCategory(false)} onClick={()=> setOpenCategory(!openCategory)} extraClass="text-white cursor-pointer" icon={<ArrowDownIcon extraClass={`${openCategory ?  "rotate-x-[180deg]": ""} duration-300`}/>} iconPosition={"right"}>
            {t("category")}
          </CustomButton>
          <div className="relative flex items-center w-[400px]  xl:w-[518px] h-[53px] bg-[#EBEFF3] rounded-[6px]">
            <CustomInput value={value} onChange={(e)=> handleSearch(e.target.value)} type={"text"} placeholder={t("search")}/>
            <CustomButton extraClass="rounded-l-none text-white h-[53px] cursor-pointer">
              <SearchIcon/>
            </CustomButton>
            <ul className={`absolute duration-300 overflow-hidden w-[260px] h-auto shadow-xl bg-white shadow-slate-300 top-[100%] z-50`}>
                {isLoading ? <li className='text-[20px] text-center px-[20px] py-[10px] font-normal text-[#134E9B]'>Loading...</li> : categorySearchData.map((item:CategoryType)=> (
                  <li key={item.id} onClick={() => handleSearchClick(item.name)} className='text-[16px] px-[20px] py-[10px] font-normal text-[#545D6A] border-b-1 border-slate-500 cursor-pointer hover:bg-[#134E9B] hover:text-white' >{item.name}</li>
                ))}
            </ul>
          </div>
      </div>
     </>
  )
}

export default HeaderSearch
