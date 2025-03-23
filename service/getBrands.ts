import { instance } from "@/hooks/instance"
import { useQuery } from "@tanstack/react-query"

const getBrands= () => {
    const extraData = {
        id:8,
        name:"Ko'proq",
        image:"",
        createdAt: "",
        updatedAt: ""
    }
    const {data = [], isLoading} = useQuery({
        queryKey:['brandsAll'],
        queryFn:()=> instance().get("/brands/all").then(res => [...res.data, extraData])
    })
    
    return {data, isLoading}
}

export default getBrands