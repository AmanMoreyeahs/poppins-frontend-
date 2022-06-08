import React from "react";
import { SubMenu } from "./subMenu";
import { SidebarNav, SidebarWrap } from "../style";
import { SidebarData } from "./sideBarData";

const Sidebar = () => {
  return (
    <>
      <SidebarNav>
        <SidebarWrap>
          {SidebarData.map((item:any, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};

export default Sidebar;
