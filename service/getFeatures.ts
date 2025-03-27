import { instance } from "@/hooks/instance"
import { useQuery } from "@tanstack/react-query"

const getFeatures = (id:string | any) => {
    const {data = [], isLoading} = useQuery({
        queryKey:['variations_all', id],
        queryFn:()=> instance().get(`/variations/${id}`).then(res => res.data)
    })
    
    return {data, isLoading}
}

export default getFeatures