"use client"
import { Context } from '@/context/Context'
import React, { useContext } from 'react'

const HeaderPopUp = () => {
    const {openCategory} = useContext(Context)
  return (
    <div className={`w-full ${openCategory === true ? "border-0 h-0" : "border-1 h-[500px]"}   duration-300 flex absolute top-[100%]`}>
      <div className='w-[30%] bg-[#EBEFF3]'></div>
      <div className='w-[70%] bg-[#FFFFFF]'></div>
    </div>
  )
}

export default HeaderPopUp
