import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  return (
    <Badge
      colorScheme={score > 75 ? "green" : score > 50 ? "yellow" : "red"}
      fontSize="13px"
      borderRadius="4px"
      paddingX={2}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
