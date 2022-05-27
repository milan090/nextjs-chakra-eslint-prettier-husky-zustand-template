import { Flex, Heading } from "@chakra-ui/react";

export const Hero = ({ title }: { title: string }) => (
  <Flex
    bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
    bgClip="text"
    textAlign={"center"}
    mx={10}
    textTransform="capitalize"
  >
    <Heading fontSize="6vw">{title}</Heading>
  </Flex>
);
