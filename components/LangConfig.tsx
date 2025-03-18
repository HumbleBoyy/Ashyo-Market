"use client"
import { ArrowDownIcon } from "@/assets";
import {Popover, PopoverTrigger, PopoverContent} from "@heroui/popover";
import { useState } from "react";
const LangConfig = () => {
    const [lang, setLang] = useState<"uz" | "en" | "ru">("uz")
  return (
    <Popover placement="bottom" showArrow={true}>
    <PopoverTrigger>
        <div className="flex items-center gap-2">
            <span className="text-[14px] text-[#545D6A] font-semibold cursor-pointer capitalize">{lang}</span>
            <ArrowDownIcon/> 
        </div>
    </PopoverTrigger>
    <PopoverContent>
      <div className="flex flex-col bg-[#134E9B] rounded-md w-[100px] gap-2 overflow-hidden">
        <button onClick={()=> setLang("uz")} className="text-[14px] font-semibold  hover:bg-white text-white hover:text-[#134E9B]  cursor-pointer duration-200  p-2">Uz</button>
        <button onClick={()=> setLang("en")} className="text-[14px] font-semibold  hover:bg-white text-white hover:text-[#134E9B]  cursor-pointer duration-200  p-2">En</button>
        <button onClick={()=> setLang("ru")} className="text-[14px] font-semibold  hover:bg-white text-white hover:text-[#134E9B]  cursor-pointer duration-200  p-2">Ru</button>
      </div>
    </PopoverContent>
  </Popover>
  )
}

export default LangConfig
