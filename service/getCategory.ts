import { instance } from "@/hooks/instance"
import { useQuery } from "@tanstack/react-query"

const getCategory = () => {
    const [data] = useQuery({
        queryKey:['categoryAll'],
        queryFn:()=> instance().get("/categories/all", {
            params:{
                limit:1000
            }
        })
    })
    
}

export default getCategory