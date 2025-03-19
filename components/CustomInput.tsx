import { InputType } from '@/types/InputType'
import React, { FC } from 'react'

const CustomInput:FC<InputType> = ({type,onChange, placeholder, extraClass, name, value}) => {
  return (
    <input type={type} onChange={onChange} placeholder={placeholder} name={name} value={value} className={`${extraClass} w-full px-5 outline-none text-[15px] text-[#000000]`}/>
  )
}

export default CustomInput
