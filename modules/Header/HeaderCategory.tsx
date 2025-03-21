"use client"
import getCategory from '@/service/getCategory'
import React from 'react'

const HeaderCategory = () => {
    const {data:categoryList} = getCategory()
    console.log(categoryList)
  return (
    <div className='containers'>
      HeaderCategory
    </div>
  )
}

export default HeaderCategory
