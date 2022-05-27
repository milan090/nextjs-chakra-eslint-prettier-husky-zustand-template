import { Link as ChakraLink, Button } from "@chakra-ui/react";
import { useCounter } from "store/counter";

import { Container } from "./Container";

export const CTA = () => {
  const increment = useCounter(state => state.increment);

  return (
    <Container
      flexDirection="row"
      position="fixed"
      bottom={0}
      width="full"
      maxWidth="3xl"
      py={3}
    >
      <Button
        variant="outline"
        colorScheme="green"
        rounded="button"
        flexGrow={1}
        mx={2}
        width="full"
        onClick={increment}
      >
        Increment +
      </Button>
      <Button
        as={ChakraLink}
        isExternal
        href="https://github.com/milan090/nextjs-chakra-eslint-prettier-husky-zustand-template"
        variant="solid"
        colorScheme="green"
        rounded="button"
        flexGrow={3}
        mx={2}
        width="full"
      >
        View Repo
      </Button>
    </Container>
  );
};
