"use client"
import { Context } from '@/context/Context'
import React, { useContext } from 'react'

const HeaderPopUp = () => {
    const {openCategory, setOpenCategory} = useContext(Context)
  return (
    <div className='w-full h-[500px]  bg-red-600 absolute top-[100%]'>
      hello
    </div>
  )
}

export default HeaderPopUp
