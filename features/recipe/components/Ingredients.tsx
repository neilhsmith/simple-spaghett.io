import { ListItem, UnorderedList } from "@chakra-ui/react";
import { decode } from "he";
import { Title } from "./title";
import { Text } from "./text";

export const Ingredients = ({ ingredients }: { ingredients: string[] }) => {
  return (
    <>
      <Title as="h2" fontSize="md">
        Ingredients
      </Title>
      <UnorderedList>
        {ingredients.map((ing, i) => (
          <ListItem key={i} mb={[2, 3]}>
            <Text>{decode(ing)}</Text>
          </ListItem>
        ))}
      </UnorderedList>
    </>
  );
};
