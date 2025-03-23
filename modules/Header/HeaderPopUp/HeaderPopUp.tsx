"use client"
import { Context } from '@/context/Context'
import { IMAGE_API } from '@/hooks/getEnv'
import getCategory from '@/service/getCategory'
import { CategoryType } from '@/types/HeaderType'
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import './style.css';
import { IoClose } from 'react-icons/io5'


const HeaderPopUp = () => {
    const {openCategory, setOpenCategory} = useContext(Context)
    const {data:categoryList} = getCategory()
    const [childCategory, setChildCategory] = useState<CategoryType>()
    const [activeItem, setActiveItem] = useState<number | null>(null)
    const handleShowCategory = (obj:CategoryType) => {
        setChildCategory(obj)
        setActiveItem(obj.id)
    }
  return (
    <div className={`w-full ${openCategory === true ? "shadow-xl openPopUp" : "ClosePopup"} popUpWrapper   duration-300 flex absolute top-[80%] lg:top-[60%] z-50`}>
      <ul className='leftSideWrapper w-[30%] bg-[#EBEFF3] py-[20px] px-[2px] lg:py-5 lg:px-[10px]'>
          {categoryList.map((item:CategoryType)=> 
            <li onMouseEnter={()=> handleShowCategory(item)} key={item.id} className={`focusWrapper flex items-center py-[12px] px-[5px] lg:px-[40px] gap-2 ${activeItem === item.id && "bg-white"}  rounded-md cursor-pointer`}>
                <Image className='popuUpImage h-[20px] w-[22px]' src={`${IMAGE_API}/${item.icon}`} alt="Ashyo" priority width={22} height={20}/>
                <strong className='popUp_text1 text-[16px] text-[#545D6A] font-normal'>{item.name}</strong>
            </li>
          )}
      </ul>
      <ul className='rightSIdeWrapper relative w-[70%] flex flex-col bg-[#FFFFFF] py-[20px] px-[10px] lg:py-5 lg:px-[10px] gap-[20px]'>
          <strong className='popUp_text2 text-[16px] font-semibold leading-[100%]'>{childCategory?.name}</strong>
          {childCategory?.subCategories.map((item:CategoryType)=><li key={item.id} className='text-[#545D6A] popUp_text3 text-[14px] font-normal'>{item.name}</li>)}
          <button onClick={()=> setOpenCategory(!openCategory)} className='closeButton absolute top-3 right-5 cursor-pointer outline-none border-2 border-slate-400 p-1 rounded-md bg-white shadow-2xl  text-[30px]'>
             <IoClose  />
          </button>
      </ul>
    </div>
  )
}

export default HeaderPopUp
