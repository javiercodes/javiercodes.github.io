import React, { useState } from "react";
import { TabNavigation, Tab, Link, Heading, Pane } from "evergreen-ui";

const NavBar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  function href(tab: string) {
    if (tab === "home") {
      return "";
    } else if (tab === "contact me") {
      return "contact";
    } else {
      return tab;
    }
  }

  return (
    <Pane display="flex" padding={16} background="tint2" borderRadius={3}>
      <Pane flex={1} alignItems="center" display="flex">
        <Heading size={600}> Javier Miranda Flores </Heading>
      </Pane>

      <Pane marginRight={1}>
        <TabNavigation>
          {["home", "resources", "resume", "contact me"].map((tab, index) => (
            <Tab
              key={tab}
              is="a"
              href="#"
              id={tab}
              isSelected={index === selectedIndex}
              onSelect={() => setSelectedIndex(index)}
            >
              <Link href={`/${href(tab)}`}>{tab}</Link>
            </Tab>
          ))}
        </TabNavigation>
      </Pane>
    </Pane>
  );
};

export default NavBar;
