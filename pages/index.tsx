import type { NextPageWithLayout } from "./_app";
import { ReactElement } from "react";
import Head from "next/head";
import { Layout } from "common/components/layout";
import { Box } from "@chakra-ui/react";
import { UrlForm } from "@common/components/urlForm";

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>justrecipes</title>
        <meta name="description" content="Simple to use recipe shortner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box py={[20, 40, 40]}>
        <UrlForm />
      </Box>
    </>
  );
};

HomePage.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default HomePage;
