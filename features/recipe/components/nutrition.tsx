import { Flex, List, ListItem } from "@chakra-ui/react";
import { Title } from "./title";
import { Text } from "./text";
import { decode } from "he";
import { splitCamelCaseToString } from "@common/util/string";

const formatKey = (k: string) =>
  splitCamelCaseToString(k).trim().replace(" Content", "");

export const Nutrition = ({
  nutrition,
}: {
  nutrition: Record<string, string>;
}) => (
  <>
    <Title>Nutrition</Title>
    <List>
      {Object.keys(nutrition)
        .filter((key) => key !== "@type")
        .filter((key) => nutrition[key])
        .map((key, i) => (
          <ListItem key={i} mb={[1]}>
            <Flex justifyContent="space-between">
              <Text>{formatKey(key)}</Text>
              <Text>{decode(nutrition[key])}</Text>
            </Flex>
          </ListItem>
        ))}
    </List>
  </>
);
