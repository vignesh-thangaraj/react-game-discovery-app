import { useQuery } from "@tanstack/react-query";
import  ApiClient  from "../services/ApiClient";
import { Platform } from "../entities/Platform";

const apiClient = new ApiClient<Platform>('platforms/lists/parents');

const usePlatforms = ()=> useQuery({
    queryKey: ['/platforms/lists/parents'],
    queryFn: () => apiClient.get(),
    staleTime: 24 * 60 * 60 * 1000 //24 hrs
})

// useData<Platform>('/platforms/lists/parents')

export default usePlatforms;