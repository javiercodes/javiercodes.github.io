import React from "react";
import { Flex, Image, Link, Text, Box } from "rebass";
import { theme } from "../theme";
import Button from "../components/Button";
import backIcon from "../assets/backIcon.svg";
import shareIcon from "../assets/shareIcon.svg";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useLocation } from "react-router-dom";

const ResourcesPage = () => {
  const currUrl = useLocation();

  return (
    <Flex
      height="100vh"
      flexDirection="column"
      bg={theme.colors.jet}
      margin={0}
      marginBottom={5}
      overflowX="hidden"
      overflowY="scroll"
      width="100%"
    >
      <Flex margin={25} width="100%" flexDirection="column">
        <Flex marginBottom="25px">
          <Link href="/">
            <Button variant="primary">
              <Image src={backIcon} height={25} width={25} marginRight="1px" />
            </Button>
          </Link>
        </Flex>

        <Text
          fontWeight={theme.fontWeights.heading}
          lineHeight={theme.lineHeights.heading}
          fontSize={theme.fontSizes[5]}
          color={theme.colors.gainsboro}
        >
          Resources
        </Text>

        <Text
          fontWeight={theme.fontWeights.bold}
          lineHeight={theme.lineHeights.bold}
          fontSize={theme.fontSizes[4]}
          color={theme.colors.gainsboro}
          margin={1}
        >
          Blog
        </Text>

        <Text
          fontWeight={theme.fontWeights.bold}
          lineHeight={theme.lineHeights.bold}
          fontSize={theme.fontSizes[2]}
          color={theme.colors.gainsboro}
          margin={1}
        >
          2021 Kickoff 🎉
        </Text>

        <Flex flexDirection="column" marginTop="10px" marginBottom="10px">
          <Flex>
            <Text color={theme.colors.gainsboro} fontSize={theme.fontSizes[1]}>
              Author: Javier,
            </Text>
            <Text
              color={theme.colors.gainsboro}
              fontSize={theme.fontSizes[1]}
              marginLeft="5px"
            >
              Published: January 6th, 2021
            </Text>
          </Flex>

          <Flex marginTop="15px" marginBottom="25px">
            <Text color={theme.colors.gainsboro} fontSize={theme.fontSizes[1]}>
              15 minute read
            </Text>
          </Flex>
        </Flex>

        <Flex flexDirection="column" maxWidth="80%">
          <Text
            color={theme.colors.gainsboro}
            fontSize={theme.fontSizes[1]}
            marginTop="5px"
          >
            The way this post is going to be organized is first I will be
            writing about some of the lessons I personally learned through this
            challenge with linked audio files, and then followed up with what
            came out of it, and then the stats on the run itself (how much
            weight loss, distance etc.). Thank you.
          </Text>
          <Text
            fontWeight={theme.fontWeights.bold}
            lineHeight={theme.lineHeights.bold}
            fontSize={theme.fontSizes[1]}
            color={theme.colors.gainsboro}
            margin={1}
          >
            Lesson 1: You're goals might be closer than you think
          </Text>
          <Text color={theme.colors.gainsboro} fontSize={theme.fontSizes[1]}>
            Alright so, this is just gonna be an audio diary of my thoughts so
            far. I think one of the main lessons here is although something
            might seem far visually, it might not actually be that far with
            regards to distance. So what that means is you know, maybe you set a
            goal, seems a little ambitious, seems like you might not be able to
            get there. The moral of the story here is, it might not be that far.
            The only way to know is to get started.
          </Text>
          <Text
            fontWeight={theme.fontWeights.bold}
            lineHeight={theme.lineHeights.bold}
            fontSize={theme.fontSizes[1]}
            color={theme.colors.gainsboro}
            margin={1}
          >
            Lesson 2: Pick a goal that you can visualize
          </Text>
          <Text
            color={theme.colors.gainsboro}
            fontSize={theme.fontSizes[1]}
            marginTop="5px"
          >
            Second thing is, having a goal that is visual, that you can
            visualize is important. Because although every so often you have to
            keep your vision low (when you're running) you know, wanna make sure
            you don't trip, every so often you can look up and see where you're
            at [The mountain for me]. When you set a goal for yourself visualize
            it, see yourself there, then start, and every so often check in on
            your progress. That's it for now.
          </Text>
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
          <Text
            color={theme.colors.gainsboro}
            fontSize={theme.fontSizes[1]}
            marginTop="5px"
          >
            Alright so a couple more lessons. Uh. One sec. Obviously [this is me
            talking to myself, ignore my brute language], most obvious one is on
            dead ends. Sometimes when you're close to being where you wanna be,
            you hit a dead end, don't let that stop you. Find a way around, and
            keep going. It's easy to let those things stop you. You know, being
            [just] feet away from your goal. [But] That's when you shouldn't
            stop, take the long route.
          </Text>
          <Text
            fontWeight={theme.fontWeights.bold}
            lineHeight={theme.lineHeights.bold}
            fontSize={theme.fontSizes[1]}
            color={theme.colors.gainsboro}
            margin={1}
          >
            Lesson 4: Be dangerously ambitious, but don't be stupid. Set some
            precautions.
          </Text>
          <Text
            color={theme.colors.gainsboro}
            fontSize={theme.fontSizes[1]}
            marginTop="5px"
          >
            Second is, sometimes when you do things that are difficult, there
            are people around you who might genuinely care about you. And
            because of that, because they care about your wellbeing, they'll
            tell you to stop. DON'T. The caveat being, don't be stupid,
            obviously, right now, this being the longest distance I've ran, the
            temperature change, the altitude change, this isn't easy. And I
            think you're body knows it, so take your precautions. So one of my
            precautions right now is sharing my location with my mother. Who at
            the end of this run is going to pick me up. That's a precaution.
            Getting this bag of water so I don't dehydrate, that's a precaution.
            Getting this headlight, that's a precaution. Don't be stupid, but
            don't stop, that's it.
          </Text>
          <Link
            href="https://drive.google.com/file/d/1xkw7m92X0bi9Hes56dJDkcQumVvsPD2b/view?usp=sharing"
            marginTop="10px"
          >
            {" "}
            Audio 2 here{" "}
          </Link>
          <Text
            fontWeight={theme.fontWeights.bold}
            lineHeight={theme.lineHeights.bold}
            fontSize={theme.fontSizes[1]}
            color={theme.colors.gainsboro}
            margin={1}
          >
            Lesson 5: Set accountability metrics
          </Text>
          <Text
            color={theme.colors.gainsboro}
            fontSize={theme.fontSizes[1]}
            marginTop="5px"
          >
            Alright so, another thought is about setting things that remind you
            about why you're doing what you're doing. The reason this thought
            came up, is because I see a house all the way up on the hill. And
            that reminds me about the level of success I want to attain. Set
            those up, set those post, those goal posts. In between where you are
            now and where you want to be. To remind you of why you're doing what
            you're doing.
          </Text>
          <Link
            href="https://drive.google.com/file/d/1SuHFX6TvdxjNltNU4xovW39hcJi38k2Q/view?usp=sharing"
            marginTop="10px"
          >
            {" "}
            Audio 3 here{" "}
          </Link>
          <Text
            fontWeight={theme.fontWeights.bold}
            lineHeight={theme.lineHeights.bold}
            fontSize={theme.fontSizes[1]}
            color={theme.colors.gainsboro}
            margin={1}
          >
            Lesson 6: You decide what success means, so be specific.
          </Text>
          <Text
            color={theme.colors.gainsboro}
            fontSize={theme.fontSizes[1]}
            marginTop="5px"
          >
            [The audio after this point becomes terrible, so I wont be posting
            them.] Another lesson is on success metrics. You know, when you set
            your goals, often times it's difficult to decide what consistutes
            you being "done". When I embarked on this journey I hadn't decided
            that yet. I just thought once I get to the base of the mountain I'm
            done. But that wasn't specific enough. When I hit those dead ends as
            you likely saw on my instgram account, I was feet away from the base
            of the mountain. Does that count as success? Not sure. So what I
            decided is that this run is over when my Google map tells me it's
            over. That's when I see my GPS marker physically on the mountain.
          </Text>
          <Text
            fontWeight={theme.fontWeights.bold}
            lineHeight={theme.lineHeights.bold}
            fontSize={theme.fontSizes[1]}
            color={theme.colors.gainsboro}
            margin={1}
          >
            Lesson 7:
          </Text>
          <Text
            color={theme.colors.gainsboro}
            fontSize={theme.fontSizes[1]}
            marginTop="5px"
          >
            [The audio here is completely unintelligble, so I've purposefully
            left this lesson blank.]
          </Text>
          <Text
            fontWeight={theme.fontWeights.bold}
            lineHeight={theme.lineHeights.bold}
            fontSize={theme.fontSizes[1]}
            color={theme.colors.gainsboro}
            margin={1}
          >
            What came out of this
          </Text>
          <Text
            color={theme.colors.gainsboro}
            fontSize={theme.fontSizes[1]}
            marginTop="5px"
          >
            From this completely unplanned adventure, I've decided to implement
            a year long challenge for myself. Which entails doing one thing,
            each month which I consider to be difficult, something I've never
            done before, or something I tried, but failed at in the past. This
            idea is heavily influenced by one of my favorite people David
            Goggins, author of "Can't hurt me" who says that you should: "do
            atleast one thing that sucks, every day".
          </Text>
          <Text
            color={theme.colors.gainsboro}
            fontSize={theme.fontSizes[1]}
            marginTop="5px"
          >
            Distance: 9 Miles (More than 3x my furthest previous distance)
          </Text>
          <Text
            color={theme.colors.gainsboro}
            fontSize={theme.fontSizes[1]}
            marginTop="5px"
          >
            {" "}
            Time: 2 hours
          </Text>
          <Text
            color={theme.colors.gainsboro}
            fontSize={theme.fontSizes[1]}
            marginTop="5px"
          >
            Elevetation gain: 2,500ft
          </Text>
          <Text
            color={theme.colors.gainsboro}
            fontSize={theme.fontSizes[1]}
            marginTop="5px"
          >
            Weight loss: 3lbs
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ResourcesPage;

{
  /* <Flex marginLeft={225} marginTop="10px" width="100%">
            <CopyToClipboard text={currUrl}>
              <Flex>
                <Button variant="accent" height={25}>
                  <Image src={shareIcon} height={25} width={25} />
                </Button>{" "}
              </Flex>
            </CopyToClipboard>
          </Flex> */
}
