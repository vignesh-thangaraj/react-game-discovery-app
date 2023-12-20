import { create } from 'zustand'

interface GameQuery {
    genreId?: number;
    platformId?: number;
    orderBy?: string | null;
    searchText?: string | null;
  }

interface GameQueryStore {
    gameQuery: GameQuery;
    setSearchText: (searchText?: string) => void;
    setGenreId: (genreId?: number) => void;
    setPlatformId: (platformId?: number) => void;
    setOrderBy: (orderBy?: string) => void;
}

const useGameQueryStore = create<GameQueryStore>(set =>({
    gameQuery: {},
    setSearchText: (searchText) => set(() => ({ gameQuery: {searchText}  })),
    setGenreId: (genreId) => set(store => ({gameQuery: {...store.gameQuery , genreId}})),
    setPlatformId: (platformId) => set(store => ({ gameQuery: {...store.gameQuery, platformId} })),
    setOrderBy: (orderBy) => set(store => ({ gameQuery: {...store.gameQuery, orderBy} }))
}))

export default useGameQueryStore;