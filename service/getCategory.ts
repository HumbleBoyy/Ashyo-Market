import { instance } from "@/hooks/instance"
import { useQuery } from "@tanstack/react-query"

const getCategory = () => {
    const {data, isLoading} = useQuery({
        queryKey:['categoryAll'],
        queryFn:()=> instance().get("/categories/all", {
            params:{
                limit:1000
            }
        }).then(res => res.data)
    })
    
    return {data, isLoading}
}

export default getCategory