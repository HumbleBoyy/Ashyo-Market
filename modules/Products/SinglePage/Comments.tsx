import { ReactNode } from "react"
import UserImage from "../../../public/user.jpg"
import Image from "next/image";

const Comments = () => {
  const comments:{
    id: number;
    userName: string;
    userImage: ReactNode;
    star: string;
    comment: string;
    commentDate: string;
  }[] = [
    {
      id:1,
      userName:"John Paul",
      userImage:<Image src={UserImage} alt="UserImage" priority width={50} height={50}/>,
      star:"⭐⭐⭐⭐⭐",
      comment:"Good",
      commentDate:"July 18 2024"
    }
  ]
  return (
    <>
      {comments.map((item)=> (
       <div key={item.id} className="flex items-center gap-[10px]">
          
       </div>
      ))}
    </>
  )
}

export default Comments
