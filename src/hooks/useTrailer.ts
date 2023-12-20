import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/ApiClient";
import { Trailer } from "../entities/Trailer";

function useTrailers(gameId: number) {
  const apiClient = new ApiClient<Trailer>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ['trailers', gameId],
    queryFn: () => apiClient.get(),
    staleTime: 24 * 60 * 60* 1000 // 24hrs
  })
}

export default useTrailers;