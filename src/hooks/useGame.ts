import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/ApiClient";
import { Game } from "../entities/Game";

const apiClient = new ApiClient<Game>('/games');

const useGame = (slug: number | string) => {
     return useQuery<Game>({
            queryKey: ['/games', slug],
            queryFn: () => apiClient.getGame(slug),
            staleTime:  24 * 60 * 60* 1000 //24 hrs
        })

}

export default useGame;