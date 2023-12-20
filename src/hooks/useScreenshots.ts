import { useQuery } from "@tanstack/react-query"
import ApiClient from "../services/ApiClient"
import { Screenshots } from "../entities/Screenshot";

const useScreenshots = (gameId: number) => {
    const apiClient = new ApiClient<Screenshots>(`/games/${gameId}/screenshots`);
    return useQuery({
        queryKey: ['screenshots', gameId],
        queryFn: () => apiClient.get(),
        staleTime: 24 * 60 * 60* 1000 //24hrs
    })
}

export default useScreenshots;