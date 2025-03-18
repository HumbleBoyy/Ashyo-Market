import { CustomButtonType } from '@/types/CustomButton'
import React, { FC } from 'react'

const CustomButton:FC<CustomButtonType> = ({onClick,bage, extraClass, children, icon, iconPosition}) => {
  return (
    <button onClick={onClick} className={`${extraClass} relative flex py-[14px] px-[25px] text-[16px] bg-[#134E9B] rounded-[6px] items-center justify-center gap-[20px]`}>
      {iconPosition === "left" && icon}
       {children}
      {iconPosition === "right" && icon} 
      {bage && <span className='absolute top-[-5px] right-[-5px] w-[20px] h-[20px] rounded-full flex items-center bg-[#E81504] text-white text-[10px] font-bold justify-center'>{bage}</span>}
    </button>
  )
}

export default CustomButton
