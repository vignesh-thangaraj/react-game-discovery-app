import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

interface Props {
  children: string;
}

function ExpendableText({ children }: Props) {
  const [expanded, setExpand] = useState(false);
  const limit = 300;
  if (!children) return null;
  const summary =
    children.length > limit && expanded
      ? children
      : children.substring(0, limit) + "...";

  return (
    <>
      <Text>
        {summary}{" "}
        <Button
          size="sm"
          colorScheme="orange"
          onClick={() => setExpand(!expanded)}
          fontWeight="bold"
          marginLeft={2}
        >
          {expanded ? "Show less" : "Read more"}
        </Button>{" "}
      </Text>
    </>
  );
}

export default ExpendableText;
