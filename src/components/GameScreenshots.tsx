import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

function GameScreenshots({ gameId }: Props) {
  const { data: screenshots, error, isLoading } = useScreenshots(gameId!);
  if (error) throw error;
  if (isLoading) return null;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      {screenshots?.results.map((screenshot) => (
        <Image key={screenshot.id} src={screenshot.image} />
      ))}
    </SimpleGrid>
  );
}

export default GameScreenshots;
