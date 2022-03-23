import {
  Box,
  Center,
  Heading,
  Icon,
  Link,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import { ErrorMessage } from "@common/components/errorBox";
import { UrlForm } from "@common/components/urlForm";
import Head from "next/head";
import { FC } from "react";
import { useRecipe } from "../hooks/useRecipe";
import { Text } from "./text";
import { FaExternalLinkAlt } from "react-icons/fa";
import { DurationList } from "./durations";
import { Description } from "./description";
import { Nutrition } from "./nutrition";
import { Ingredients } from "./Ingredients";
import { Instructions } from "./instructions";

type RecipeViewProps = {
  url: string;
};

export const RecipeView: FC<RecipeViewProps> = ({ url }) => {
  const { loading, recipe, error } = useRecipe(url);

  if (loading) {
    return (
      <>
        <Head>
          <title>Loading...</title>
        </Head>
        <Box as="section">
          <Center mb={[8]}>
            <Spinner size="xl" />
          </Center>
          <Center>
            <Text fontSize="2xl">Loading...</Text>
          </Center>
        </Box>
      </>
    );
  } else if (error) {
    return (
      <>
        <Head>
          <title>Error - todo (error message)</title>
        </Head>
        <Stack spacing={20}>
          <ErrorMessage>
            {{
              title: "Uh-oh, Spaghettios!",
              body: "A URL is required.",
            }}
          </ErrorMessage>
          <UrlForm />
        </Stack>
      </>
    );
  }

  return (
    recipe && (
      <>
        <Head>
          <title>{recipe.name}</title>
        </Head>
        <Box as="article">
          {recipe.url && (
            <Link href={recipe.url} isExternal>
              <Icon as={FaExternalLinkAlt} mx={2} /> Visit Website
            </Link>
          )}
          <Stack direction="column" spacing={[14]}>
            <Heading as="h1" fontSize={["2xl", "3xl", "4xl"]}>
              {recipe.name}
            </Heading>
            {(recipe.cookTime || recipe.prepTime || recipe.totalTime) && (
              <DurationList>
                {[
                  ...(recipe.prepTime
                    ? [{ label: "Prep", value: recipe.prepTime }]
                    : []),
                  ...(recipe.cookTime
                    ? [{ label: "Cook", value: recipe.cookTime }]
                    : []),
                  ...(recipe.totalTime
                    ? [{ label: "Total", value: recipe.totalTime }]
                    : []),
                ]}
              </DurationList>
            )}
            {/* {(recipe.categories || recipe.cuisine || recipe.keywords) && (
              <span>todo: meta</span>
            )} */}
            <Stack direction={["column", "column", "row"]} spacing={[8]}>
              {recipe.description && <Description text={recipe.description} />}
              {recipe.nutrition && (
                <Box
                  minWidth={[0, 0, "36%"]}
                  maxWidth={["100%", "100%", "50%"]}
                >
                  <Nutrition nutrition={recipe.nutrition} />
                </Box>
              )}
            </Stack>
            <Stack direction={["column", "column", "row"]} spacing="36px">
              <Box flex={1}>
                <Ingredients ingredients={recipe.ingredients} />
              </Box>
              <Box flex={1}>
                <Instructions sections={recipe.instructionSections} />
              </Box>
            </Stack>
          </Stack>
        </Box>
      </>
    )
  );
};
