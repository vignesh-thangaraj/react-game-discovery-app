import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImage from "../services/fetchCropImage";
import useGameQueryStore from "../store";

const GenresList = () => {
  const { data, isLoading } = useGenres();
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);

  if (isLoading) return <Spinner></Spinner>;

  return (
    <>
      <Heading fontSize="2xl" as="h1" paddingY={4}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImage(genre.image_background)}
              ></Image>
              <Button
                fontWeight={genre.id === genreId ? "bold" : "normal"}
                variant="link"
                fontSize="lg"
                onClick={() => setGenreId(genre.id)}
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
