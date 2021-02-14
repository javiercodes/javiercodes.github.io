import React from "react";
import { Flex } from "rebass";

const Card = ({ children, ...otherProps }) => {
  return (
    <Flex
      height="100px"
      width="80%"
      justifyContent="center"
      alignItems="center"
      borderRadius="10px"
      {...otherProps}
    >
      {children}
    </Flex>
  );
};

export default Card;
