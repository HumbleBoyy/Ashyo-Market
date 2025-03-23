import { instance } from "@/hooks/instance"
import { useQuery } from "@tanstack/react-query"

const getCategory = (count?:number) => {
    const {data = [], isLoading} = useQuery({
        queryKey:['categoryAll', count],
        queryFn: async ()=> { 
           const res = await instance().get("/categories/all", {params:{limit:1000}})
           return count ? res.data.splice(0, count) : res.data }
})
    
    return {data, isLoading}
}

export default getCategory