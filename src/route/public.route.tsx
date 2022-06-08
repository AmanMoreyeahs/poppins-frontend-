import React from "react";
import { Navigate } from "react-router-dom";
import { PublicProps } from "../components/sidebar/model";
import { isLogin } from "../utils/isLogin";
import { ROUTES } from "./constant";
/**
 *
 * @param {*} param0   component of page
 * @returns  public route
 */

const PublicRoute: React.FC<PublicProps> = ({
  component: Component,
  restricted,
  ...props
}) => {
  return isLogin() && !restricted ? (
    <Navigate replace to={ROUTES.DASHBOARD} />
  ) : (
    <Component {...props} />
  );
};

export default PublicRoute;
