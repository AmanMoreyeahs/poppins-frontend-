import React, { useState } from "react";
import { SidebarLink, SidebarLabel, DropdownLink } from "../style";

export const SubMenu = ({ item }: { item: any }) => {
  const [subnav, setSubnav] = useState<boolean>(false);

  const showSubnav = () => setSubnav(!subnav);
  console.log(item);
  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div className="flex-d props-center">
          <div>
            <item.icon />
          </div>
          <div>
            <SidebarLabel>{item.title}</SidebarLabel>
          </div>
        </div>
        <div>
          {item.subNav && subnav ? (
            <item.iconOpened />
          ) : item.subNav ? (
            <item.iconClosed />
          ) : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((props: any) => {
          return (
            <DropdownLink to={props.path}>
              <props.icon />
              <SidebarLabel>{props.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};
