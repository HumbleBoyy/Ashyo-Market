import { instance } from "@/hooks/instance"
import { useQuery } from "@tanstack/react-query"

const getFeatures = (id:string | unknown) => {
    const {data = [], isLoading} = useQuery({
        queryKey:['variations', id],
        queryFn:()=> instance().get(`/variations/${id}`).then(res => res.data.items)
    })
    
    return {data, isLoading}
}

export default getFeatures