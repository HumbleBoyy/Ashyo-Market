import { instance } from "@/hooks/instance"
import { useQuery } from "@tanstack/react-query"

const getCategory = () => {
    const {data = [], isLoading} = useQuery({
        queryKey:['products'],
        queryFn:()=> instance().get("/products").then(res => res.data.data)
    })
    
    return {data, isLoading}
}

export default getCategory