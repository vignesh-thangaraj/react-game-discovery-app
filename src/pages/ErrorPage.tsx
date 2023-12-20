import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Oops!</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "You are landing in an invalid page"
            : "Something went wrong! An unexpected error occured!"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;