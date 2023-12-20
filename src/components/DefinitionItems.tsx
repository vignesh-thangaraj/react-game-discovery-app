import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  definitionTerm: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItems = ({ definitionTerm, children }: Props) => {
  return (
    <>
      <Box marginY={5}>
        <Heading as="dt" fontSize="md" color="gray.600">
          {definitionTerm}
        </Heading>
        <dd>{children}</dd>
      </Box>
    </>
  );
};

export default DefinitionItems;
