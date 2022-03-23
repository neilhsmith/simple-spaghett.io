import { FC } from "react";
import { Box, Center, Heading } from "@chakra-ui/react";

type ErrorBoxProps = {
  children: {
    title?: string;
    body: string;
  };
};

export const ErrorMessage: FC<ErrorBoxProps> = ({ children }) => {
  const { title, body } = children;

  return (
    <Box as="section">
      {title && (
        <Center mb={[8]}>
          <Heading as="h1" textAlign="center">
            {title}
          </Heading>
        </Center>
      )}
      <Center textAlign="center" fontSize="xl">
        {body}
      </Center>
    </Box>
  );
};
