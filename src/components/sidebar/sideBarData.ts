import { HomeOutlined } from "@ant-design/icons";
import { TITLE } from "./constant";

type SubNav = {
  title: string;
  path: string;
  icon: unknown;
};
type SideMenu = {
  title: string;
  path: string;
  icon: any;
  iconClosed?: unknown;
  iconOpened?: unknown;
  subNav?: SubNav[];
};

export const SidebarData: SideMenu[] = [
  {
    title: TITLE.HOME,
    path: "#",
    icon: HomeOutlined,
  },
];
