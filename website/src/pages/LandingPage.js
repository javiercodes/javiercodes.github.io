import { Link, Text, Button, Pane, Card } from "evergreen-ui";
import NavBar from "../components/NavBar";
import React from "react";
import { useMedia } from "react-media";

const GLOBAL_MEDIA_QUERIES = {
  small: "(max-width: 599px)",
  medium: "(min-width: 600px) and (max-width: 1199px)",
  large: "(min-width: 1200px)",
};

const LandingPage = () => {
  const matches = useMedia({ queries: GLOBAL_MEDIA_QUERIES });
  return (
    <div>
      {matches.large ? (
        <NavBar />
      ) : (
        <Pane>
          <Card flexDirection={"column"} margin={50} marginTop={"90vh"}>
            <Button backgroundColor={"black"}>Blog</Button>
            <Button backgroundColor={"black"}>Contact Me</Button>
            <Button backgroundColor={"black"}>About Me </Button>
          </Card>
        </Pane>
      )}
    </div>
  );
};

export default LandingPage;
