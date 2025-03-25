import { instance } from "@/hooks/instance"
import { useQuery } from "@tanstack/react-query"

const getSingleProduct = (id:string) => {
    const {data = [], isLoading} = useQuery({
        queryKey:['singleProduct'],
        queryFn:()=> instance().get(`/products/${id}`).then(res => res.data.items)
    })
    
    return {data, isLoading}
}

export default getSingleProduct