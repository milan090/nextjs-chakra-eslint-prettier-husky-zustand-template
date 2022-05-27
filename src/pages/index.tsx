import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Box,
  Link
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import { useCounter } from "store/counter";

const Index = () => {
  const count = useCounter(state => state.count);
  return (
    <Container height="100vh">
      <Box mt={20}>
        <Hero title="Nextjs chakra eslint prettier husky zustand template" />
      </Box>

      <Main>
        <Text>
          Count: <Code>{count}</Code>
        </Text>
        <Text color="text">
          Modern Frontend Template with <Code>Next.js</Code> +{" "}
          <Code>chakra-ui</Code>
          <Code>TypeScript</Code>+<Code>Zustand State Management</Code>
        </Text>

        <List spacing={3} my={0} color="text">
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <ChakraLink
              isExternal
              href="https://nextjs.org"
              flexGrow={1}
              mr={2}
            >
              Next.js <LinkIcon />
            </ChakraLink>
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <ChakraLink
              isExternal
              href="https://chakra-ui.com"
              flexGrow={1}
              mr={2}
            >
              Chakra UI <LinkIcon />
            </ChakraLink>
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <ChakraLink
              isExternal
              href="https://github.com/pmndrs/zustand"
              flexGrow={1}
              mr={2}
            >
              Zustand <LinkIcon />
            </ChakraLink>
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <ChakraLink
              isExternal
              href="https://www.npmjs.com/package/next-seo"
              flexGrow={1}
              mr={2}
            >
              Next SEO (with Twitter OpenGraph config) <LinkIcon />
            </ChakraLink>
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <ChakraLink
              isExternal
              href="https://eslint.org/"
              flexGrow={1}
              mr={2}
            >
              ESLint <LinkIcon />
            </ChakraLink>
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <ChakraLink
              isExternal
              href="https://prettier.io/"
              flexGrow={1}
              mr={2}
            >
              Prettier <LinkIcon />
            </ChakraLink>
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <ChakraLink
              isExternal
              href="https://www.npmjs.com/package/husky"
              flexGrow={1}
              mr={2}
            >
              Husky <LinkIcon />
            </ChakraLink>
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <ChakraLink
              isExternal
              href="https://www.npmjs.com/package/lint-staged"
              flexGrow={1}
              mr={2}
            >
              Lint Staged <LinkIcon />
            </ChakraLink>
          </ListItem>
        </List>
      </Main>

      <DarkModeSwitch />

      <Text mt={10}>
        Template By{" "}
        <Link color="text" href="http://milan090.me/" target="_blank">
          @Milan090
        </Link>
      </Text>

      <CTA />
    </Container>
  );
};

export default Index;
