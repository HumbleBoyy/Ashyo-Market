"use client"
import HeaderCategorySkeleton from '@/components/HeaderCategorySkeleton'
import { Link } from '@/i18n/navigation'
import getCategory from '@/service/getCategory'
import { CategoryType } from '@/types/HeaderType'

const HeaderCategory = () => {
    const {data:categoryList, isLoading} = getCategory()
  return (
    <div className='containers w-full py-5'>
      <ul className='hidden lg:flex items-center justify-between'>
        {isLoading ? <HeaderCategorySkeleton /> : categoryList.map((item:CategoryType)=> <Link className='text-[16px] font-normal text-[#545D6A]' href={"#"} key={item.id}>{item.name}</Link>)}
      </ul>
    </div>
  )
}

export default HeaderCategory
