import React from "react";
import instagramIcon from "../assets/instagram.svg";
import { Flex, Image, Box, Link, Text } from "rebass";
import Button from "../components/Button";
import { theme } from "../theme";

const j =
  "M16,0c6.6,0,16.3,0.6,24.2,0.6C47.9,0.6,58.1,0,64.7,0v4.7h-2.5c-7.5,0-10.7,3.5-10.7,8.2v92.7c0,17.9-13.2,38.3-33.1,38.3C6.9,143.9,0,139.1,0,130.5c0-4.4,3.5-8.8,9.3-8.8c13,0,5.5,15.2,15.4,15.2c5.5,0,6.8-7.7,6.8-11.5V13.2c0-5.7-2.4-8.5-11.1-8.5H16V0z";
const period =
  "M103.6,99.6c0,6.9-6,12.4-12.6,12.4s-12.4-5.7-12.4-12.4S84.6,87,91.1,87C97.8,87,103.6,93.1,103.6,99.6z";

const HomePage = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height="100vh"
      flexDirection="column"
      bg={theme.colors.jet}
    >
      <Box marginBottom={100}>
        <svg xmlns="http://www.w3.org/2000/svg" width="103.6px">
          <path d={j} fill="white" />
          <path d={period} fill="white" />
        </svg>
      </Box>
      <Box
        width={170}
        alignItems="center"
        justifyContent="space-around"
        display="flex"
        marginBottom={250}
      >
        <Link href={"/resources"}>
          <Button variant="action">
            <Text fontFamily={theme.fonts.body}>R</Text>
          </Button>
        </Link>

        <Link href="https://www.instagram.com/javiermirandaflores/">
          <Image src={instagramIcon} width={40} />
        </Link>

        <Link href={"https://www.linkedin.com/in/javiercodes/"}>
          <Button variant="action">
            <Text fontFamily={theme.fonts.body}>L</Text>
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default HomePage;
