import { ReactNode } from "react";
import Link from "next/link";
import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import { Menu } from "./menu";

export const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Box as="header" role="banner" py="2">
      <Container maxW="container.md">
        <Flex flexDir="row" justifyContent="space-between" alignItems="center">
          <Link href="/" passHref>
            <Heading as="a" fontSize="2xl">
              justrecipes
            </Heading>
          </Link>
          <Menu />
        </Flex>
      </Container>
    </Box>
    <Box as="main" my={[20]}>
      <Container maxW="container.md">{children}</Container>
    </Box>
  </>
);
