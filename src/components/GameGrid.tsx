import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

function GameGrid() {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <>
      <InfiniteScroll
        dataLength={fetchedGamesCount}
        loader={<Spinner></Spinner>}
        next={fetchNextPage}
        hasMore={hasNextPage}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <Text>Yay! You have seen it all</Text>
          </p>
        }
      >
        <SimpleGrid
          columns={{
            sm: 1,
            md: 2,
            lg: 3,
            xl: 5,
          }}
          spacing={5}
          padding="10px"
        >
          {isLoading &&
            skeletons.map((skeleton) => (
              <GameCardSkeleton key={skeleton}></GameCardSkeleton>
            ))}
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCard key={game.id} game={game}></GameCard>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
      {error && <Text>{error.message}</Text>}
    </>
  );
}

export default GameGrid;
