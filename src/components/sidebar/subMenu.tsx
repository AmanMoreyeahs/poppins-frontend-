import  { useState } from "react";
import { SidebarLink, SidebarLabel, DropdownLink } from "../style";

export const SubMenu = ({ item }: { item: any }) => {
  const [subnav, setSubnav] = useState<boolean>(false);

  const showSubnav = () => setSubnav(!subnav);
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
        item.subNav.map((props: any, index: any) => {
          return (
            <DropdownLink to={props.path} key={index}>
              <props.icon />
              <SidebarLabel>{props.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};
