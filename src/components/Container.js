import React from "react";
import { Box } from "rebass";
import { theme } from "../theme";

const Container = ({ children }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      bg={theme.colors.jet}
      overflowX="hidden"
      width="100%"
      height="100vh"
    >
      {children}
    </Box>
  );
};

export default Container;
