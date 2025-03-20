"use client"
import { Context } from '@/context/Context'
import React, { useContext } from 'react'

const HeaderPopUp = () => {
    const {openCategory, setOpenCategory} = useContext(Context)
  return (
    <div className='containers absolute top-[100%]'>
      hello
    </div>
  )
}

export default HeaderPopUp
