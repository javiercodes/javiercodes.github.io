import React from "react";
import Container from "../components/Container";
import { Heading1 } from "../components/Heading";
import Button from "../components/Button";
import backIcon from "../assets/backIcon.svg";
import { theme } from "../theme";
import { Flex, Text, Link, Image, Box } from "rebass";

const ResourcePageReplacement = () => {
  return (
    <Container>
      <Box flex width="100%" marginLeft={5} marginTop={3}>
        <Link href="/">
          <Button variant="primary">
            <Image src={backIcon} height={25} width={25} marginRight="1px" />
          </Button>
        </Link>
      </Box>

      <Box flex width="100%" marginLeft={5} marginTop={3}>
        <Heading1>Resources</Heading1>
      </Box>

      <Flex width="100%" justifyContent="center" marginTop={3}>
        <Link href={"/blog"} width="85%">
          <Box
            sx={{
              p: 2,
              bg: theme.colors.persianblue,
              width: "100%",
              boxShadow: "card",
              borderRadius: 24,
            }}
          >
            <Text
              fontFamily={theme.fonts.bold}
              fontWeight={theme.fontWeights.bold}
              fontSize={theme.fontSizes[3]}
              color={theme.colors.gainsboro}
              marginLeft={2}
            >
              Blog
            </Text>
            <Text
              fontSize={theme.fontSizes[1]}
              color={theme.colors.gainsboro}
              margin={2}
              fontFamily={theme.fonts.body}
            >
              Here you'll find any and all articles I write!
            </Text>
          </Box>
        </Link>
      </Flex>
    </Container>
  );
};

export default ResourcePageReplacement;
