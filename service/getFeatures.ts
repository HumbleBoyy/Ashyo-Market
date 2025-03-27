import { instance } from "@/hooks/instance"
import { useQuery } from "@tanstack/react-query"

const getFeatures = (id:string | any) => {
    const {data = [], isLoading} = useQuery({
        queryKey:['product-items_all', id],
        queryFn:()=> instance().get(`/product-items/${id}`).then(res => res.data)
    })
    
    return {data, isLoading}
}

export default getFeatures