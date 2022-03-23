import { Title } from "./title";
import { Text } from "./text";
import { decode } from "he";
import { Box } from "@chakra-ui/react";

export const Description = ({ text }: { text: string }) => (
  <Box>
    <Title>Description</Title>
    <Text>{decode(text)}</Text>
  </Box>
);
