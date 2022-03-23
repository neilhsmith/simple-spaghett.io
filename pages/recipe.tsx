import type { NextPageWithLayout } from "./_app";
import { ReactElement } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Stack } from "@chakra-ui/react";
import { Layout } from "@common/components/layout";
import { ErrorMessage } from "@common/components/errorBox";
import { UrlForm } from "@common/components/urlForm";
import { RecipeView } from "@features/recipe";

const RecipePage: NextPageWithLayout = () => {
  const router = useRouter();
  const url = router.query.url as string;

  if (!url && router.isReady) {
    return (
      <>
        <Head>
          <title>Error - URL required</title>
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

  return router.isReady ? <RecipeView url={url} /> : null;
};

RecipePage.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default RecipePage;
