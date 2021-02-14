import React from "react";
import { theme } from "../theme";
import { Text } from "rebass";

export const Heading1 = ({ children, ...otherProps }) => {
  return (
    <Text
      fontWeight={theme.fontWeights.heading}
      fontFamily={theme.fonts.body}
      lineHeight={theme.lineHeights.heading}
      fontSize={theme.fontSizes[5]}
      color={theme.colors.gainsboro}
      {...otherProps}
    >
      {children}
    </Text>
  );
};

export const Heading2 = ({ children, ...otherProps }) => {
  return (
    <Text
      fontWeight={theme.fontWeights.bold}
      fontFamily={theme.fonts.body}
      lineHeight={theme.lineHeights.bold}
      fontSize={theme.fontSizes[4]}
      color={theme.colors.gainsboro}
      margin={1}
      {...otherProps}
    >
      {children}
    </Text>
  );
};
