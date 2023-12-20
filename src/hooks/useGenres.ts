import { useQuery } from "@tanstack/react-query";
import  ApiClient  from "../services/ApiClient";
import { Genres } from "../entities/Genres";


const apiClient = new ApiClient<Genres>('/genres');

const useGenres = () =>  useQuery({
    queryKey: ['/genres'],
    queryFn: () => apiClient.get(),
    staleTime:  24 * 60 * 60* 1000 //24 hrs
})

// useData<Genres>("/genres");

export default useGenres;
