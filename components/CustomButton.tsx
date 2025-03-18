import { CustomButtonType } from '@/types/CustomButton'
import React, { FC } from 'react'

const CustomButton:FC<CustomButtonType> = ({onClick, extraClass, children, icon, iconPosition}) => {
  return (
    <button onClick={onClick} className={`${extraClass} flex py-[14px] px-[25px] text-[16px] bg-[#134E9B] font-semibold rounded-[6px] items-center justify-center gap-[20px]`}>
      {iconPosition === "left" && icon}
       {children}
      {iconPosition === "right" && icon} 
    </button>
  )
}

export default CustomButton
