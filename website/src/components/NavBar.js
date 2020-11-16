import React from "react";
import { TabNavigation, Tab } from "evergreen-ui";

const NavBar = () => {
  return (
    <TabNavigation>
      {["Traits", "Event History", "Identities"].map((tab, index) => (
        <Tab key={tab} is="a" href="#" id={tab} isSelected={index === 0}>
          {tab}
        </Tab>
      ))}
    </TabNavigation>
  );
};

export default NavBar;
