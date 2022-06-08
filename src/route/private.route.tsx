import React from "react";
import { Navigate } from "react-router-dom";
import { ROUTES } from "./constant";
import { isLogin } from "../utils/isLogin";
import { Props } from "../components/sidebar/model";

/**
 *
 * @param {*} param0  component of page
 * @returns private route
 */
const PrivateRoute: React.FC<Props> = ({ component: Component, ...props }) => {
  return isLogin() ? (
    <Component {...props} />
  ) : (
    <Navigate replace to={ROUTES.INDEX} />
  );
};

export default PrivateRoute;
