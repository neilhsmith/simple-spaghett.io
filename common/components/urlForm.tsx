import { useRouter } from "next/router";
import { FaArrowRight } from "react-icons/fa";
import {
  Button,
  Box,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { SyntheticEvent } from "react";

export const UrlForm = () => {
  const router = useRouter();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      url: { value: string };
    };

    const query = { url: target.url.value };
    router.push({ pathname: "/recipe", query });
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <HStack spacing="8px">
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <label htmlFor="url">URL</label>
            </InputLeftElement>
            <Input type="url" name="url" required />
          </InputGroup>
          <Button type="submit">
            <FaArrowRight />
          </Button>
        </HStack>
      </form>
    </Box>
  );
};
