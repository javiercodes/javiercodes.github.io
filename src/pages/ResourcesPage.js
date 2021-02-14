import React from "react";
import { Flex, Image, Link, Text, Box } from "rebass";
import { BlogOne } from "../components/Blog";
import { theme } from "../theme";
import Container from "../components/Container";
import Button from "../components/Button";
import backIcon from "../assets/backIcon.svg";

const ResourcesPage = () => {
  const boldSubHeading = {
    fontFamily: theme.fonts.body,
    fontWeight: theme.fontWeights.bold,
    lineHeight: theme.lineHeights.bold,
    fontSize: theme.fontSizes[1],
    color: theme.colors.gainsboro,
    margin: 1,
  };

  const mainTextSettings = {
    color: theme.colors.gainsboro,
    fontSize: theme.fontSizes[1],
    marginTop: 1,
    fontFamily: theme.fonts.body,
  };

  return (
    <Container>
      <Box flex width="100%" marginLeft={5} marginTop={3}>
        <Link href="/resources">
          <Button variant="primary">
            <Image src={backIcon} height={25} width={25} marginRight="1px" />
          </Button>
        </Link>
      </Box>
      <Text
        fontFamily={theme.fonts.bold}
        fontWeight={theme.fontWeights.bold}
        lineHeight={theme.lineHeights.bold}
        fontSize={theme.fontSizes[2]}
        color={theme.colors.gainsboro}
        margin={1}
      >
        {BlogOne.title}
      </Text>

      <Flex flexDirection="column" marginTop="10px" marginBottom="10px">
        <Flex>
          <Text {...mainTextSettings}>Author: Javier,</Text>
          <Text
            {...mainTextSettings}
            color={theme.colors.gainsboro}
            fontSize={theme.fontSizes[1]}
            marginLeft="5px"
          >
            {BlogOne.published}
          </Text>
        </Flex>

        <Text {...mainTextSettings}>{BlogOne.time}</Text>
      </Flex>

      <Flex flexDirection="column" maxWidth="80%">
        <Text {...mainTextSettings}>{BlogOne.p1}</Text>
        <Text {...boldSubHeading}>
          Lesson 1: You're goals might be closer than you think
        </Text>
        <Text {...mainTextSettings}>{BlogOne.p2}</Text>
        <Text {...boldSubHeading}>
          Lesson 2: Pick a goal that you can visualize
        </Text>
        <Text {...mainTextSettings}>{BlogOne.p3}</Text>
        <Link
          href="https://drive.google.com/file/d/1VSfGNSq_wnAZTZOkUmZlGpktFzz0ML7C/view?usp=sharing"
          marginTop="10px"
        >
          {" "}
          Audio 1 here{" "}
        </Link>
        <Text
          fontWeight={theme.fontWeights.bold}
          lineHeight={theme.lineHeights.bold}
          fontSize={theme.fontSizes[1]}
          color={theme.colors.gainsboro}
          margin={1}
        >
          Lesson 3: If you can't go through, go around
        </Text>
        <Text {...mainTextSettings}>{BlogOne.p4}</Text>
        <Text {...boldSubHeading}>
          Lesson 4: Be dangerously ambitious, but don't be stupid. Set some
          precautions.
        </Text>
        <Text {...mainTextSettings}>{BlogOne.p5}</Text>
        <Link
          href="https://drive.google.com/file/d/1xkw7m92X0bi9Hes56dJDkcQumVvsPD2b/view?usp=sharing"
          marginTop="10px"
        >
          {" "}
          Audio 2 here{" "}
        </Link>
        <Text {...boldSubHeading}>Lesson 5: Set accountability metrics</Text>
        <Text {...mainTextSettings}>{BlogOne.p6}</Text>
        <Link
          href="https://drive.google.com/file/d/1SuHFX6TvdxjNltNU4xovW39hcJi38k2Q/view?usp=sharing"
          marginTop="10px"
        >
          {" "}
          Audio 3 here{" "}
        </Link>
        <Text {...boldSubHeading}>
          Lesson 6: You decide what success means, so be specific.
        </Text>
        <Text {...mainTextSettings}>{BlogOne.p7}</Text>
        <Text {...boldSubHeading}>Lesson 7:</Text>
        <Text
          color={theme.colors.gainsboro}
          fontSize={theme.fontSizes[1]}
          marginTop="5px"
        >
          [The audio here is completely unintelligble, so I've purposefully left
          this lesson blank.]
        </Text>
        <Text {...boldSubHeading}>What came out of this</Text>
        <Text {...mainTextSettings}>{BlogOne.p8}</Text>
        <React.Fragment>
          <Box display="flex">
            <Box display="flex" flexDirection="column" marginTop={3}>
              <Text {...mainTextSettings}>
                Distance: 9 Miles (More than 3x my furthest previous distance)
              </Text>
            </Box>

            <Box display="flex" flexDirection="column" marginTop={3}>
              <Text {...mainTextSettings}> Time: 2 hours</Text>
            </Box>
          </Box>
        </React.Fragment>
      </Flex>
    </Container>
  );
};

export default ResourcesPage;
