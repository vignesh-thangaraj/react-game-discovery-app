import { useParams } from "react-router-dom";
import { Heading, SimpleGrid, Spinner, GridItem } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import ExpendableText from "../components/ExpendableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  if (isLoading) return <Spinner></Spinner>;
  if (error || !game) throw error;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        <GridItem>
          <Heading>{game.name}</Heading>
          <ExpendableText>{game.description_raw}</ExpendableText>
          <GameAttributes game={game}></GameAttributes>
        </GridItem>
        <GridItem>
          <GameTrailer gameId={game.id} />
          <GameScreenshots gameId={game.id} />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default GameDetailsPage;
