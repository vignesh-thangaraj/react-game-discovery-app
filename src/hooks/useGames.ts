
import { useInfiniteQuery } from "@tanstack/react-query";
import ApiClient, { GetResponse } from "../services/ApiClient";
import useGameQueryStore from "../store";
import { Game } from "../entities/Game";

const apiClient = new ApiClient<Game>('/games');

const useGames = () => {
  const gameQuery = useGameQueryStore(s => s.gameQuery);
  return useInfiniteQuery<GetResponse<Game>, Error>({
    queryKey: ['/games', gameQuery],
    queryFn: ({pageParam}) => apiClient.get({
     params: { 
     genres: gameQuery.genreId , 
     platform: gameQuery.platformId, 
     ordering: gameQuery?.orderBy,
     search: gameQuery.searchText, 
     page: pageParam
    }}),
    getNextPageParam: (lastPage, allpages) => {
      return lastPage.next ?  allpages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000, //24hrs,
    initialPageParam: 1
 })

} 

// useData<Game>('/games', { params: { genres: gameQuery.genre?.id , platform: gameQuery.platform?.id, ordering: gameQuery?.orderBy, search: gameQuery.searchText }}, [gameQuery])

export default useGames;
