import { LocationIcon } from "@/assets"
import { HeaderTopTypes } from "@/types/HeaderType"
import Link from "next/link"


const HeaderTop = () => {
  const navList:HeaderTopTypes[] = [
    {
       id:1,
       icon:<LocationIcon/>,
       title:"Tashkent",
       path:"/"
    },
    {
      id:2,
      icon:null,
      title:"About Us",
      path:"/aboutus"
    },
    {
      id:3,
      icon:null,
      title:"Products",
      path:"/products"
    },
    {
        id:4,
        icon:null,
        title:"Contacts",
        path:"/contacts"
    },
  ]
  return (
    <div className='bg-[#EBEFF3] w-full p-5'>
        <div className="containers flex justify-between items-center">
            <nav className=" flex items-center gap-5">
              {navList.map((item:HeaderTopTypes) => <Link className="flex items-center gap-1 text-[#545D6A]" href={item.path} key={item.id}><span>{item.icon  && item.icon}</span> {item.title}</Link>)}
            </nav>
        </div>
    </div>
  )
}

export default HeaderTop
