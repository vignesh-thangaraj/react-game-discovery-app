import { SimpleGrid, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import DefinitionItems from "./DefinitionItems";
import { Game } from "../entities/Game";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitionItems definitionTerm="Platforms">
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItems>
      <DefinitionItems definitionTerm="MetaCritic Score">
        <CriticScore score={game.metacritic} />
      </DefinitionItems>
      <DefinitionItems definitionTerm="Genres">
        {game.genres.map((genre) => (
          <Text>{genre.name}</Text>
        ))}
      </DefinitionItems>
      <DefinitionItems definitionTerm="Publishers">
        {game.publishers.map((publishers) => (
          <Text key={publishers.id}>{publishers.name}</Text>
        ))}
      </DefinitionItems>
    </SimpleGrid>
  );
};

export default GameAttributes;
