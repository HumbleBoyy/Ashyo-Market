import { instance } from "@/hooks/instance"
import { useQuery } from "@tanstack/react-query"

const getProducts = () => {
    const {data = [], isLoading} = useQuery({
        queryKey:['products'],
        queryFn:()=> instance().get("/products").then(res => res.data.items)
    })
    
    return {data, isLoading}
}

export default getProducts