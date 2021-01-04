import React from "react";
import { Button as RebassButton } from "rebass";
import { buttonTheme } from "../theme";

const Button = (props) => {
  return (
    <RebassButton
      variant={props.variant}
      theme={buttonTheme}
      onClick={props.onClick}
    >
      {props.children}
    </RebassButton>
  );
};

export default Button;
