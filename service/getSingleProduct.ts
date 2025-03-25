import { instance } from "@/hooks/instance"
import { useQuery } from "@tanstack/react-query"

const getSingleProduct = (id:string | any) => {
    const {data = {}, isLoading} = useQuery({
        queryKey:['single_product', id],
        queryFn:()=> instance().get(`/products/${id}`).then(res => res.data)
    })
    
    return {data, isLoading}
}

export default getSingleProduct