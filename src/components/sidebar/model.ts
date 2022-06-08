export type MenuData = {
  title: string;
  path: string;
  icon: any;
};
export type SideMenu = {
  title: string;
  path: string;
  icon: any;
  iconClosed?: any;
  iconOpened?: any;
  subNav?: MenuData[];
};
export interface Props {
  component: any;
}
export interface PublicProps {
  component: any;
  restricted:boolean
}
export interface Children {
  children: any;
}
export interface PublicRoutes {
  key: number;
  path: string;
  component: any;
  restricted: boolean;
}
export interface PrivateRoutes {
  key: number;
  component: any;
  path: string;
  exact: boolean;
}
