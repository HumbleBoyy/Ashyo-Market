import { ReactNode } from "react"
import { UserIconC } from "@/assets";

const Comments = () => {
  const comments:{
    id: number
    userName: string
    userImage?: ReactNode
    star: string
    comment: string
    commentDate: string
  }[] = [
    {
      id:1,
      userName:"John Paul",
      userImage:<UserIconC/>,
      star:"⭐⭐⭐⭐⭐",
      comment:"The most inconvenient application written with the left heel. The interface is awkward. Putting something up for sale is as difficult as possible. You need to go in the tab in the masonry in the hidden tabs in the buttons. Kick-ass",
      commentDate:"July 18 2024"
    },
    {
      id:2,
      userName:"Tomy Kane",
      userImage:<UserIconC/>,
      star:"⭐⭐⭐⭐⭐",
      comment:"The most inconvenient application written with the left heel. You need to go in the tab in the masonry in the hidden tabs in the buttons. Kick-ass",
      commentDate:"July 18 2024"
    },
    {
      id:3,
      userName:"Larry Won",
      userImage:<UserIconC/>,
      star:"⭐⭐⭐⭐",
      comment:"You need to go in the tab in the masonry in the hidden tabs in the buttons. Kick-ass",
      commentDate:"July 18 2024"
    }
  ]
  return (
    <div className="flex flex-col gap-[50px] h-auto overflow-y-hidden">
      {comments.map((item)=> (
       <div key={item.id} className="flex  gap-[10px]">
        <div className="flex items-center bg-slate-200 justify-center max-w-[60px] h-[60px] rounded-[100%]">
          {item.userImage}
        </div>
          <div className="flex flex-col gap-[15px]">
             <div className="flex flex-col">
                  <h2 className="font-normal text-[18px]">{item.userName}</h2>
                  <p className="text-[15px]">{item.star}</p>
             </div>
             <div className="flex flex-col gap-[10px]">
                <p className="font-normal text-[12px] text-[#00000066]">{item.commentDate}</p>
                <p className="text-[15px] font-normal text-[#515D6C] w-[500px]">{item.comment}</p>
             </div>
          </div>
       </div>
      ))}
    </div>
  )
}

export default Comments
