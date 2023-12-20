import { Box, Grid, Show, GridItem, HStack } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameTitle from "../components/GameTitle";
import GenresList from "../components/GenresList";
import OrderFilter from "../components/OrderFilter";
import PlatformSelector from "../components/PlatformSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenresList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingX={2}>
          <GameTitle></GameTitle>
          <HStack paddingY={1}>
            <PlatformSelector />
            <OrderFilter />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
