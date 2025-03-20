"use client"
import { Context } from '@/context/Context'
import React, { useContext } from 'react'

const HeaderPopUp = () => {
    const {openCategory, setOpenCategory} = useContext(Context)
  return (
    <div className='w-full h-[500px] flex absolute top-[100%]'>
      <div className='w-[30%] bg-[#EBEFF3]'></div>
      <div className='w-[70%] bg-[#FFFFFF]'></div>
    </div>
  )
}

export default HeaderPopUp
