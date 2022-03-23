import { Box, List, ListItem, UnorderedList } from "@chakra-ui/react";
import { decode } from "he";
import { InstructionSection } from "../types/recipe.types";
import { Title } from "./title";
import { Text } from "./text";

export const Instructions = ({
  sections,
}: {
  sections: InstructionSection[];
}) => {
  return (
    <>
      <Title as="h2" fontSize="md">
        Instructions
      </Title>
      <List>
        {sections.map((sec, i) => (
          <ListItem key={i} mb={[3, 4]}>
            <Box>
              {sec.name && <Title as="h3">{sec.name}</Title>}
              <UnorderedList>
                {sec.instructions.map((ins, j) => (
                  <ListItem key={j} mb={[2, 3]}>
                    <Text>{decode(ins.text)}</Text>
                  </ListItem>
                ))}
              </UnorderedList>
            </Box>
          </ListItem>
        ))}
      </List>
    </>
  );
};
