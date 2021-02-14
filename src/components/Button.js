import React from "react";
import { Button as RebassButton } from "rebass";
import { buttonTheme } from "../theme";

const Button = ({ variant, children, ...otherProps }) => {
  console.log(otherProps);
  return (
    <RebassButton variant={variant} theme={buttonTheme} {...otherProps}>
      {children}
    </RebassButton>
  );
};

export default Button;
