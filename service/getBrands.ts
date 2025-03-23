import { instance } from "@/hooks/instance"
import { useQuery } from "@tanstack/react-query"

const getBrands= () => {
    const {data = [], isLoading} = useQuery({
        queryKey:['brandsAll'],
        queryFn:()=> instance().get("/brands/all").then(res => res.data)
    })
    
    return {data, isLoading}
}

export default getBrands