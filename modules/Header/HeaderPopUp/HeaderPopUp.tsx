"use client"
import { Context } from '@/context/Context'
import getCategory from '@/service/getCategory'
import React, { useContext } from 'react'

const HeaderPopUp = () => {
    const {openCategory} = useContext(Context)
    const {data:categoryList, isLoading} = getCategory()
  return (
    <div className={`w-full ${openCategory === true ? "h-0" : "border-1 h-[500px]"}   duration-300 flex absolute top-[100%]`}>
      <div className='w-[30%] bg-[#EBEFF3]'>

      </div>
      <div className='w-[70%] bg-[#FFFFFF]'></div>
    </div>
  )
}

export default HeaderPopUp
