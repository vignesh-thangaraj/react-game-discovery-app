import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImage from "../services/fetchCropImage";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card
      _hover={{
        shadow: "md",
        transform: "scale(1.03)",
        transitionDuration: "0.2s",
        transitionTimingFunction: "ease-in",
      }}
      borderRadius={10}
      overflow="hidden"
    >
      <Image src={getCroppedImage(game.background_image)}></Image>
      <CardBody>
        <Heading fontSize="1xl">
          <Link to={`/games/${game.slug}`}>{game.name}</Link>
        </Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map(
              (platform) => platform.platform
            )}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GameCard;
