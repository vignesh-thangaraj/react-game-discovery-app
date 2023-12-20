import { Spinner } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailer";
interface Props {
  gameId: number;
}

function GameTrailer({ gameId }: Props) {
  const { data: trailer, error, isLoading } = useTrailers(gameId);
  console.log(trailer);
  if (isLoading) return <Spinner />;
  if (error) throw error;
  const first = trailer?.results[0];
  if (first)
    return <video src={first.data[480]} controls poster={first.preview} />;
}

export default GameTrailer;
